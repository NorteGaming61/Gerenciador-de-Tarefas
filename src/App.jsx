import { useState, useEffect } from 'react';
import Task from './components/Task';
import TaskForm from './components/TaskForm';
import Search from './components/Search';

import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await fetch('./TasksData/db.json');
        const data = await response.json();
        setTasks(data.tasks);
      } catch (error) {
        console.error('Erro ao buscar as tarefas:', error);
      }
    };

    fetchTasks();
  }, []);

  const addTask = (text, description, category) => {
    const newTask = {
      id: Math.floor(Math.random() * 10000),
      text,
      description,
      category,
      isCompleted: false,
      notCompleted: false,
    };

    setTasks([...tasks, newTask]);
  };

  const removeTask = (id) => {
    const updatedTasks = tasks.filter((task) => task.id !== id);
    setTasks(updatedTasks);
  };

  const completeTask = (id) => {
    const updatedTasks = tasks.map((task) =>
      task.id === id ? { ...task, isCompleted: !task.isCompleted } : task
    );
    setTasks(updatedTasks);
  };

  const incompleteTask = (id) => {
    const updatedTasks = tasks.map((task) =>
      task.id === id ? { ...task, notCompleted: !task.notCompleted } : task
    );
    setTasks(updatedTasks);
  };

  return (
    <div className='app'>
      <h1>Gerenciador de Tarefas</h1>
      <TaskForm addTask={addTask} />
      <Search search={search} setSearch={setSearch} />
      <div className='task-list'>
        {tasks
          .filter((task) =>
            task.text.toLowerCase().includes(search.toLowerCase())
          )
          .map((task) => (
            <Task
              key={task.id}
              task={task}
              removeTask={removeTask}
              completeTask={completeTask}
              incompleteTask={incompleteTask}
            />
          ))}
      </div>
    </div>
  );
}

export default App;
