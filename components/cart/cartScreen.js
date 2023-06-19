import { useDispatch } from "react-redux";
import CartItem from "./cartItem";
import { Carousel } from "react-responsive-carousel";
import classes from "./cartScreen.module.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { cartActions } from "../../store/cart-slice";
import Notification from "../UI/Notification";
import cart from "../../pages/cart";

const CartScreen = () => {
  const [cartItems, setCartItems] = useState([]);
  const [total, setTotal] = useState(0);
  const [checkout, setCheckout] = useState(false);
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
    };

    getter();
  }, [checkout]);

  console.log(cartItems);

  const onCheckout = async () => {
    dispatch(cartActions.clearCart());
    setCheckout(true);

    const timeout = setTimeout(() => {
      router.back();
    }, 1000);

    const response = await fetch("/api/pizza", {
      method: "DELETE",
    });
    console.log(response.status);
  };

  return (
    <>
      {checkout ? <Notification message="Order Placed" /> : <div></div>}
      <div className={classes.cartScreen}>
        <h2 className={classes.cartScreenHeader}>Cart</h2>
        <div className={classes.backdrop}></div>
        <div className={classes.onBackdrop}>
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
              >
                Back
              </button>
              <button
                className={classes["btn-main"]}
                onClick={onCheckout}
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
