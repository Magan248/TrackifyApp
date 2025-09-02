import { NavLink } from 'react-router-dom'

export default function Header() {
  return (
    <header className='header'>
      <div className='container mx-auto flex items-center justify-between px-1 sm:px-2'>
        {/* Logo / App Name */}
        <h1 className='text-xl font-bold sm:text-2xl'>Todo App</h1>

        {/* Navigation */}
        <nav>
          <ul className='flex gap-6'>
            <li>
              <NavLink
                to='/home'
                className={({ isActive }) =>
                  isActive ? 'font-bold text-blue-400' : ''
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to='/about'
                className={({ isActive }) =>
                  isActive ? 'font-bold text-blue-400' : ''
                }
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to='/contact'
                className={({ isActive }) =>
                  isActive ? 'font-bold text-blue-400' : ''
                }
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
