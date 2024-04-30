import React from 'react'

function browse() {
  return (
    <div className = 'flex flex-col items-center justify-center h-screen'>
        <h1 className='font-bold'>Este es el browse</h1>
        <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Rockwell_Automation_logo_%282019%29.svg/2560px-Rockwell_Automation_logo_%282019%29.svg.png'
            alt='logo'
            className='flex items-center mb-8 h-20'></img>
        <div className='grid grid-cols-6 gap-4'>
            <button className='text-white font-bold py-2 px-4 rounded bg-orange-500 hover:bg-orange-700 py-2 px-6'><a href='http://localhost:3000/products' id='link'>Products</a></button>
            <button className='text-white font-bold py-2 px-4 rounded bg-orange-500 hover:bg-orange-700 py-2 px-6'><a href='http://localhost:3000/industries' id='link'>Industries</a></button>
            <button className='text-white font-bold py-2 px-4 rounded bg-orange-500 hover:bg-orange-700 py-2 px-6'><a href='http://localhost:3000/sales' id='link'>Sales</a></button>
            <button className='text-white font-bold py-2 px-4 rounded bg-orange-500 hover:bg-orange-700 py-2 px-6'><a href='http://localhost:3000/services' id='link'>Services</a></button>
            <button className='text-white font-bold py-2 px-4 rounded bg-orange-500 hover:bg-orange-700 py-2 px-6'><a href='http://localhost:3000/support' id='link'>Support</a></button>
            <button className='text-white font-bold py-2 px-4 rounded bg-orange-500 hover:bg-orange-700 py-2 px-6'><a href='http://localhost:3000/videogame' id='link'>Videogame</a></button>
        </div>
    </div>
  )
}

export default browse