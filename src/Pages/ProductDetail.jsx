import * as React from "react";
import ItemDetail from "../components/ItemDetail/ItemDetail";
import { useParams } from "react-router";



const ProductDetail = () => {
  const [items, setItems] = React.useState ([]);
  
 

  
  return (
    <div style={{display: "flex", justifyContent: "space-evently", flexWrap: "wrap"}}>
     
      
​<ItemDetail key={items.id} title={items.title} description={items.description} price={items.price} image={items.image} />
      
      
       
  </div>
  
  )}
  

export default ProductDetail;