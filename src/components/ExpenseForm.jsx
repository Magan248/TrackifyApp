import React, { useState } from 'react'
import Input from './Input'
import SelectInput from './SelectInput'
import { useNavigate } from 'react-router-dom'

export default function ExpenseForm({
  expense,
  setExpense,
  setExpenses,
  editingRowId,
  setEditingRowId,
}) {
  const navigate = useNavigate()
  const [errors, setErrors] = useState({})

  const validationConfig = {
    title: [
      { required: true, message: 'Please enter a title' },
      { minLength: 2, message: 'Title should be at least 2 character log' },
    ],
    category: [{ required: true, message: 'Please select a category' }],
    amount: [
      {
        required: true,
        message: 'Please enter an amount',
      },
      {
        pattern: /^(0|[1-9]\d*)(\.\d{1,2})?$/,
        message: 'Please Enter a valid number',
      },
    ],
  }

  const validateInput = (formData) => {
    const errorsData = {}
    Object.entries(formData).forEach(([key, value]) => {
      validationConfig[key].some((rule) => {
        if (rule.required && !value) {
          errorsData[key] = rule.message
          return true
        }
        if (rule.minLength && value.length < 2) {
          errorsData[key] = rule.message
          return true
        }
        if (rule.pattern && !rule.pattern.test(value)) {
          errorsData[key] = rule.message
          return true
        }
      })
    })
    setErrors(errorsData)
    return errorsData
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    const validateResult = validateInput(expense)
    if (Object.keys(validateResult).length) return

    if (editingRowId) {
      setExpenses((prevState) =>
        prevState.map((prevExpense) => {
          if (prevExpense.id === editingRowId) {
            return { ...expense, id: editingRowId }
          }
          return prevExpense
        })
      )
      setEditingRowId('')
      setExpense({ title: '', category: '', amount: '' })
      navigate('/show')
      return
    }
    setExpenses((prevState) => [
      ...prevState,
      { ...expense, id: crypto.randomUUID() },
    ])
    setExpense({ title: '', category: '', amount: '' })
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setExpense((prevState) => ({
      ...prevState,
      [name]: value,
    }))
    setErrors({})
  }

  return (
    <div className='form-container'>
      <h1 className='mb-5 text-2xl font-bold'>Add Expense</h1>
      <form className='' onSubmit={handleSubmit}>
        <Input
          label='Title'
          id='title'
          name='title'
          value={expense?.title || ''}
          onChange={handleChange}
          error={errors.title}
        />
        <SelectInput
          label='Category'
          id='category'
          name='category'
          value={expense?.category || ''}
          options={['Grocery', 'Cloths', 'Bills', 'Education', 'Medicine']}
          defaultOption={'Select Category'}
          onChange={handleChange}
          error={errors.category}
        />
        <Input
          label='Amount'
          id='amount'
          name='amount'
          value={expense?.amount || ''}
          onChange={handleChange}
          error={errors.amount}
        />
        <button className='contact-button'>
          {editingRowId ? 'Save' : 'Add'}
        </button>
      </form>
    </div>
  )
}
