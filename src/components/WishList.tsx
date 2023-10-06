import Item from "./Item";
import { useContext } from "react";
import { ItemContext } from "../context/Item";

const WishList = () => {
  const { itemList } = useContext(ItemContext)

  return (
    <div>
      <h1>Wishlist</h1>
      {itemList.map((item) => {
        return ( 
          <Item 
            key={item.id}
            product={item.name}
            price={item.price}
            link={item.link}
            img={item.image}
          />
        ) 
      })}
    </div>
  )
}

export default WishList;