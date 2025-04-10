import React from 'react'
import axios from 'axios'
function Delete() {
    const deleteItem=async(e)=>{
        e.preventDefault()
        const id=e.target.id.value
        
        await axios.delete(`http://localhost:9000/users/${id}`)
        alert("data deleted")

    }

  return (
    
    <div>
        <h1>DATA DELETION</h1>
    
      <form onSubmit={deleteItem}>
        <label >
            Id:
            <input type="text" name='id'  />
        </label>

        
        
        <button type='submit'>delete</button>
      </form>
    </div>
  )
}

export default Delete;
