import React from 'react'

export default function SelectInput({
  label,
  id,
  name,
  value,
  onChange,
  options,
  defaultOption,
  error,
}) {
  return (
    <div className='mb-3 flex flex-col'>
      <label className='font-bold' htmlFor={id}>
        {label}
      </label>
      <select
        className='contact-input'
        id={id}
        name={name}
        value={value || ''}
        onChange={onChange}
      >
        {defaultOption && (
          <option value='' hidden>
            {defaultOption}
          </option>
        )}
        {options.map((option, i) => (
          <option key={i} value={option}>
            {option}
          </option>
        ))}
      </select>
      <p className='text-sm text-red-600'>{error}</p>
    </div>
  )
}
