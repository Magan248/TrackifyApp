import { useState } from 'react'
import { useFilter } from '../hooks/useFilter'
import ContextMenu from './ContextMenu.jsx'

export default function ExpenseTable({
  expenses,
  setExpenses,
  setExpense,
  setEditingRowId,
}) {
  const [menuPosition, setMenuPosition] = useState({})
  const [rowId, setRowId] = useState('')
  const [sortCallback, setSortCallback] = useState(() => () => {})

  const [filteredData, setQuery, query] = useFilter(
    expenses,
    (data) => data.category
  )
  const total = filteredData.reduce((sum, item) => sum + Number(item.amount), 0)
  return (
    <>
      <ContextMenu
        menuPosition={menuPosition}
        setMenuPosition={setMenuPosition}
        setExpenses={setExpenses}
        expenses={expenses}
        rowId={rowId}
        setExpense={setExpense}
        setEditingRowId={setEditingRowId}
      />
      <div className='mt-10 w-full justify-center md:w-2/3'>
        <h1 className='mb-5 text-2xl font-bold'>Expense List</h1>
        <table className='table-wrapper' onClick={() => setMenuPosition({})}>
          <thead>
            <tr>
              <th className='table-cell'>
                {' '}
                <div className='flex px-1 md:px-2'>
                  <span>Title</span>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='10'
                    viewBox='0 0 384 512'
                    className='mx-1 ml-auto cursor-pointer transition-all active:-translate-y-1'
                    onClick={() => {
                      setSortCallback(
                        () => (a, b) => b.title.localeCompare(a.title)
                      )
                    }}
                  >
                    <title>Ascending</title>
                    <path d='M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z' />
                  </svg>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='10'
                    viewBox='0 0 384 512'
                    className='mx-1 ml-auto cursor-pointer transition-all active:translate-y-1'
                    onClick={() => {
                      setSortCallback(
                        () => (a, b) => a.title.localeCompare(b.title)
                      )
                    }}
                  >
                    <title>Descending</title>
                    <path d='M169.4 470.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 370.8 224 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 306.7L54.6 265.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z' />
                  </svg>
                </div>
              </th>
              <th className='table-cell'>
                <select
                  className='w-full'
                  value={query}
                  onChange={(e) => setQuery(e.target.value.toLowerCase())}
                >
                  <option value=''>All</option>
                  <option value='grocery'>Grocery</option>
                  <option value='cloths'>Clothes</option>
                  <option value='bills'>Bills</option>
                  <option value='education'>Education</option>
                  <option value='medicine'>Medicine</option>
                </select>
              </th>
              <th className='table-cell'>
                <div className='flex px-1 md:px-2'>
                  <span className='mx-1'>Amount</span>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='10'
                    viewBox='0 0 384 512'
                    className='mx-1 ml-auto cursor-pointer transition-all active:-translate-y-1'
                    onClick={() => {
                      setSortCallback(() => (a, b) => b.amount - a.amount)
                    }}
                  >
                    <title>Ascending</title>
                    <path d='M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z' />
                  </svg>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='10'
                    viewBox='0 0 384 512'
                    className='mx-1 ml-auto cursor-pointer transition-all active:translate-y-1'
                    onClick={() => {
                      setSortCallback(() => (a, b) => a.amount - b.amount)
                    }}
                  >
                    <title>Descending</title>
                    <path d='M169.4 470.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 370.8 224 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 306.7L54.6 265.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z' />
                  </svg>
                </div>
              </th>
            </tr>
          </thead>
          <tbody>
            {filteredData
              .sort(sortCallback)
              .map(({ id, title, category, amount }) => (
                <tr
                  key={id}
                  onContextMenu={(e) => {
                    e.preventDefault()
                    setRowId(id)
                    setMenuPosition({ left: e.clientX, top: e.clientY })
                  }}
                  onTouchStart={(e) => {
                    // long press ke liye timer set karo
                    const timer = setTimeout(() => {
                      setMenuPosition({
                        left: e.touches[0].pageX,
                        top: e.touches[0].pageY,
                      })
                      setRowId(expense.id)
                    }, 700) // 700ms = long press
                    e.currentTarget.longPressTimer = timer
                  }}
                  onTouchEnd={(e) => {
                    clearTimeout(e.currentTarget.longPressTimer)
                  }}
                >
                  <td className='table-cell'>{title}</td>
                  <td className='table-cell'>{category}</td>
                  <td className='table-cell'>{amount}</td>
                </tr>
              ))}
            <tr>
              <th className='table-cell'>Total</th>
              <th className=''>
                <span
                  className='button-style'
                  onClick={() => {
                    setSortCallback(() => () => {})
                  }}
                >
                  Clear Sort
                </span>
              </th>
              <th className='table-cell'>₹{total}</th>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  )
}
