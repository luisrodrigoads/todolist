import { useState } from 'react';
import '../styles/App.css';
import {v4 as uuidv4 } from 'uuid';
import ItemList from './ItemList';

function List() {

    const [tasksList, setTasksList] = useState([]);
    const [taskName, setTaskName] = useState("");

    const handleSubmit = () => {

        if(taskName.length > 0){

            const newTask = [...tasksList, {
                id: uuidv4(),
                name: taskName
            }]
           
            setTasksList(newTask);
            setTaskName('');

        }else{
            alert("Preencha o campo!");
        }
  
    }

    const handleEdit = (itemId, newName) => {
            const newTask = tasksList.map((task) => {
                if(task.id === itemId)
                    return { ...task, name: newName}

                return task;
            });

            setTasksList(newTask);
    }

    const handleDelete = (itemId) => {

        const newTasks = tasksList.filter(task => task.id !== itemId) 
        setTasksList(newTasks);
    }

    return(
        <>
            <div className="formComponent">
                
                    <label className="labelText" >
                        Tarefa
                        <input
                            className="inputItem" 
                            name="nome"
                            type="text"
                            value={taskName}
                            onChange={(e) => setTaskName(e.target.value)}
                        />
                    </label>
                    <button className="button" onClick={handleSubmit}>
                        Adicionar 
                    </button>
                
            </div>

            {
            tasksList.length < 1 ? <div className="itemList"><p className="textApp">Lista vazia</p></div> 
                :
                tasksList.map((item,index) => {
                    return(
                        <ItemList key={index} name={item.name} id={item.id} handleDelete={handleDelete} handleEdit={handleEdit}/>
                    )
                })
            }
        </>
    );
}

export default List;