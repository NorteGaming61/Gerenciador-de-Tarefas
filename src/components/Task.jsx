import React from 'react'

const task = ({task, removeTask, completeTask, incompleteTask }) => {
  return (
    <div className='task' style={{backgroundColor: task.isCompleted ? "#a8c99e" : (task.notCompleted ? "#f25872" : "")}}>
        <div className='content'>
            <p>{task.text}</p>
            <p>{task.description}</p>
            <p className='category'>({task.category})</p>
        </div> 
        <div>
            <ul>
                <li><button onClick={() => completeTask(task.id)}>Concluído</button></li>
                <li><button onClick={() => incompleteTask(task.id)}>Não concluído</button></li>
                <li><button onClick={() => removeTask(task.id)}>Excluir</button></li>
            </ul>
        </div>
    </div>
  )
}

export default task