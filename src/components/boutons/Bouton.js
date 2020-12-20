import React from 'react'
import classes from'./policeBouton/Bouton.module.css'
const Bouton=({children, CssBtn})=>{
    CssBtn = `${classes.policeBouton}`
    return(
        <button className={CssBtn}>{children}</button>
    )
}
   


export default Bouton;