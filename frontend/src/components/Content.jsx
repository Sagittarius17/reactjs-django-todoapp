import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Content = () => {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");

  useEffect(() => {
    axios.get('http://localhost:8000/api/tasks/')
      .then(response => {
        setTasks(response.data);
      });
  }, []);

  const handleAddTask = () => {
    axios.post('http://localhost:8000/api/tasks/', { title: title, completed: false })
      .then(response => {
        setTasks([...tasks, response.data]);
        setTitle('');
      });
  };

  return (
        <div className="App bg-gray-100 min-h-screen flex flex-col items-center justify-center p-4">
        
        {/* Input group */}
        <div className="w-full max-w-md mb-4 flex items-center space-x-4">
            <input 
                value={title} 
                onChange={(e) => setTitle(e.target.value)} 
                placeholder="Add a task" 
                className="w-full p-2 border rounded-md"
            />
            <button 
                onClick={handleAddTask}
                className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
            >
                Add
            </button>
        </div>
        
        {/* Task list */}
        <ul className="w-full max-w-md space-y-2">
            {tasks.map(task => (
                <li key={task.id} className="p-2 bg-white border rounded-md flex justify-between items-center">
                    <span>{task.title}</span>
                    <span className={task.completed ? "text-green-500" : "text-red-500"}>
                        {task.completed ? "(Done)" : "(Pending)"}
                    </span>
                </li>
            ))}
        </ul>
    </div>
  );
}

export default Content;
