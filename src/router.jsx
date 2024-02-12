import { BrowserRouter as Router,Routes,Route } from "react-router-dom"
import Register from "./front page.jsx"
import {Login} from "./login.jsx"
import Content from "./mainpage.jsx"
import Curd from "./curd.jsx"
import Post from "./post.jsx"
import Dummy from "./dummy.jsx"
import Put from "./update.jsx"
import Add from "./cart.jsx"

function Rot(){
    return(
        <div>
           <Router>
            <Routes>
                <Route path="/" element={<Register/>}></Route>
                <Route path="/login" element={<Login/>}></Route>
                <Route path="/main" element={<Content/>}/>
                 <Route path="/curd" element={<Curd/>}/>
                 <Route path="/post" element={<Post/>}/>
                <Route path="/dummy" element={<Dummy/>}/>
                <Route path="/put/:eid" element={<Put/>}/>
                <Route path="/ca" element={<Add/>}/>
            </Routes>
            </Router> 
        </div>
    )
}
export default Rot;