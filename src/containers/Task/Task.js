import React, { Component } from 'react';
import "../TaskPolice/Task.css"
import Imput  from '../../components/combos/Imput/Imput'
import Bouton  from '../../components/boutons/Bouton'

class Task extends Component {

    render() {
        return (
            <div className="container taskPolice">
              <Imput placeholder="Nouvelle Tache"/>
              <Bouton>ADD</Bouton>
              <Bouton>CLEAR</Bouton>
              <Imput placeholder="tableau format JSon "/>
              <Bouton>LOAD</Bouton>


            </div>
        )

    }
}
export default Task;