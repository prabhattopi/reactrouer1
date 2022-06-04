import React, { useState,useEffect } from 'react'
import { useParams } from 'react-router-dom'

export const Product = () => {
    const [product,setProduct]=useState({})

    const {id}=useParams()


    const [da, setda] = useState([])
    
    useEffect(() => {
      const fetPro=async()=>{
     let r=await fetch("http://localhost:8000/Produts")
     let p=await r.json()
             setda(p)
      
     }
    
      fetPro()
    },[])
    useEffect(() => {
  
          fetch(`http://localhost:8000/Produts/${id}`).then(r=>r.json()).then((d)=>{
              setProduct(d)
          })
  
      
     
     
    
    
     
    }, [id])
    
  return (
    id<da.length?
    <div style={{fontSize:"20px"}}>
      <div style={{display:"flex",flexDirection:"column",gap:"10px"}}>
      <div style={{dispaly:"flex",gap:'20px'}}>
         <img style={{width:"300px",height:"250px",borderRadius:"20px"}} src={product.imgUrl} alt="" />
         <p>Name:  {product.name}</p>
      </div>
      <div>
        <div>Price:  {product.price}</div>

      </div>
      </div>

</div>:<div style={{marginTop:"20px",fontSize:"30px",color:"red"}}>Product DoesNot Exit</div>
   
  )
}
