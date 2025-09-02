import { NavLink } from 'react-router-dom'

export default function Sidebar() {
  return (
    <aside className='sidebar'>
      <nav className='flex flex-col gap-4'>
        <NavLink
          to='/add'
          className={({ isActive }) =>
            isActive ? 'font-bold text-blue-400' : ''
          }
        >
          ➕ Add Details
        </NavLink>
        <NavLink
          to='/show'
          className={({ isActive }) =>
            isActive ? 'font-bold text-blue-400' : ''
          }
        >
          📋 Show Details
        </NavLink>
        {/* Suggestion / Tip Section */}
        <div className='border-t bg-gradient-to-r from-sky-950 to-blue-900 p-5 text-sm text-white'>
          💡 <span className='font-medium'>Tip:</span>
          Right click (or long press on mobile) on a row to edit or delete an
          expense.
        </div>
      </nav>
    </aside>
  )
}
