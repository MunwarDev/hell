import { useState,useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"


let a={
    cursor:"pointer",
    padding:"5px",
  }

function Put(){

    const[id,setId]=useState("")
    const[url,setUrl]=useState("")
    const[title,setTitle]=useState("")
    const[change,setChange]=useState("")
    const[price,setPrice]=useState("")
    const[available,setAvailable]=useState("")

    const changeid=(e)=>{
        setId(e.target.value)
    }
    const changeurl=(e)=>{
        setUrl(e.target.value)
    }
    const changetitle=(e)=>{
        setTitle(e.target.value)
    }
    const changeprice=(e)=>{
        setPrice(e.target.value)
    }
    const change1=(e)=>{
        setChange(e.target.value)
    }
    const changeavailable=(e)=>{
        setAvailable(e.target.value)
    }

    const {eid}=useParams()

    useEffect(()=>{
        fetch("https://db-quou.onrender.com/cards/"+eid,{method:"GET"})
        .then((res)=>{
        return res.json()
        })
        .then((resp)=>{
            setId(resp.id)
            setUrl(resp.url)
            setTitle(resp.title)
            setPrice(resp.price)
            setChange(resp.change)
            setAvailable(resp.available)
        })
       },[])
     const nav=useNavigate()
       const update=(e)=>{
        e.preventDefault()
           const data={id,url,title,price,change,available}
        fetch("https://db-quou.onrender.com/cards/"+eid,{method:"PUT",
    headers:{"Content-type":"application/json"},
    body:JSON.stringify(data)
    })
    .then(()=>{
       nav("/main")
    })
    .catch(()=>{
        alert("error")
    })
       }

    return(
        <div>
             <div>
            <div style={{display:"flex",backgroundColor:"antiquewhite",justifyContent:"space-around",padding:"10px"}}>
          <div>
                    <h3><b>P<span style={{ color: "tomato" }}><i class="fa-solid fa-circle-dollar-to-slot fa-bounce"></i></span>CKET <span style={{color:"green"}}>FRIENDLY</span></b></h3>
                </div>
          <div>
            <ul style={{listStyle:"none",display:"flex",justifyContent:"space-around"}}>
              <li style={a}>Home</li>
              <li style={a}>About Us</li>
              <li style={a}>Services</li>
              <li style={a}>Need Help!</li>
            </ul>
          </div>
          </div>
            </div>
            <div>
            <div className="container" style={{width:"600px",padding:"20px",backgroundColor:"antiquewhite",marginTop:"20px"}}>
            <div className="card" style={{backgroundColor:"skyblue"}}>
                <div className="card-title" style={{textAlign:"center"}}><h4>UPDATE THE EXSITED CARD</h4></div>
                <div className="card-body">
                <form onSubmit={update}>
  <div class="mb-3">
    <label  class="form-label">Id</label>
    <input type="number" class="form-control" disabled="disabled" onChange={changeid} value={id} id="exampleInputEmail1" aria-describedby="emailHelp"/>
  </div>
  <div class="mb-3">
    <label  class="form-label">Url</label>
    <input type="url" class="form-control" onChange={changeurl} value={url} id="exampleInputPassword1"/>
  </div>
  <div class="mb-3">
    <label  class="form-label">Title</label>
    <input type="text" class="form-control"onChange={changetitle} value={title} id="exampleInputPassword1"/>
  </div>
  <div class="mb-3">
    <label  class="form-label">Price</label>
    <input type="number" class="form-control" onChange={changeprice} value={price} id="exampleInputPassword1"/>
  </div>
  <div class="mb-3">
    <label  class="form-label">Change</label>
    <input type="text" class="form-control" onChange={change1} value={change} id="exampleInputPassword1"/>
  </div>
  <div class="mb-3">
    <label  class="form-label">Available</label>
    <input type="text" class="form-control" onChange={changeavailable} value={available} id="exampleInputPassword1"/>
  </div>
  <button type="submit" class="btn btn-primary">UPDATE</button>
</form>
                </div>
            </div>
          </div>
            </div>
        </div>
    )
}
export default Put;