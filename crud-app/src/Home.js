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
        <h2>employee list</h2>
        <Link to='/create'>Create new employee</Link>
        <ul>
            {
              items.length>0 && items.map(item=><li key={item.id}>  {item.name} - <Link to={`/view/${item.id}`}>View</Link> - <Link to={`/edit/${item.id}`}>Edit</Link> </li>)
            }
        </ul>
    </div>
)
}
export default Home