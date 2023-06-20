import { useDispatch } from "react-redux";
import CartItem from "./cartItem";
import { Carousel } from "react-responsive-carousel";
import classes from "./cartScreen.module.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { cartActions } from "../../store/cart-slice";
import Notification from "../UI/Notification";
function loadScript(src) {
  return new Promise((resolve) => {
    const script = document.createElement("script");
    script.src = src;
    script.onload = () => {
      resolve(true);
    };
    script.onerror = () => {
      resolve(false);
    };
    document.body.appendChild(script);
  });
}

const CartScreen = () => {
  const [cartItems, setCartItems] = useState([]);
  const [total, setTotal] = useState(0);
  const [checkout, setCheckout] = useState(false);
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const dispatch = useDispatch();

  useEffect(() => {
    const getter = async () => {
      const response = await fetch("/api/pizza", {
        method: "GET",
      });
      const body = await response.json();
      setCartItems(body.result.items);
      setTotal(body.result.sum);
      console.log(body.result);
      setLoading(false);
    };

    getter();
  }, [checkout]);

  console.log(cartItems);

  async function displayRazorpay() {
    const res = await loadScript(
      "https://checkout.razorpay.com/v1/checkout.js"
    );

    if (!res) {
      alert("Razropay failed to load!!");
      return;
    }

    const data = await fetch("/api/razorpay", {
      method: "POST",
      body: JSON.stringify({
        amount: 50000,
      }),
    }).then((t) => t.json());

    console.log(data);

    console.log(total * 100);
    const amount = Math.floor(total * 100);
    const options = {
      key: "rzp_test_mN1wRwT7pbAZhP", // Enter the Key ID generated from the Dashboard
      amount: amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
      currency: "USD",
      name: "PIZZARIA",
      description: "Test Transaction",
      image: "https://example.com/your_logo",
      order_id: data.orderId, // Use the orderId returned by the API call
      callback_url: "http://localhost:3000/verify",

      notes: {
        address: "Razorpay Corporate Office",
      },
      theme: {
        color: "#d41b27",
      },
    };

    const paymentObject = new window.Razorpay(options);

    paymentObject.open();
    setTimeout(() => {
      paymentObject.close();
      onCheckout();
    }, 3000);

    setTimeout(() => {
      router.reload();
    }, 3500);
  }

  const onCheckout = async () => {
    dispatch(cartActions.clearCart());
    setCheckout(true);

    const response = await fetch("/api/pizza", {
      method: "DELETE",
    });
    console.log(response.status);
  };

  return (
    <>
      {checkout ? <Notification message="Order Placed" /> : <div></div>}
      <img
        src={"/images/cartBg.png"}
        width="1920"
        height="1080"
        alt="background"
      />
      <div className={classes.cartScreen}>
        <h2
          className={classes.cartScreenHeader}
          style={{ position: "absolute", top: "0" }}
        >
          Cart
        </h2>
        <div className={classes.backdrop}></div>
        <div className={classes.onBackdrop}>
          {loading ? (
            <div className={classes.spinner}></div>
          ) : (
            <div
              style={{
                height: "85%",
                width: "100%",
                backgroundColor: "transparent",
              }}
            >
              {cartItems.length === 0 ? (
                <div
                  style={{
                    color: "white",
                    fontSize: "26px",
                    height: "85%",
                    width: "100%",
                    backgroundColor: "transparent",
                    alignItems: "center",
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  Your Cart is Empty
                </div>
              ) : (
                <Carousel
                  showArrows={false}
                  showThumbs={false}
                  showStatus={false}
                  infiniteLoop={true}
                  autoPlay={true}
                  interval={3000}
                  transitionTime={500}
                  stopOnHover={true}
                  useKeyboardArrows={true}
                >
                  {cartItems.map((item) => (
                    <CartItem item={item} key={item.id} />
                  ))}
                </Carousel>
              )}
            </div>
          )}
          <div className={classes.bottomDiv}>
            <p style={{ color: "white", fontSize: "25px" }}>
              Total: ${total.toFixed(2)}
            </p>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-evenly",
                width: "35%",
                justifyItems: "center",
              }}
            >
              <button
                className={`${classes["special-btn"]} ${classes.animate}`}
                onClick={() => router.back()}
              >
                Back
              </button>
              <button
                className={classes["btn-main"]}
                onClick={displayRazorpay}
                disabled={cartItems.length === 0 ? true : false}
              >
                Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartScreen;
