import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom'
import { useLocalStorage } from './hooks/useLocalStorage'
import expenseData from '../expenseData'
import Header from './components/Header'
import Footer from './components/Footer'
import ExpenseForm from './components/ExpenseForm'
import ExpenseTable from './components/ExpenseTable'
import Sidebar from './components/SideBar'
import HomePage from './components/Home'
import About from './components/About'
import Contact from './components/Contact'

function App() {
  const [expense, setExpense] = useLocalStorage('expense', {
    title: '',
    category: '',
    amount: '',
  })
  const [expenses, setExpenses] = useLocalStorage('expenses', expenseData)
  const [editingRowId, setEditingRowId] = useLocalStorage('editingRowId', '')
  return (
    <Router>
      <Header />
      {/* Main Content */}
      <main className='app-main'>
        {/* Sidebar */}
        <Sidebar />
        <Routes>
          <Route path='/' element={<Navigate to='/home' />} />
          <Route path='/home' element={<HomePage />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route
            path='/add'
            element={
              <ExpenseForm
                expense={expense}
                setExpense={setExpense}
                setExpenses={setExpenses}
                editingRowId={editingRowId}
                setEditingRowId={setEditingRowId}
              />
            }
          />
          <Route
            path='/show'
            element={
              <ExpenseTable
                expenses={expenses}
                setExpenses={setExpenses}
                setExpense={setExpense}
                setEditingRowId={setEditingRowId}
              />
            }
          />
        </Routes>
      </main>
      <Footer />
    </Router>
  )
}

export default App
