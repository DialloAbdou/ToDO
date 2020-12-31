import React from 'react'
import classes from'./policeBouton/Bouton.module.css'
const Bouton=({children, CssBtn, click})=>{
    CssBtn = `${classes.policeBouton}`
    return(
        <button className={CssBtn} onClick ={click}>{children}</button>
    )
}
   


export default Bouton;