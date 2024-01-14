import React from 'react'

const Form: React.FC = () => {
  return (
    <form className='flex justify-center'>
        <input
          className='px-5 py-2 rounded-l-full bg-blue-50 placeholder:text-blue-300'
          type='text'
          placeholder='Enter Todos'
        />
        <button className='px-5 rounded-r-full bg-blue-500 text-white'>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
</svg>

        </button>
    </form>
  )
}

export default Form