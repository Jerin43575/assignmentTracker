import React from 'react'

const Time = ({name, label, value, onChange}) => {
  return (
    <div className='time'>
        <label>{label}</label>
        <input type='time' className='inputs'
        name={name}
        value={value}
        onChange={(e)=>onChange(name, e.target.value)}
        />
    </div>
  )
}

export default Time