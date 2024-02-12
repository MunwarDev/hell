import { useEffect, useState } from "react"
import "./css.css"
import { useNavigate } from "react-router-dom"

function Add(){
    const[cart,setCart]=useState([])
    const [count,setCount]=useState('')
   useEffect(()=>{
    let c = 0
    fetch("http://localhost:3001/cart",{method:"GET"})
    .then((r)=>{
        return r.json()
    })
    .then((r1)=>{
        setCart(r1)

    })
   },[])

   const del=(e)=>{
    fetch("http://localhost:3001/cart/"+e,{method:"DELETE"})
    .then(()=>{
       window.location.reload()
    })
    .catch(()=>{
        alert("error")
    })
   }
   const n=useNavigate()
   const nav=()=>{
    n("/main")
   }
    return(
       <div>
         <div id="g">
      {cart.map((i)=>(
       <div style={{ border: "1px solid green", boxShadow: "1px 1px solid green", padding: "20px", borderRadius: "20px",height:"370px" }}>
       <img src={i.url} alt="purse" style={{ width: "180px", height: "150px" }} /><br />
       <strong>{i.title}</strong><br /><br />
       <div style={{ display: "flex" }}>
           <span> <h4>Rs.{i.price}</h4></span>
           <small className="text-decoration-line-through">{i.change}</small>
       </div>
       <i style={{ float: "right" }}><strong>Available:{i.available}</strong></i><br /><br />
       <button onClick={()=>{del(i.id)}} className="btn btn-danger" style={{ width: "150px" }}><i>Delete &nbsp;&nbsp;&nbsp;&nbsp;<i class="fa-solid fa-trash"></i></i></button>
   </div>
      ))}
        </div><br />
        <div>
            <button onClick={nav} className="btn btn-info"style={{float:"right",marginRight:"20px"}}>Back</button>
        </div>
       </div>
    )
}
export default Add;
