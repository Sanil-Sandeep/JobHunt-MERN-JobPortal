import React from 'react'
import Navbar from './shared/Navbar'
import FilterCard from './FilterCard'

const Jobs = () => {
  return (
    <div>
        <Navbar/>
        {/* Filter Page */}
        <FilterCard/>
        {/* Job Card */}
    </div>
  )
}

export default Jobs