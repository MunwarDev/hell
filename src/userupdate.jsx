import { getAuth,onAuthStateChanged } from "firebase/auth"
import { initializeApp } from "firebase/app";
import { useEffect, useState } from "react";

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
  
  export function User(){
  
    
    const[user,setUser]=useState("")
    useEffect(()=>{
      
      let x=onAuthStateChanged(auth,u=>setUser(u))
      return x
    })
    return user
  }