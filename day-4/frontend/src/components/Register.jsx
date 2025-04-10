import React from 'react'
import axios from 'axios'
function Register() {

    const handleregister = async (e) => {
        e.preventDefault()
        const name = e.target.name.value
        const age = e.target.age.value
        const users = {
            name,
            age
        }
        await axios.post("http://localhost:9000/users", users)
        alert("data received")
    }
  return (
    <div>
        <form  onSubmit={handleregister}>
            <label >Name:
                <input type="text" name='name' id="" />
            </label>
            
            <label htmlFor="">
                Age:
                <input type="number" name='age' id="" />
            </label>
            <button type='submit'>Submit</button>
        </form>
    </div>
  )
}

export default Register
