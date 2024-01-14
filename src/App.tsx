import React from 'react'
import Header from './components/Header'
import Form from './components/Form'
import Body from './components/Body'

const App: React.FC = () => {
  return (
    <div className='bg-blue-200 h-screen flex items-center justify-center'>
      <div className='w-full max-w-2xl mx-3'>
      <div>
      <div>
        <Header />
      </div>
      <div>
        <Form />
      </div>
      </div>
      <div className=''>
        <Body />
      </div>
      </div>
    </div>
  )
}

export default App