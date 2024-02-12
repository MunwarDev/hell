// import { isDisabled } from "@testing-library/user-event/dist/utils"
import { useContext, useState } from "react"
import {act} from "react-dom/test-utils"


function Page({pe,r,d,pre,nex}){
    
 const op=[]
 let a=Math.ceil(d/r)

 
for(let i=1;i<=a;i++){
    op.push(i)
   
}


const[active,setActive]=useState(1)

const pa=(e)=>{
    setActive(e)
}

const act=(e)=>{
    setActive(active-1)
}
const [m,setM]=useState()
const n=(e)=>{
    setActive(active+1)
  
   
//    while(active<a){
//     setActive(active+1)
//     break
//    } 
}



    return(
        <div>
            <nav aria-label="Page navigation example">
  <ul className="pagination">
    <li className="page-item"><a className="page-link" onClick={()=>{pre(op);act(op)}}>Previous</a></li>
   {op.map((i)=>(
     <li className={`page-item ${active == i? "active":""}`}><a className="page-link" onClick={()=>{pa(i);pe(i)}}>{i}</a></li>
   ))}
    <li className="page-item"><a className="page-link" id="next" onClick={()=>{n(op);nex(op)}}>Next</a></li>
  </ul>
</nav>
        </div>
    )
}
export default Page;