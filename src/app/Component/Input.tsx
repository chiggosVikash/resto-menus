import React from 'react'
import { useFormContext, RegisterOptions } from 'react-hook-form'

interface InputProps {
  name: string;
  label: string;
  type?: string;
  defaultValue?: string;
  placeholder?: string;
  className?: string;
  rules?: RegisterOptions;
}

const Input = ({ 
  name, 
  label, 
  type = "text", 
  defaultValue = "", 
  placeholder = "", 
  className = "", 
  rules 
}: InputProps) => {
  const { register, formState: { errors } } = useFormContext()
  
  return (
    <div className="mb-4">
      <label htmlFor={name} className="block mb-2 text-sm font-medium text-gray-700">
        {label}
      </label>
      <input 
        id={name}
        type={type} 
        defaultValue={defaultValue}
        placeholder={placeholder} 
        className={`w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${className}`}
        {...register(name, rules)}
      />
      {errors[name] && (
        <p className="mt-1 text-sm text-red-600">{errors[name]?.message as string}</p>
      )}
    </div>
  )
}

export default Input
