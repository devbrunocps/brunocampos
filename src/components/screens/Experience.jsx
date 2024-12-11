import React from 'react'

const Experience = () => {
    return (
        <div className='px-12 flex flex-col gap-8'>
            <div className="relative">
                <h1 className="text-2xl font-bold text-primary-500 dark:text-second-200">
                    EXPERIÊNCIA
                    <span className="absolute -bottom-1 left-0 w-[50px] bg-thirth-200 dark:bg-thirth-200 h-1"></span>
                </h1>
            </div>

            <div className='flex'>
                <div className="w-[50%] flex">
                    <img className='w-[18rem] h-[18rem] brightness-75' src="../../experience.png" alt="" />
                </div>
                <div className='w-[50%] flex flex-col'>
                    
                </div>
            </div>
        </div>
    )
}

export default Experience