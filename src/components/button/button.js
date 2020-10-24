import React from "react"
import "./button.css"

const Button = props => {
  return <button className="primary-button-type">{props.children}</button>
}

export default Button
