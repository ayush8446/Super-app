import React from 'react'
import "./Banner.css"
import bg from "./bg.png"

function Banner() {

  return (
    <div>
      <div className="ban">
        <img src={bg} alt="bb" />
        <div className="alreadylogin">
          <h3>Already have an account?</h3>
          <button>LOGIN</button>
          
        </div>
        <h1>Discover new things on Superapp</h1>
      </div>
    </div>
  )
}

export default Banner