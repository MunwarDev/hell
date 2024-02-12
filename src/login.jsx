import { getAuth,signInWithEmailAndPassword } from "firebase/auth"
import { initializeApp } from "firebase/app";
import {  useState } from "react";
import { useNavigate } from "react-router-dom";

let a={
  cursor:"pointer",
  padding:"5px",
}
export function Login(){

    const[name,setName]=useState("")
    const[email,setEmail]=useState("")
    const[pass,setPass]=useState("")

    const changename=(e)=>{
        setName(e.target.value)
    }
    const changemail=(e)=>{
        setEmail(e.target.value)
    }
    const changepass=(e)=>{
        setPass(e.target.value)
    }

    const firebaseConfig = {
        apiKey: "AIzaSyCe5OFhYoMlMAW3BAbSJRYujrAzs0pOMBU",
        authDomain: "ecommerce-203c5.firebaseapp.com",
        projectId: "ecommerce-203c5",
        storageBucket: "ecommerce-203c5.appspot.com",
        messagingSenderId: "117869958349",
        appId: "1:117869958349:web:85680b3b96b9928dbf8584",
        measurementId: "G-55RWJRYML2"
      };
      
      // Initialize Firebase
      const app = initializeApp(firebaseConfig);
      const auth=getAuth()
        const nav=useNavigate()
      const log=(e)=>{
        e.preventDefault()
        let obj={
            email:email,
            password:pass
        }
        signInWithEmailAndPassword(auth,obj.email,obj.password)
        .then(()=>{
            nav("/main")
        })
        .catch(()=>{
            alert("error")
        })
      }

      const re=()=>{
        nav("/")
      }

    return(
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
          <div>
          <div className="container mt-2"style={{width:"500px",border:"1px solid green",borderRadius:"20px",padding:"20px",backgroundColor:"azure"}}>
            <div className="card"></div>
            <div className="card-title" style={{textAlign:"center",margin:"20px",color:"green"}}><h4><strong>Login Form</strong></h4></div>
            <div className="card-body">
            <form onSubmit={log}>
  <div class="mb-3">
  <label class="form-label">User Name</label>
    <input type="text" class="form-control" onChange={changename} value={name} placeholder="Enter User Name" id="exampleInputEmail1" aria-describedby="emailHelp"/>
  </div>
  <div class="mb-3">
    <label class="form-label">Email address</label>
    <input type="email" class="form-control" onChange={changemail} value={email} placeholder="Enter Email Address" id="exampleInputEmail1" aria-describedby="emailHelp"/>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Enter Password</label>
    <input type="password" class="form-control"onChange={changepass} value={pass} placeholder="Enter Password" id="exampleInputPassword1"/>
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
  <button style={{float:"right"}} className="btn btn-info" onClick={re}s>Back</button>
</form>
            </div>
        </div>
          </div>
  
        </div>
    )
}


