import { useNavigate } from "react-router-dom";
import "./css.css"




function Curd(){
     
    const b=useNavigate()
    const a=useNavigate()
    const pos=()=>{
        a("/post")
    }

    const up=()=>{
        b("/dummy")
    }
    return(
        <div id="curd" style={{display:"flex",justifyContent:"space-evenly",backgroundColor:"skyblue",padding:"40px",color:"white"}}>
            <h4 onClick={pos} className="text-decoration-underline">POST Card</h4>
            <h4 onClick={up} className="text-decoration-underline">Update Card</h4>
            <h4 onClick={up} className="text-decoration-underline">Delete Card</h4>
        </div>
    )
}
export default Curd;