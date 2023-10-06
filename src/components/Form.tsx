import { useForm, SubmitHandler } from "react-hook-form";
import TextField from "./atoms/TextField";
import { useContext } from "react";
import { ItemContext } from "../context/Item";
import { ItemContextType } from "../context/Item";

export type FormData = {
  name: string, 
  price: number,
  link: string,
  image: string
}

const Form = () => {

  const { register, handleSubmit } = useForm<FormData>();
  const { addItem } = useContext<ItemContextType>(ItemContext)

  const onFormSubmit: SubmitHandler<FormData> = (data) => {
    addItem(data)
  }

  return (
    <form onSubmit={handleSubmit(onFormSubmit)}>
      <TextField 
        label="Item name"
        placeholder="Item name"
        {...register("name")}
      />
      
      <TextField 
        label="Item price"
        placeholder="Item price"
        type="number"
        {...register("price")}
      />
      
      <TextField 
        label="🔗"
        placeholder="Item link"
        {...register("link")}
      />

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