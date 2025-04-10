import React from 'react'
import axios from 'axios'
function Update() {
    const handleupdate=async(e)=>{
        e.preventDefault()
        const id=e.target.id.value
        const name=e.target.name.value
        const age=e.target.age.value
        const user={
            name,
            age
        }
        await axios.put(`http://localhost:9000/users/${id}`,user)
        alert("data updated")

    }

  return (
    
    <div>
        <h1>DATA UPDATION PAGE</h1>
      <form onSubmit={handleupdate}>
        <label >
            Id:
            <input type="text" name='id'  />
        </label>

        <label >
            Name:
            <input type="text" name='name'  />
        </label>

        <label >
            Age:
            <input type="number" name='age' />
        </label>
        
        <button type='submit'>Update</button>
      </form>
    </div>
  )
}

export default Update;
