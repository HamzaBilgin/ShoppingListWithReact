import React from 'react'

const Button = (props) => {
  return (
    <button className= {`border bg-red-500 ${props.className}`}
    type={props.type || "button"}>
       {props.children}
    </button>
  )
}

export default Button
