import React from 'react'

const CompleteTask = () => {
    return (
        <div className="flex-shrink-0 h-full p-5 w-[300px] bg-gradient-to-br from-violet-600 via-purple-700 to-fuchsia-800 rounded-xl shadow-xl">
            <div className="flex justify-between items-center">
                <h3 className="bg-red-600 text-sm px-3 py-1 rounded">High</h3>
                <h4 className="text-sm">18 July 2025</h4>
            </div>
            <h2 className="mt-5 text-2xl font-semibold">Make a youtube video</h2>
            <p className="text-sm mt-2 ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos assumenda ad velit adipisci. Excepturi, earum.</p>
            <div className='text-sm mt-2'>
                <h1 className='w-full  text-white mt-15 text-sm font-extrabold tracking-widest uppercase text-center bg-black/25 rounded py-2 shadow-2xl drop-shadow-lg'>Completed Task</h1>
            </div>
        </div>
    )
}

export default CompleteTask