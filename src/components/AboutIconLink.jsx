import React from 'react'
import {FaQuestion} from 'react-icons/fa'
import {Link} from 'react-router-dom'

function AboutIconLink() {
  return (
    <div className='about'>
        <Link to='/about'>
        <FaQuestion size={30} color='white'/>
        </Link>  
        </div>
         
  )
}

export default AboutIconLink