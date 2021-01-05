import React from 'react'
import classes from './policeImput/Imput.module.css'
const Imput=({placeholder})=>{
    const imputCss =`${classes.policeImpute}`
    return(
        <input className={imputCss}  type="text" placeholder={placeholder}/>
    )
}
export default Imput