import React from 'react'

const NewTask = () => {
    return (
        <div className="flex-shrink-0 h-full p-5 w-[300px] bg-gradient-to-br from-green-500 via-teal-500 to-emerald-600 rounded-xl shadow-xl">
            <div className="flex justify-between items-center">
                <h3 className="bg-red-600 text-sm px-3 py-1 rounded">High</h3>
                <h4 className="text-sm">18 July 2025</h4>
            </div>
            <h2 className="mt-5 text-2xl font-semibold">Make a youtube video</h2>
            <p className="text-sm mt-2 ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos assumenda ad velit adipisci. Excepturi, earum.</p>
            <div className='mt-4'>
                <button className='bg-gradient-to-r from-yellow-400 to-orange-500 rounded py-2 px-6 text-base shadow-md transition-transform duration-400 hover:brightness-102 hover:scale-102 focus:outline-none'>Accept Task</button>
            </div>
        </div>
    )
}

export default NewTask