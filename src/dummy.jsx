import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

let a1 = {
    cursor: "pointer",
    padding: "5px",
}

function Dummy() {

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

    const nav = useNavigate()
    const pu = (eid) => {
        nav("/put/" + eid)
    }
    const a = useNavigate()
    const del = (e) => {
        fetch("https://db-quou.onrender.com/cards/"+e,{
             method: "DELETE" 
            })
            .then(() => {
                a("/main")
            })
            .catch(() => {
                alert("error")
            })
    }

    return (
        <div>
            <div style={{ display: "flex", backgroundColor: "antiquewhite", justifyContent: "space-around", padding: "10px", marginBottom: "20px" }}>
                <div>
                    <h3><b>P<span style={{ color: "tomato" }}><i class="fa-solid fa-circle-dollar-to-slot fa-bounce"></i></span>CKET <span style={{ color: "green" }}>FRIENDLY</span></b></h3>
                </div>
                <div>
                    <ul style={{ listStyle: "none", display: "flex", justifyContent: "space-around" }}>
                        <li style={a1}>Home</li>
                        <li style={a1}>About Us</li>
                        <li style={a1}>Services</li>
                        <li style={a1}>Need Help!</li>
                    </ul>
                </div>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "auto auto auto auto auto", gridGap: "10px", textAlign: "center" }}>
                {data.map((item) => (
                    <div style={{ border: "1px solid green", boxShadow: "1px 1px solid green", padding: "20px", borderRadius: "20px" }}>
                        <img src={item.url} alt="purse" style={{ width: "180px", height: "150px" }} /><br />
                        <strong>{item.title}</strong><br /><br />
                        <div style={{ display: "flex" }}>
                            <span> <h4>Rs.{item.price}</h4></span>
                            <small className="text-decoration-line-through">Rs.{item.change}</small>
                        </div>
                        <i style={{ float: "right" }}><strong>Available:{item.available}</strong></i><br /><br />
                        <a className="btn btn-primary" onClick={() => { pu(item.id) }}>UPDATE</a>
                        <a className="btn btn-danger" onClick={() => { del(item.id) }}>DELETE</a>
                    </div>
                ))}
            </div>
        </div>
    )
}
export default Dummy;