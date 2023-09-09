import React, { useState } from 'react'

function Category() {
    const [id,setId]=useState(0)
 
  return (
    <div>
      {`category ${id}`}
    </div>
  )
}

export default Category
