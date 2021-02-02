import React from 'react'
import classes from './policeImput/Imput.module.css'
const Imput=({placeholder, changeName, onkey})=>{
    const imputCss =`${classes.policeImpute}`
    return(
        <input 
        className={imputCss} 
         type="text" 
         placeholder={placeholder}
         onChange={changeName}
         onKeyDown={onkey}
        
        />
    )
}
export default Imput