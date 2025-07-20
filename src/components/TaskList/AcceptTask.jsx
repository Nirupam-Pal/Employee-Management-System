import React from 'react'

const AcceptTask = ({data}) => {
    
    return (
        <div className="flex-shrink-0 h-full p-5 w-[300px] bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 rounded-xl shadow-xl">
            <div className="flex justify-between items-center">
                <h3 className="bg-red-600 text-sm px-3 py-1 rounded">High</h3>
                <h4 className="text-sm">{data.date}</h4>
            </div>
            <h2 className="mt-5 text-2xl font-semibold ">{data.title}</h2>
            <p className="text-sm mt-2">{data.description}</p>
            <div className='flex flex-col gap-1.5 mt-4'>
                <button className='bg-gradient-to-r from-blue-500 to-cyan-500 rounded py-2 px-1 text-sm shadow-md transition-transform duration-400 hover:brightness-102 hover:scale-102 focus:outline-none'>Mark as Completed</button>
                <button className='bg-gradient-to-r from-red-500 to-orange-500 rounded py-2 px-1 text-sm shadow-md transition-transform duration-400 hover:brightness-102 hover:scale-102 focus:outline-none'>Mark as Failed</button>
            </div>
        </div>
    )
}

export default AcceptTask