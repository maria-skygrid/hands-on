import { forwardRef } from 'react'

type TextFieldProps = {
  placeholder: string, 
  label: string, 
  type?: string, 
}

const TextField = forwardRef<HTMLInputElement, TextFieldProps>(({ label, type, ...props }, ref) => {
  return (
    <div className="mb-3 ">
      <label className="mr-2 block">
        {label}
      </label>
      <input 
        ref={ref} 
        type={type} 
        {...props}
        className="p-1 border border-solid border-black rounded "
      />
    </div>
  )
})

export default TextField;