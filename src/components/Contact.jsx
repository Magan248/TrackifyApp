import React from 'react'

export default function Contact() {
  return (
    <section className='form-container px-4lg:px-20'>
      <div className='contact-container'>
        {/* Left Side - Info */}
        <div className='flex flex-col justify-center'>
          <h2 className='mb-4 text-3xl font-bold lg:text-4xl'>Get in Touch</h2>
          <p className='mb-6'>
            Have a project idea or just want to say hello? Fill out the form or
            reach me directly at:
          </p>

          <div className='space-y-4'>
            <p>
              <span className='font-semibold'>📧 Email:</span>{' '}
              magan.netlify@gmail.com
            </p>
            <p>
              <span className='font-semibold'>📱 Phone:</span> +91-9838684946
            </p>
            <p>
              <span className='font-semibold'>🌍 Location:</span> Mukharji
              Nagar, New Delhi, India
            </p>
          </div>
          <div className='mt-6 flex gap-4'>
            <a
              href='https://github.com/Magan248'
              target='_blank'
              rel='noopener noreferrer'
              className='contact-button'
            >
              GitHub
            </a>
            <a
              href='https://www.linkedin.com/in/magan248'
              target='_blank'
              rel='noopener noreferrer'
              className='contact-button'
            >
              LinkedIn
            </a>
          </div>
        </div>

        {/* Right Side - Form */}
        <form className='space-y-5'>
          <div>
            <label className='mb-2 block font-medium'>Name</label>
            <input
              type='text'
              placeholder='Enter your name'
              className='contact-input'
            />
          </div>

          <div>
            <label className='mb-2 block font-medium'>Email</label>
            <input
              type='email'
              placeholder='Enter your email'
              className='contact-input'
            />
          </div>

          <div>
            <label className='mb-2 block font-medium'>Message</label>
            <textarea
              rows='4'
              placeholder='Write your message...'
              className='contact-input'
            ></textarea>
          </div>

          <button type='submit' className='contact-button'>
            Send Message
          </button>
        </form>
      </div>
    </section>
  )
}
