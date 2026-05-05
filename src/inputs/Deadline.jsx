import React from 'react'

const Deadline = ({name, label, value, onChange}) => {
  return (
    <div className='deadline'>
        <label>{label}</label>
        <input type='date' className='inputs'
        name={name}
        value={value}
        onChange={(e)=>onChange(name, e.target.value)}
        />
    </div>
  )
}

export default Deadline