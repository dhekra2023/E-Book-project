import React from 'react'
import { Link} from 'react-router-dom'
export default function home() {
  // const navigate= useNavigate()
  return (
    <div>
<h1>home</h1>

{/* <button
onClick={()=>{
  Link("/login")
}}
>navigate</button> */}

<Link to={"/login"}>login</Link>




    </div>
  )
}
