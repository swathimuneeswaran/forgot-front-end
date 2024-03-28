import React from 'react'
import "../App.css"
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className="container">
    <img src="https://4kwallpapers.com/images/walls/thumbs_3t/15587.jpg" height="800px"></img>
    <div className="con">
      <h2 style={{color:"white",fontFamily:"cursive"}}>Thanks for Visiting😊</h2>
    <button className='but1'><Link className='link1' to="/">Logout</Link></button><br></br>
    <br></br>
   
</div>
</div>
  )
}

export default Home