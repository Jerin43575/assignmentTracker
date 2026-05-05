import React from 'react'

  const Argency = ({name, label, value, onChange}) => {
  return (
    <div className='argency'>
      <label>{label}</label>
      <select className='inputs'
        name={name}
        value={value}
        onChange={(e)=>onChange(name, e.target.value)}
      >
        <option value = "">Select</option>
        <option value="Low">Low</option>
        <option value="Medium">Medium</option>
        <option value="High">High</option>
      </select>
    </div>
  )
}

export default Argency