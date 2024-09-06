import { useEffect,useState } from "react"
import { Link } from "react-router-dom"
import axios from "axios"

function Home(){
const [items,setItem]=useState([]);

useEffect(()=>{
    axios.get('https://jsonplaceholder.typicode.com/users').then(response=>setItem(response.data)).catch(error=>console.error('error while fetching data ',error));
    
},[])

return(
    <div className='bg-gradient screen-size d-flex-content'>
        <div className='card custom-card'>
        <h2>User list</h2>
       <div> <Link to='/create'  class="button-24">Create new user</Link></div>
       <br/>
        <>
            {
              items.length>0 && items.map(item=><Link className="text-none" to={`/view/${item.id}`}><div className="mt-1 d-flex" key={item.id}><span> {item.name} </span> <span> <Link to={`/edit/${item.id}`}>Edit</Link> </span></div></Link>)
            }
        </>
        </div>
    </div>
)
}
export default Home