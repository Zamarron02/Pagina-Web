import React from 'react'

function login() {
    return (
        <div  className='flex flex-col items-center h-screen'>
            <h1 className='font-bold mb-20'>Esta es la pagina de Login</h1>
            <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Rockwell_Automation_logo_%282019%29.svg/2560px-Rockwell_Automation_logo_%282019%29.svg.png'
            alt='logo'
            className='h-20 mb-10 '></img>
            <form className='flex flex-col space-y-4 h-30 mb-8'>
                <input type='email' placeholder='E-Mail' className='p-2 border border-gray-300 rounded'></input>
                <input type='password' placeholder='Password' className='p-2 border border-gray-300 rounded'></input>
                <button type='submit' className='bg-orange-500 text-white font-bold p-2 rounded hover:bg-orange-600'><a href='http://localhost:3000/browse' id='link'>Submit</a></button>
                <button type='account' className='bg-gray-400 text-white font-bold p-2 rounded hover:bg-gray-500'>Create New Account</button>
            </form>
        </div>
    )
}

export default login