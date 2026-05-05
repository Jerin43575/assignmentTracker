import React from 'react'

const Activity = ({name, label, value, onChange}) => {
  return (
    <div className='activity'>
        <label>{label}</label>
        <input type='text' className='inputs'
        name={name}
        value={value}
        onChange={(e)=>onChange(name, e.target.value)}
        />
    </div>
  )
}

export default Activity