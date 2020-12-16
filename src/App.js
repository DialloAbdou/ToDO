import React, {Component} from'react'

class App extends Component{
  render() {
     return(
        <div className="container">
         <h1>Todo Liste</h1>
         <input type="text" placeholder="Task"/>
         <button>ADD</button>
         <button>CLEAR</button>
         <input type="text" placeholder="Task"/>
         
        </div>
     )
  }
}

export default App;
