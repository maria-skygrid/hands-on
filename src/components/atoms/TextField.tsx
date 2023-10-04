import { forwardRef } from 'react'

type TextFieldProps = {
  placeholder: string, 
  label: string, 
  type?: string, 
}

const TextField = forwardRef<HTMLInputElement, TextFieldProps>(({ label, type, ...props }, ref) => {
  return (
    <div>
      <label>{label}</label>
      <input ref={ref} type={type} {...props}/>
    </div>
  )
})

export default TextField;