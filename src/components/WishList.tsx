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
    <div>
      <h1>Wishlist</h1>
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
  )
}

export default WishList;