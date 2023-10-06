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
    <form onSubmit={handleSubmit(onFormSubmit)}
    className="text-sm md:w-[26%] lg:w-1/5 p-3 bg-slate-200 items-center">
      
      <div className="flex flex-wrap">
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
      </div>

      <div className="flex flex-wrap">
        <TextField 
          label="Item link"
          placeholder="Item link"
          {...register("link")}
        />

        <TextField 
          label="Image URL"
          placeholder="Image URL"
          {...register("image")}        
        />
      </div>
      <button type="submit">Add Item</button>
    </form>
  )
}

export default Form;