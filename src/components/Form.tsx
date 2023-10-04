import { useForm, SubmitHandler } from "react-hook-form";
import TextField from "./atoms/TextField";

export type FormData = {
  name: string, 
  price: number,
  link: string,
  image: string
}

type FormProps = {
  formSubmit: SubmitHandler<FormData>
}

const Form = ({
  formSubmit
}: FormProps) => {

  const { register, handleSubmit } = useForm<FormData>();

  const onFormSubmit: SubmitHandler<FormData> = (data) => {
    console.log(data);
    formSubmit(data)
  }

  return (
    <form onSubmit={handleSubmit(onFormSubmit)}>
      {/* <input {...register("name")} type="text" placeholder="Item name"/> */}
      <TextField 
        label="Item name"
        placeholder="Item name"
        {...register("name")}
      />
      
      {/* <input {...register("price")} type="number" placeholder="Item price"/> */}
      <TextField 
        label="Item price"
        placeholder="Item price"
        type="number"
        {...register("price")}
      />
      
      {/* <input {...register("link")} type="text" placeholder="Item link" /> */}
      <TextField 
        label="🔗"
        placeholder="Item link"
        {...register("link")}
      />

      {/* <input {...register("image")} type="text" placeholder="Item image" /> */}
      <TextField 
        label="Image URL"
        placeholder="Image URL"
        {...register("image")}        
      />
      <button type="submit">Add Item</button>
    </form>
  )
}

export default Form;