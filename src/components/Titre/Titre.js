import React from 'react'
import classes from './policeTitre/Titre.module.css'
const Titre = ({children}) => {
    const titreCss = `${classes.policetitre} border  p-2 m-2 text-center rounded bg-primary text-white`
    return(
        <h1 className={titreCss}>{children}</h1>
    )
}
export default Titre;
