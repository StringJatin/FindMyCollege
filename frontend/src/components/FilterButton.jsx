import React from 'react'

const FilterButton = ({ options = ['Public', 'Private', 'Government Funded', 'All'] }) => {


    return (
        <div className="bg-black  flex m-auto max-w-50 py-8 justify-start gap-4">
            {
                options.map((option,index) => {
                    return (<div key={index} className='bg-gray-500 rounded-xl p-2 px-4 cursor-pointer'>
                        <h2 className="text-white text-lg font-medium ">{option}</h2>
                    </div>)
                })
            }
        </div>
    )
}

export default FilterButton;