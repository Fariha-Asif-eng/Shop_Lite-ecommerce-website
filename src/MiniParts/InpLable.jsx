import React from 'react'

function InpLable({labelName, labelFor}) {
  return (
    <label htmlFor={labelFor} className='text-left font-medium text-amber-100 '>{labelName}</label>
  )
}

export default InpLable
