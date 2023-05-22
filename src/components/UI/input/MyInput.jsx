import React from 'react'
import classes from "./MyInput.module.scss"
const MyInput = (props) => {
  return (
    <input className={classes.MyInput} {...props}/>
    )
}

export default MyInput