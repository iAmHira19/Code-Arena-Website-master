import CodeForm from '@/components/CodeForm'
import React from 'react'

function page() {
  return (
    <div className='my-4 w-full h-screen flex justify-center items-center flex-col'>
    <h1>Adding New Code</h1>
    <CodeForm/>
    </div>
  )
}

export default page