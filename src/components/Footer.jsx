import React from 'react'

export default function Footer() {
  return (
    <footer className='mx-auto flex h-20 max-w-7xl items-center justify-center bg-gradient-to-r from-sky-950 to-blue-950 text-white'>
      <p className='text-sm'>
        © {new Date().getFullYear()} Magan Singh. All rights reserved.
      </p>
    </footer>
  )
}
