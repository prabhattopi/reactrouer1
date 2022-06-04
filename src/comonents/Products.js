import React,{useState,useEffect} from 'react'
import { Link, Outlet } from 'react-router-dom'

export const Products = () => {
    const [da, setda] = useState([])
    
   useEffect(() => {
     const fetPro=async()=>{
    let r=await fetch("http://localhost:8000/Produts")
    let p=await r.json()
            setda(p)
     
    }
   
     fetPro()
   },[])

  
  return (
      <>
      <div style={{display:"flex",justifyContent:"space-around",marginTop:"20px"}}>

   
    <div style={{fontSize:"20px"}}>{da.map((e,i)=><div style={{display:"flex",justifyContent:"center",gap:"20px"}}><div>Product:{i+1}</div><div style={{marginBottom:"20px"}}><div>{e.name}</div><div>{e.price}</div><Link to={`/products/${e.id}`}>more details</Link></div></div>)}</div>
    
   <Outlet/>
    </div>

    </>

  )
}
