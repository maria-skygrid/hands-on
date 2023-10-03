import { useForm, SubmitHandler } from "react-hook-form";

type FormData = {
  name: string, 
  price: number,
  link: string,
  image: string
}

const Form = (): JSX.Element => {

  const { register, handleSubmit } = useForm<FormData>();

  const onFormSubmit: SubmitHandler<FormData> = (data) => {
    console.log(data); 
  }

  return (
    <form onSubmit={handleSubmit(onFormSubmit)}>
      <input {...register("name")} type="text" placeholder="Item name"/>
      <input {...register("price")} type="number" placeholder="Item price"/>
      <input {...register("link")} type="text" placeholder="Item link"/>
      <input {...register("image")} type="text" placeholder="Item img"/>
      <button type="submit">Add Item</button>
    </form>
  )
}

export default Form;