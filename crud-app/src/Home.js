import { useEffect,useState } from "react"
import { Link } from "react-router-dom"
import axios from "axios"

function Home(){
const [items,setItem]=useState([]);

useEffect(()=>{
    axios.get('https://jsonplaceholder.typicode.com/users').then(response=>setItem(response.data)).catch(error=>console.error('error while fetching data ',error));
    
},[])

return(
    <div>
        <h2>User list</h2>
        <Link to='/create'>Create new user</Link>
        <>
            {
              items.length>0 && items.map(item=><div className="mt-1 d-flex" key={item.id}><span> {item.name} </span> <span><Link to={`/view/${item.id}`}>View</Link> - <Link to={`/edit/${item.id}`}>Edit</Link> </span></div>)
            }
        </>
    </div>
)
}
export default Home