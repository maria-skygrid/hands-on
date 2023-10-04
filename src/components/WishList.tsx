import Item from "./Item";

type Item = {
  id?: number,
  name: string, 
  price: number,
  link: string,
  image: string
}

type WishListProps = {
  items: Item[]
}

const WishList = ({items}: WishListProps): JSX.Element => {

  return (
    <div className="p-5 overflow-y-auto">
      <h1 className="text-lg font-bold">Wishlist</h1>
      <div className="flex flex-wrap">
        {items.map((item) => {
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