import CurItem from "./MenuUI/CurItems/CurItem";
import SpecialCurItem from "./MenuUI/CurItems/SpecialCurItem";
import ListItems from "./MenuUI/ListItems/ListItems";

const MenuComponent = (props) => {
  const onFetch = (id) => {
    console.log(id);
  };

  return (
    <>
      <SpecialCurItem />
      <ListItems items={props.menuList} onFetch={onFetch} />
    </>
  );
};
export default MenuComponent;
