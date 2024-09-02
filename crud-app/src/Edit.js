import { useEffect,useState } from "react"
import axios from "axios"
import { useParams,useNavigate } from "react-router-dom"

function Edit() {
    const {id}=useParams();
    const [user,setUser]=useState('');
    const navigate=useNavigate()

    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/users/${id}`).then((response)=>setUser(response.data.name)).catch(error=>console.error('error occured while editing','error'))
    },[id]);
    const handleSubmit=(e)=>{
        e.preventDefault();
        axios.put(`https://jsonplaceholder.typicode.com/users/${id}`).then( ()=> navigate('/')).catch(error=>console.error('error occured while editing','error'))
    }
    console.log(user);
    
  return (
    <div className='bg-gradient screen-size d-flex-content'>
      <div  className='card'>
        <h2>Edit user</h2>
        <br/>
         <form onSubmit={handleSubmit}>
        <label>
          Name: <input type="text" value={user} onChange={(e)=>setUser(e.target.value)} />
        </label>
        <button type="submit">Update</button>
      </form>
      </div>
    </div>
  )
}

export default Edit
