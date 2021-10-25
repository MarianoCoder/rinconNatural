import * as React from "react";
import ItemDetail from "../components/ItemDetail/ItemDetail";


const ItemDetailContainer = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-evently",
        flexWrap: "wrap",
      }}
    >
      <ItemDetail />
    </div>
  );
}
export default ItemDetailContainer;
