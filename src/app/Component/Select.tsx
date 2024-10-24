import React from 'react';
import { useFormContext } from 'react-hook-form';

interface Option {
  value: string;
  label: string;
}

interface SelectProps {
  options: Option[];
  name: string;
  placeholder?: string;
  className?: string;
  rules?: object;
}

const Select: React.FC<SelectProps> = ({
  options,
  name,
  placeholder = 'Select an option',
  className = '',
  rules = {},
}) => {
  const { register, formState: { errors } } = useFormContext();

  return (
    <div>
      <select
        {...register(name, rules)}
        className={`p-2 border rounded-md ${className}`}
      >
        <option value="" disabled>
          {placeholder}
        </option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {errors[name] && (
        <p className="text-red-500 text-sm mt-1">{errors[name]?.message as string}</p>
      )}
    </div>
  );
};

export default Select;
