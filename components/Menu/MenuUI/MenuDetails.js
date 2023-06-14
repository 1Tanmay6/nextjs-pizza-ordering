import CurItem from "./CurItems/CurItem";
import ListItems from "./ListItems/ListItems";

const MenuDetailed = (props) => {
  return (
    <>
      <CurItem item={props.item} />
      <ListItems items={props.items} />
    </>
  );
};

export default MenuDetailed;
