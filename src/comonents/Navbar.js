import React from 'react'
import {Link, useNavigate, useNavigation} from "react-router-dom"
export const Navbar = () => {
    const navigate=useNavigate();
    const handleOnClick=(id)=>{
        if(id===1){
            navigate('/products/1')
        }
        else{
            navigate('/products/2')
        }
    }
  return (
    <div style={{display:"flex",justifyContent:"space-around",fontSize:"25px",textDecoration:"none"}}>
        <Link style={{textDecoration:"none",fontSize:"27px"}} to="/">Home</Link>
        <Link style={{textDecoration:"none",fontSize:"27px"}} to="/about">About</Link>
        <Link style={{textDecoration:"none",fontSize:"27px"}} to="/products">Products</Link>
        <button onClick={()=>handleOnClick(1)}>Go to Product 1</button>
        <button onClick={()=>handleOnClick(2)}>Go to Product 2</button>
    </div>
  )
}
