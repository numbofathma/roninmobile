import React, { FC } from 'react';

interface ICustomTextareaProps {
  id: string;
  name: string;
  value: string;
  placeholder: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  disabled?: boolean;
  label?: string;
  error?: string;
  className?: string;
  onBlur?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const CustomTextarea: FC<ICustomTextareaProps> = ({
  label,
  id,
  placeholder,
  name,
  value,
  onChange,
  error = '',
  disabled = false,
  className = '',
  onBlur,
}) => (
  <div className={className}>
    {label && (
      <label htmlFor={id} className='mb-2 block cursor-pointer text-xs font-bold uppercase tracking-wide text-white'>
        {label}
      </label>
    )}
    <textarea
      placeholder={placeholder}
      id={id}
      name={name}
      className='mb-3 block w-full resize-none appearance-none rounded border-4 border-gray-300 px-4 py-3 leading-tight text-gray-700 hover:border-myBlue focus:border-myBlue focus:bg-white focus:outline-none disabled:bg-gray-300'
      value={value}
      autoComplete='off'
      disabled={disabled}
      onChange={onChange}
      onBlur={onBlur}
      rows={5}
    />
    <div className='bold text-xs text-myRed' style={{ height: '1rem', visibility: error ? 'visible' : 'hidden' }}>
      {error}
    </div>
  </div>
);

export default CustomTextarea;
