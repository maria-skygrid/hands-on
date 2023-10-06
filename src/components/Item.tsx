type ItemProps = {
  product: string
  price: number,
  link: string,
  img: string  
}

const Item = ({
  product, 
  price, 
  link, 
  img
}: ItemProps) => {
  return (
    <div 
      className="flex bg-white p-3 mr-5 my-3 sm:w-full md:w-[45%] lg:w-2/5 shadow-sm rounded-md">
      <img 
        src={img} 
        alt="product image" 
        className="w-[25%] rounded mr-3 "
      />
      <div className="flex flex-col justify-between">
        <h2 className="font-bold text-base">{product}</h2>
        <p>{price}</p>
        <a href={link} style={{display: "block"}}target="_blank">Link to product</a>
      </div>
    </div>
  )
}

export default Item;