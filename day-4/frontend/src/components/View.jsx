import React, { useEffect, useState } from 'react'
import axios from 'axios'

function View() {
    const [users,setUsers]=useState([])
    const handleView= async()=>{
         const res=await axios.get("http://localhost:9000/users");
            setUsers(res.data)
        
    }
    useEffect(()=>{
        handleView();

    },[users])
  return (
    <div>
        <h1>View Registration</h1>
        <table 
         
        style={{border:'5px solid red',
            backgroundColor:'yellow',
            width:'100%',
        }}>
            <thead style={{backgroundColor:'blue',color:'white',padding:'15px'}}>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Age</th>
                </tr>
            </thead>
                <tbody >
                    {users.map((user)=>(
                        <tr key={user.id}>
                            <td  align='center'>{user.id}</td>
                            <td align='center'>{user.name}</td>
                            <td align='center'>{user.age}</td>
                        </tr>
                    ))}
                </tbody>
            
        </table>
     
    </div>
  )
}

export default View;
