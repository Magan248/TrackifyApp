import React from 'react'

export default function HomePage() {
  return (
    <div className='home-container'>
      {/* Hero Section */}
      <section className='space-y-4 text-center'>
        <h1 className='text-4xl font-bold md:text-5xl'>
          Manage Your Expenses Effortlessly
        </h1>
        <p className='text-lg text-gray-300 md:text-xl'>
          Track, sort, and analyze your daily spending in one place. Stay on top
          of your finances with ease.
        </p>
      </section>

      {/* Quick Stats Section */}
      <section className='space-y-4'>
        <h2 className='text-3xl font-semibold'>Quick Stats</h2>
        <p className='text-gray-300'>
          See an overview of your expenses for today and this month at a glance.
        </p>
        <div className='grid grid-cols-1 gap-4 md:grid-cols-3'>
          <div className='rounded-lg bg-gradient-to-r from-sky-900 to-blue-900 p-4 shadow-md'>
            <h3 className='text-xl font-medium'>Total Expenses</h3>
            <p className='mt-2 text-lg'>₹12,000</p>
          </div>
          <div className='rounded-lg bg-gradient-to-r from-sky-900 to-blue-900 p-4 shadow-md'>
            <h3 className='text-xl font-medium'>Grocery</h3>
            <p className='mt-2 text-lg'>₹3,000</p>
          </div>
          <div className='rounded-lg bg-gradient-to-r from-sky-900 to-blue-900 p-4 shadow-md'>
            <h3 className='text-xl font-medium'>Bills</h3>
            <p className='mt-2 text-lg'>₹2,500</p>
          </div>
        </div>
      </section>

      {/* Recent Transactions Section */}
      <section className='space-y-4'>
        <h2 className='text-3xl font-semibold'>Recent Transactions</h2>
        <p className='text-gray-300'>
          View your last few expenses and quickly edit or delete if needed.
        </p>
        <div className='overflow-x-auto'>
          <table className='min-w-full rounded-lg bg-gradient-to-r from-sky-900 to-blue-900 shadow-md'>
            <thead>
              <tr>
                <th className='p-3 text-left'>Title</th>
                <th className='p-3 text-left'>Category</th>
                <th className='p-3 text-left'>Amount</th>
              </tr>
            </thead>
            <tbody>
              <tr className='cursor-pointer border-t border-gray-700 hover:bg-gray-700'>
                <td className='p-3'>Grocery Shopping</td>
                <td className='p-3'>Grocery</td>
                <td className='p-3'>₹500</td>
              </tr>
              <tr className='cursor-pointer border-t border-gray-700 hover:bg-gray-700'>
                <td className='p-3'>Electricity Bill</td>
                <td className='p-3'>Bills</td>
                <td className='p-3'>₹1200</td>
              </tr>
              <tr className='cursor-pointer border-t border-gray-700 hover:bg-gray-700'>
                <td className='p-3'>Movie Tickets</td>
                <td className='p-3'>Entertainment</td>
                <td className='p-3'>₹800</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Action Buttons */}
      <section className='space-y-2 text-center'>
        <h2 className='text-3xl font-semibold'>Quick Actions</h2>
        <p className='text-gray-300'>
          Add or manage expenses quickly using the buttons below.
        </p>
        <div className='mt-4 flex flex-col justify-center gap-4 md:flex-row'>
          <button className='rounded-lg bg-indigo-600 px-6 py-2 font-medium hover:bg-indigo-500'>
            Add Expense
          </button>
          <button className='rounded-lg bg-green-600 px-6 py-2 font-medium hover:bg-green-500'>
            View Dashboard
          </button>
        </div>
      </section>
    </div>
  )
}
