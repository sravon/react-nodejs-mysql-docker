import React from 'react'

const Item = ({ name }) => {
  return (
    <div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
        <h3>{name}</h3>
        <button>Delete</button>
    </div>
  )
}

export default Item