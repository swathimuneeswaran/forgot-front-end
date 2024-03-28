import React from 'react'
import { Link } from 'react-router-dom'
import "../App.css";

const First = () => {
  return (
    <>
    <div className="container">
        <img src="https://img.freepik.com/free-vector/3d-triangle-blue-background-with-poly-effect_52683-31621.jpg" height="800px" className='first'></img>
        <div className="con">
        <button className='but1 but2'><Link className='link1' to="/signup">Register</Link></button><br></br>
        <br></br>
        <button className="but1"><Link className='link1' to="/login">Login</Link></button>
    </div>
    </div>
    </>
  )
}

export default First