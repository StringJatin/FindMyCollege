import { Search } from 'lucide-react'
import React from 'react'

const SearchCollege = () => {
  return (
    <div className="border-b border-gray-200 py-4">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input 
                type="text" 
                placeholder="Search by college name"
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md"
              />
            </div>
            <button className="text-blue-600 flex items-center gap-1">
              Saved Colleges (0)
            </button>
          </div>
        </div>
      </div>
  )
}

export default SearchCollege