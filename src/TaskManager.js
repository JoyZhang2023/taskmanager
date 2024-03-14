import React, {useState} from 'react';

function Taskmanager() {
    const [Tasks, setTasks] = useState([{id:0, title: "example", completed:false}]);
    var taskID = 0;

    const addTask = () => {
        const titleInput = document.getElementById("taskTitle").value;
        taskID +=1;
        setTasks([...Tasks,{id: taskID, title:titleInput, completed: false}]);
    }

    
    const toggleTaskCompletion = (id) => {
        Tasks.forEach(task => {
            if(task.id === id) {
                console.log(task.id);
            }else{
                
            };
        });
        
    }

    const displayTask = Tasks.map((task) => {
        const completionStatus = task.completed.toString();
        return (
            <tr key={task.id}>
                <th>{task.title}</th>
                <th>{completionStatus}</th>
                <th><button onClick={toggleTaskCompletion(task.id)}>Change Completion Status of id {task.id}</button></th>
            </tr>    
            )
    });

    return (
        <>
        <table>
        <thead>
          <tr>
            <th>Task Title</th>
            <th>Taks Completion Status</th>
            <th>Click to Change Status</th>
          </tr> 
        </thead>
        <tbody>
            {displayTask}
        </tbody>
      </table>
      <input type="text" id="taskTitle" placeholder='Enter task title here'></input>
        <button onClick={addTask}>Add Task</button>
        </>
    )

}

export default Taskmanager;