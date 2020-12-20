import React, { Component } from 'react'
import Tasks from './containers/Tasks/Tasks'
import Titre from './components/Titre/Titre'
import Imput from './components/combos/Imput/Imput'
import Bouton from './components/boutons/Bouton'
class App extends Component {
   render() {
      return (
         <div className="container">
            <Titre>TODO LISTE</Titre>
              <Tasks />
         </div>
      )
   }
}
export default App;
