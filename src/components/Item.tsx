interface ItemProps {
  data: {
    product: string
    price: number,
    link: string,
    img: string  
  }
}

const Item = ({data}: ItemProps): JSX.Element => {
  const { product, price, link, img } = data
  return (
    <div>
      <p>{product}</p>
      <p>{price}</p>
      <a href={link} style={{display: "block"}}target="_blank">Link to product</a>
      <img style={{width: "300px"}}src={img} alt="product image" />
    </div>
  )
}

export default Item;