import { FieldValues, UseFormRegister } from "react-hook-form";

type TextFieldProps = {
  type: string, 
  placeholder: string, 
  name: string, 
  register: UseFormRegister<FieldValues>;
}

const TextField = ({type, placeholder, name, register}: TextFieldProps) => {

  return (
    <input type={type} placeholder={placeholder} {...register(name)} />
  )
}

export default TextField;