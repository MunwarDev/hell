import {  useEffect, useState,React } from "react"
import { User } from "./userupdate.jsx"
import { useNavigate } from "react-router-dom"
import axios from "axios"
import "./index.css"
import Page from "./page.jsx"


let a = {
    paddingLeft: "10px"
}
let b = {
    cursor:"pointer"
    // padding:"5px"
}
let c = {
    width: "200px",
    height: "30px",
    borderRadius: "10px 10px 10px 10px",
    border: "none"
}

function Content() {
   

    const [data, setData] = useState([])
    useEffect(() => {
        fetch("https://db-quou.onrender.com/cards", { method: "GET" })
            .then((res) => {
                return res.json()
            })
            .then((resp) => {
                setData(resp)
            })
    }, [])

    const use = User()
    const nav = useNavigate()

    const manage = () => {
        nav("/curd")
    }

    const [search, setSearch] = useState("")
    const changesearch = (m) => {
        setSearch(m.target.value)
    }

    async function sea(e) {
        e.preventDefault()
        return await axios.get(`https://db-quou.onrender.com/cards?q=${search}`)
            .then((r) => {
                setData(r.data)
            })
    }

    const o = ["title", "price"]
    const [sort, setSort] = useState("")
    const changesort = async (e) => {
        e.preventDefault()
        let x = e.target.value
        setSort(x)
        return await axios.get(`https://db-quou.onrender.com/cards?_sort=${x}&_order=asc`)
            .then((r) => {
                setData(r.data)
            })
    }

    // pagination
    const[pag,setPag]=useState(1)
    const[record,setRecord]=useState(10)


    const last=record*pag
    const first=last-record
    let my=data.slice(first,last)
    let l = Math.ceil(data.length/record)

    const pe=(e)=>{
        setPag(e)
    }
    const pre=(e)=>{
        if(pag>1){
        setPag(pag-1)
        }
        else{
            alert("reached first page")
        }
    }

    const nex=(e)=>{
        if(pag<l){
            setPag(pag+1)
        }
        else{
            alert("last page reached")
        }
    }

    // cart
    const cart=(e)=>{
        fetch("https://db-quou.onrender.com/cards"+e)
        .then((r)=>{
            return r.json()
        })
        .then((r1)=>{
         fetch("https://db-quou.onrender.com/cart",{method:"POST",
        headers:{"Content-type":"application/json"},
        body:JSON.stringify(r1)
        })
        .then(()=>{
            window.location.reload()
        })
        })
    }
const car=useNavigate()
    const click=()=>{
          car("/ca")
    }



    const [count,setCount]=useState('')
   useEffect((e)=>{
    let c = 0
    fetch("https://db-quou.onrender.com/cart",{method:"GET"})
    .then((r)=>{
        return r.json()
    })
    .then((r1)=>{
       
        
        for(let i=0;i<r1.length;i++){
            c += 1
        }
        setCount(c)
    })
   },[])
    return (
        <div>
            <div  id="nav">
                <div id="nn">
                    <h3 id="nav1"><b>P<span style={{ color: "tomato" }}><i class="fa-solid fa-circle-dollar-to-slot fa-bounce"></i></span>CKET <span style={{ color: "green" }}>FRIENDLY</span></b></h3>
                </div>
                <div className="input-group flex-nowrap" id="a">
                    <form className="d-flex" onSubmit={sea}>
                        <span className="input-group-text" id="addon-wrapping"><i className="fa-solid fa-magnifying-glass fa-beat-fade"></i></span>
                        <input type="text" value={search} onChange={changesearch} className="form-control" placeholder="Search for product" id="a1" aria-label="Username" aria-describedby="addon-wrapping" />
                        <button className="btn btn-success" type="submit" id="a2">SEARCH</button>
                    </form>
                </div>
                <div id="qul">
                    <ul id="ul">
                        <li onClick={click} style={a}><h5 style={b}><i class="fa-solid fa-bag-shopping"></i><sup>{count}</sup></h5></li>
                        <li style={a}><h5 style={b}><i class="fa-solid fa-bell"></i></h5></li>
                        <li style={a}>
                            <span id="ul1"> <i className="fa-regular fa-user fa-flip"></i></span>
                            <select id="ul2" >
                                <option value="selected">
                                    {use?.email}
                                </option>
                            </select>

                        </li>
                    </ul>

                </div>
            </div>
            <div id="abc">
                <div style={{ width: "250px", marginRight: "40px", marginLeft: "20px" }}>
                    <div id="abc1" style={{ margin: "10px", backgroundColor: "antiquewhite", padding: "10px", borderRadius: "10px", boxShadow: "2px 3px 3px lightgrey" }}>
                        <select style={c}>
                            <option>Shop by Concern</option>
                        </select><br /><br />
                        <select style={c}>
                            <option>Shop by Category</option>
                        </select><br /><br />
                        <select style={c}>
                            <option>Shop by product</option>
                        </select><br /><br />
                        <button className="btn btn-info" style={{ width: "200px" }}>Shop All</button>
                    </div>
                    <div id="abc3">
                        <select value={sort} onChange={changesort} className="bg-body-tertiary" style={{ width: "230px", height: "30px", borderRadius: "10px 10px 10px 10px", border: "none", boxShadow: "2px 3px 3px lightgrey" }}>
                            <option>Sort</option>
                            {o.map((i) => (
                                <option>{i}</option>
                            ))}
                        </select>
                    </div>
                    <div id="abc2" className="bg-body-tertiary" style={{ padding: "30px", borderRadius: "20px", marginTop: "30px", boxShadow: "2px 3px 3px lightgrey" }}>
                        <input type="range" style={{ width: "200px", height: "5px", accentColor: "tomato", backgroundColor: "white" }} /><br />
                        <small>Price</small>
                        <br /><br /><br />
                        <input type="range" style={{ width: "200px", height: "5px", accentColor: "tomato", backgroundColor: "white" }} /><br />
                        <small>Offers %</small>
                    </div>
                </div>
                <div id="g">
                    {my.map((item) => (
                        <div style={{ border: "1px solid green", boxShadow: "1px 1px solid green", padding: "20px", borderRadius: "20px",height:"370px" }}>
                            <img src={item.url} alt="purse" style={{ width: "180px", height: "150px" }} /><br />
                            <strong>{item.title}</strong><br /><br />
                            <div style={{ display: "flex" }}>
                                <span> <h4>Rs.{item.price}</h4></span>
                                <small className="text-decoration-line-through">{item.change}</small>
                            </div>
                            <i style={{ float: "right" }}><strong>Available:{item.available}</strong></i><br /><br />
                            <button onClick={()=>{cart(item.id)}} className="btn btn-success" style={{ width: "150px" }}><i>Add Cart &nbsp;<i class="fa-solid fa-cart-shopping fa-fade"></i></i></button>
                        </div>
                    ))}
                   
                </div>
                
            </div>
            <div>
          <div id ="pages">
          <Page p={pag} r={record} d={data.length} pe={pe} pre={pre} nex={nex} />
          </div>
            </div>
            <div id="foot">
                <div style={{ paddingLeft: "20px" }}>
                    <h3><strong>Logo</strong></h3>
                    <strong>Sub line</strong>
                </div>
                <div style={{ paddingLeft: "50px" }}>
                    <h5>pages</h5>
                    <p>About us</p>
                    <p>Our Expertise</p>
                    <p>Testimonials</p>
                    <p>Men Uses</p>
                    <p>Shop</p>
                </div>
                <div>
                    <h5>Legal and help</h5>
                    <p><b>FAQs</b></p>
                    <p>Terms of use</p>
                    <p>Privacy policy</p>
                </div>
                <div>
                    <h5>Contact us</h5>
                    <p><i class="fa-solid fa-location-dot"></i>&nbsp;&nbsp;Address</p>
                    <p><i class="fa-solid fa-phone"></i>&nbsp;&nbsp;Phone numbers</p>
                    <p><i class="fa-solid fa-envelope"></i>&nbsp;&nbsp;mail id</p>
                    <p onClick={manage} className="text-decoration-underline" style={{ cursor: "pointer" }}>Manage Cards</p>
                </div>
                <div>
                    <h5>Social links</h5>
                    <p><i class="fa-brands fa-facebook"></i>&nbsp;&nbsp;&nbsp;<i class="fa-brands fa-twitter"></i>&nbsp;&nbsp;&nbsp;<i class="fa-brands fa-linkedin-in"></i>&nbsp;&nbsp;&nbsp;<i class="fa-brands fa-youtube"></i></p>
                    <img src="https://freepiker-storage.s3.amazonaws.com/preview/preview_d605be53ac335ec29de57d357cb82436.jpg" alt="google" style={{ width: "120px", height: "60px" }} />
                </div>
            </div>
        </div>
    )
}
export default Content;