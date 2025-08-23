import React from 'react'
import {assets} from '../assets/assets'

const Navbar = () => {
  return (
    <div>
    <Link to='/'>
      <img src={assets.logo} alt="" className='w-28 sm:w-32 lg:w-40'/>
    </Link>
    <div>
      <div>
        <button>
          <img src={assets.credit_star} alt="" />
          <p>Credit left : 5 </p>
        </button>
        <p>Hi, PriyanshSingh</p>
        <div>
          <img src={assets.profile_icon} className='w-10 drop-shadow' alt="" />
        </div>
      </div>
    </div>
    </div>
  )
}

export default Navbar
