import React from 'react'

function Info() {
 
     return (
    <div className='p-6 max-w-lg mx-auto'>
      <h2 className='text-2xl font-bold mb-4 text-center'>Contact me</h2>
      <form className='space-y-4'>
        <input type="text" 
        placeholder='Your name'
        className='w-full p-2 border rounded-md'/>
        
        <input type="email" 
        placeholder='Your eamil'
        className='w-full p-2 border rounded-md'/>

        <textarea placeholder='message' className='border w-full p-2 rounded-md h-32'></textarea>
        <button type='submit' className='bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 cursor-pointer transition'>Send message</button>
        
      </form>
    </div>
  )
  
}

export default Info