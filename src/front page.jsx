import { initializeApp } from "firebase/app";
import {createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword} from "firebase/auth"
import { useState } from "react";
import { useNavigate } from "react-router-dom";

let a={
    cursor:"pointer",
    padding:"5px",
  }

function Register(){

    const[name,setName]=useState("")
    const[email,setEmail]=useState("")
    const[pass,setPass]=useState("")
    const[pass1,setPass1]=useState("")

    const changename=(e)=>{
        setName(e.target.value)
    }
    const changemail=(e)=>{
        setEmail(e.target.value)
    }
    const changepass=(e)=>{
        setPass(e.target.value)
    }
    const changepass1=(e)=>{
        setPass1(e.target.value)
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
const register=(e)=>{
    e.preventDefault()
    let obj={
        email:email,
        password:pass
    }
    createUserWithEmailAndPassword(auth,obj.email,obj.password)
    .then(()=>{
        nav("/login")
    })
    .catch(()=>{
        alert("error")
    })
}

const dir=()=>{
    nav("/login")
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
          <div></div>
        </div>
        <div className="container mt-2"style={{width:"500px",border:"1px solid green",borderRadius:"20px",padding:"30px",backgroundColor:"azure"}}>
            <div className="card"></div>
            <div className="card-title" style={{textAlign:"center",margin:"20px",color:"green"}}><h4><strong>Registration</strong></h4></div>
            <div className="card-body">
            <form onSubmit={register}>
  <div class="mb-3">
  <label class="form-label">User Name</label>
    <input type="text" class="form-control" onChange={changename} value={name} placeholder="Enter User Name" id="exampleInputEmail1" aria-describedby="emailHelp"/>
  </div>
  <div class="mb-3">
    <label class="form-label">Email address</label>
    <input type="email" class="form-control" onChange={changemail} value={email} placeholder="Enter Email Address" id="exampleInputEmail1" aria-describedby="emailHelp"/>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Create Password</label>
    <input type="password" class="form-control"onChange={changepass} value={pass} placeholder="Create New Password" id="exampleInputPassword1"/>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Confirm Password</label>
    <input type="password" class="form-control" onChange={changepass1} value={pass1} placeholder="Re-Enter Your Password" id="exampleInputPassword1"/>
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
  <button className="btn btn-success" onClick={dir} style={{float:"right"}}>Login</button><br />
  <div id="emailHelp" class="form-text" style={{float:"right"}}>Already have account Login.</div>
</form>
            </div>
        </div>
        </div>
    )
}
export default Register;

