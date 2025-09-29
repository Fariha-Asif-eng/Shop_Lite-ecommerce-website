import { Field } from 'formik'
import React from 'react'

function InputStyle({inpName, inpType, inpID, inpPlaceHolder, inVal, handleEvent}) {
  return (

    <Field id={inpID} type={inpType} name={inpName} placeholder={inpPlaceHolder} value={inVal}
      onChange={handleEvent}
    
    className='w-full px-4 py-2 outline-none  my-2 border border-zinc-700 rounded-md bg-zinc-800 text-amber-200 ' />
  )
}

export default InputStyle
