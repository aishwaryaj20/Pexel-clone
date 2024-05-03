import React from 'react'
import spinner from  '../spinner.gif';

const Loader = () => {
  return (
    <div>
      <div className='img'>
      <img src={spinner} alt=''/>
      </div>
    </div>
  )
}

export default Loader
