import { useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"
const Create = () => {
    const [user,setUser]=useState('');
    const navigate=useNavigate();

    const handleSubmit=(e)=>{
        e.preventDefault();
        axios.post('https://jsonplaceholder.typicode.com/users',{user}).then(()=>navigate('/')).catch((error)=>console.error('Error creating item:', error))
    };

  return (
    <div>
        <h2>Create user</h2>

        <form onSubmit={handleSubmit}>
            <label>
                Name:<input type="text" value={user} onChange={(e)=>setUser(e.target.value)}/>
            </label>
            <button type="submit">submit</button>
        </form>

    </div>
  )
}

export default Create