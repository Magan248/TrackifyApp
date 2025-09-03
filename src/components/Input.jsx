import React from 'react'

export default function Input({ label, id, name, value, error, onChange }) {
  return (
    <div className='my-5 flex flex-col text-lg'>
      <label className='font-bold' htmlFor={id}>
        {label}
      </label>
      <input
        className='contact-input'
        id={id}
        name={name}
        value={value || ''}
        onChange={onChange}
      />
      <p className='text-sm text-red-600'>{error}</p>
    </div>
  )
}
