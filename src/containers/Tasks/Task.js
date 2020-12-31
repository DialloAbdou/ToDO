import React from 'react'
import Bouton from '../../components/boutons/Bouton'
const Task = ({ nom, unite, supprimer}) => {
    return (
        <>
            <td>{nom}</td>
            <td>{unite}</td>
            <td><Bouton  click = {supprimer}>Supprimer</Bouton></td>

        </>

    )
}
export default Task