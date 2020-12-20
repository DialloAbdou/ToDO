import React from 'react'
import Bouton from '../../components/boutons/Bouton'
const Task = ({ nom, unite, supprimer, clik }) => {
    return (
        <>
            <td>{nom}</td>
            <td>{unite}</td>
            <td><Bouton>Supprimer</Bouton></td>

        </>

    )
}
export default Task