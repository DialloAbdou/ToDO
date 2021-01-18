import React, { Component } from 'react';
import Task from './Task'
import "../TaskPolice/Task.css"
import Imput from '../../components/combos/Imput/Imput'
import Bouton from '../../components/boutons/Bouton'
import classes from '../TaskPolice/Task.module.css'

class Tasks extends Component {
    state = {
        tasks: [
            { id: 1, nom: "Faire Reactjs", unite: 3 },
            { id: 2, nom: "Faire .Net Core", unite: 6 },
            { id: 3, nom: "Faire C#", unite: 3 },
            { id: 4, nom: "Faire JavaScript", unite: 4 },
            { id: 5, nom: "Faire Sport", unite: 2 },
        ],
        indextache:5,
       tacheSaisie:""
    }
    handleDeletTask =(id)=>{  
       const taskId = this.state.tasks.findIndex(elem=>{
           return (elem.id === id);
       })
       const newTasks = [...this.state.tasks];
         newTasks.splice(taskId,1)
       this.setState({tasks:newTasks});
    }
    handleAddTask =()=>{
        const newTache = {
            id: this.state.indextache+1,
            nom: this.state.tacheSaisie,
            unite: 3
        }
      const newTabs = [...this.state.tasks]
      newTabs.push(newTache);
      this.setState(oldstate=>{
          return {
            tasks: newTabs,
            indextache: oldstate.indextache+1
          }
      })
      this.setState({ tacheSaisie:""})
    
    }
    render() {
        const { tasks } = this.state
        const taskCss = `${classes.tacheCss} table table-striped table-dark`
        return (
            <div className="container taskPolice">
                <Imput 
                value={this.state.tacheSaisie}
                changeName={(event)=>this.setState({tacheSaisie:event.target.value})}
                />
                <Bouton
                 click ={this.handleAddTask}
                
                >
                  ADD
                </Bouton>
                <Bouton>CLEAR</Bouton>
                <Imput placeholder="tableau format JSon " />
                <Bouton>LOAD</Bouton>

                <table className ={taskCss}>
                    <thead>
                        <tr>
                            <th>Nom</th>
                            <th>Unite</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tasks.map(t => {
                            return (
                                 <tr key={t.id}>
                                   <Task
                                     nom ={t.nom}
                                     unite={t.unite}
                                     supprimer={()=>this.handleDeletTask(t.id)}
                                    />
                                 </tr>
                                // <tr key={t.id}>
                                //     <td>{t.nom}</td>
                                //     <td>{t.unite}</td>
                                // </tr>
                            )
                        })}

                    </tbody>

                </table>
            </div>
        )

    }
}
export default Tasks;