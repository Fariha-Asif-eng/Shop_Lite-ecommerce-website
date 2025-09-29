import React from 'react'

function BTNstyles({btnText, callFun}) {
  return (
    <button type='button' 
    onClick={callFun} className='mx-auto rounded-md p-2 outline-0 bg-blue-800 text-white font-semibold cursor-pointer transition-colors duration-200 hover:bg-blue-100 hover:text-blue-800  min-w-[20%]'>{btnText}</button>
  )
}

export default BTNstyles
