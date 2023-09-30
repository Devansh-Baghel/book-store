import React from 'react'
import errorSvg from "../assets/undraw_page_not_found.svg"

function Error() {
  return (
    <div className='flex justify-center items-center'>
      <img src={errorSvg} alt="404 page not found" className='w-1/2' />
    </div>
  )
}

export default Error
