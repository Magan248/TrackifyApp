import React from 'react'

export default function About() {
  return (
    <div className='mt-10 flex flex-col gap-8 rounded-sm text-white'>
      <section className='rounded-sm bg-gradient-to-r from-blue-900 to-sky-900 px-4 py-10'>
        <div className='container mx-auto flex flex-col gap-8 px-2 sm:px-10 lg:flex-row'>
          {/* Left side image */}
          <div className='flex-1'>
            <img
              src='https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d'
              alt='About Me'
              className='w-full rounded-sm object-cover shadow-2xl'
            />
          </div>

          {/* Right side content */}
          <div className='flex-1 text-center lg:text-left'>
            <h2 className='mb-4 text-4xl font-bold lg:text-5xl'>About Me</h2>
            <p className='mb-6 text-lg leading-relaxed lg:text-xl'>
              Hi! I'm Magan Singh, a passionate Frontend Developer with a flair
              for crafting engaging and interactive web experiences. I
              specialize in HTML, CSS, JavaScript, and React.
            </p>
            <p className='mb-6 text-lg leading-relaxed lg:text-xl'>
              I love turning ideas into functional and visually appealing
              applications, constantly learning new technologies to improve my
              craft.
            </p>

            <div className='flex justify-center gap-4 lg:justify-start'>
              <a href='#contact' className='aboutUs-button'>
                Contact Me
              </a>
              <a
                href='https://github.com/Magan248'
                target='_blank'
                rel='noopener noreferrer'
                className='aboutUs-button px-4'
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
      </section>
      <section
        className='rounded-sm bg-gradient-to-r from-sky-900 to-blue-900 px-4 py-10 md:px-20'
        id='about'
      >
        <div className='mx-auto max-w-4xl text-center'>
          <h2 className='mb-6 text-3xl font-bold md:text-4xl'>
            About This Project
          </h2>
          <p className='mb-4 text-lg md:text-xl'>
            Expense Tracker is a web application designed to help users manage
            their daily expenses efficiently. You can add, edit, delete, and
            sort your expenses quickly, keeping track of your finances with
            ease.
          </p>
          <p className='mb-6 text-lg md:text-xl'>
            This project is built with{' '}
            <span className='font-semibold'>React</span> for the frontend,
            styled using
            <span className='font-semibold'> Tailwind CSS</span>, and uses{' '}
            <span className='font-semibold'>LocalStorage</span>
            to save your data locally in the browser.
          </p>
          <h3 className='mb-2 text-2xl font-semibold'>Technologies Used:</h3>
          <div className='mt-4 flex flex-wrap justify-center gap-4'>
            <span className='rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-800'>
              React
            </span>
            <span className='rounded-full bg-green-100 px-3 py-1 text-sm font-medium text-green-800'>
              Tailwind CSS
            </span>
            <span className='rounded-full bg-yellow-100 px-3 py-1 text-sm font-medium text-yellow-800'>
              JavaScript
            </span>
            <span className='rounded-full bg-purple-100 px-3 py-1 text-sm font-medium text-purple-800'>
              LocalStorage
            </span>
          </div>
        </div>
      </section>
    </div>
  )
}
