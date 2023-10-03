import Item from "./Item";

interface Item {
  id: number, 
  product: string
  price: number,
  link: string,
  img: string
}

const WishList = (): JSX.Element => {

  const items: Item[] = [
    {
      id: 1, 
      product: "chair", 
      price: 5000, 
      link: "https://kanademono.design/products/dch-k03?variant=32698086096958&gclid=Cj0KCQjw1OmoBhDXARIsAAAYGSH6ENjmpqJrxwaqkErHlx07OnYi6aoS4TtoUkAoNdgOuIT2vU3CHxgaAuPFEALw_wcB", 
      img: "https://kanademono.design/cdn/shop/products/KanademonoSimpleDiningChairNatural_02_1080x.jpg?v=1629339321"
    }, 
    {
      id: 2, 
      product: "coffee filter holder", 
      price: 2.800, 
      link: "https://www.creema.jp/item/15827002/detail", 
      img: "https://c.p02.c4a.im/images/item/15827002/6f7ecd48131d456494d6e3eaf756b53021fdea73ee2ef342dbe5d338efeb5a78?d=583x585"
    }
  ]

  return (
    <div>
      <h1>Wishlist</h1>
      {items.map((item) => {
        return ( 
          <Item 
            key={item.id}
            product={item.product}
            price={item.price}
            link={item.link}
            img={item.img}
          />
        ) 
      })}
    </div>
  )
}

export default WishList;