interface ItemProps {
  product: string
  price: number,
  link: string,
  img: string
}

const Item = (props: {data: ItemProps}): JSX.Element => {

  return (
    <div>
      <p>{props.data.product}</p>
      <p>{props.data.price}</p>
      <a href={props.data.link} style={{display: "block"}}target="_blank">Link to product</a>
      <img style={{width: "300px"}}src={props.data.img} alt="product image" />
    </div>
  )
}

export default Item;