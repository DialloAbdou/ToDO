import React, { Component } from 'react';
import Imput  from '../../components/combos/Imput/Imput'
import Bouton  from '../../components/boutons/Bouton'

class Task extends Component {

    render() {
        return (
            <div className="container">
              <Imput placeholder="Nouvelle Tache"/>
              <Bouton>ADD</Bouton>
              <Bouton>CLEAR</Bouton>
              <Imput placeholder="tableau format JSon "/>

            </div>
        )

    }
}
export default Task;