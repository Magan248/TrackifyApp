import { useNavigate } from 'react-router-dom'
export default function ContextMenu({
  menuPosition,
  setMenuPosition,
  setExpenses,
  expenses,
  rowId,
  setExpense,
  setEditingRowId,
}) {
  const navigate = useNavigate()
  if (!menuPosition.left) return
  return (
    <div className='table-context-menu' style={menuPosition}>
      <div
        className='table-context-edit-delete-style'
        onClick={() => {
          const { title, category, amount } = expenses.find(
            (expense) => expense.id === rowId
          )
          setEditingRowId(rowId)
          setExpense({ title, category, amount })
          setMenuPosition({})
          navigate('/add')
        }}
      >
        Edit
      </div>
      <div
        className='table-context-edit-delete-style'
        onClick={() => {
          setExpenses((prevState) =>
            prevState.filter((expense) => expense.id !== rowId)
          )
          setMenuPosition({})
        }}
      >
        Delete
      </div>
    </div>
  )
}
