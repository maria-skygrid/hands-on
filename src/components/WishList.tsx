import Item from "./Item";
import { useContext } from "react";
import { ItemContext } from "../context/Item";

const WishList = () => {
  const { itemList } = useContext(ItemContext)

  return (
    <div className="p-5 overflow-y-auto">
      <h1 className="text-lg font-bold">Wishlist</h1>
      <div className="flex flex-wrap">
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
    </div>
  )
}

export default WishList;