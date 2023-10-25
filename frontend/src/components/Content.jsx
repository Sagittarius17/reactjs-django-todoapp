import React, { useState, useEffect } from "react";
import axios from "axios";
import '../assets/css/Content.css';

const Content = () => {
    // State for tasks, titles, and editing tasks
    const [tasks, setTasks] = useState([]);
    const [title, setTitle] = useState("");
    const [editingTitle, setEditingTitle] = useState({});

    // Base URL for API requests
    const baseURL = window.location.hostname === 'localhost' ? 'http://localhost:8000' : `http://${window.location.hostname}:8000`;

    useEffect(() => {
        const fetchTasks = () => {
            axios.get(`${baseURL}/api/tasks/`).then((response) => {
                setTasks(response.data);
            });
        };

        fetchTasks();

        // Setting up polling: Fetch tasks every 5 seconds
        const interval = setInterval(fetchTasks, 5000);

        // Clear interval on component unmount
        return () => clearInterval(interval);
    }, [baseURL]);

    // CRUD operations for tasks
    const handleAddTask = () => {
        axios.post(`${baseURL}/api/tasks/`, { title: title, completed: false })
            .then((response) => {
                setTasks([...tasks, response.data]);
                setTitle("");
            });
    };

    const handleDeleteTask = (id) => {
        axios.delete(`${baseURL}/api/tasks/${id}/`).then(() => {
            setTasks(tasks.filter(task => task.id !== id));
        });
    };

    const handleEditTask = (id, newTitle) => {
        const updatedTask = tasks.find(task => task.id === id);
        updatedTask.title = newTitle;
    
        axios.put(`${baseURL}/api/tasks/${id}/`, updatedTask).then(response => {
            const updatedTasks = tasks.map(task => task.id === id ? response.data : task);
            setTasks(updatedTasks);
        });
    };

    const toggleTaskStatus = (id) => {
        const taskToUpdate = tasks.find(task => task.id === id);
        taskToUpdate.completed = !taskToUpdate.completed;

        axios.put(`${baseURL}/api/tasks/${id}/`, taskToUpdate).then(response => {
            const updatedTasks = tasks.map(task => task.id === id ? response.data : task);
            setTasks(updatedTasks);
        });
    };

    // Handling the editing state
    const handleInputChange = (id, newTitle) => {
        setEditingTitle({
            ...editingTitle,
            [id]: newTitle
        });
    };

    const handleInputBlur = (id) => {
        if (editingTitle[id]) {
            handleEditTask(id, editingTitle[id]);
        } else {
            setEditingTitle(prevEditing => {
                const updatedEditing = { ...prevEditing };
                delete updatedEditing[id];
                return updatedEditing;
            });
        }
    };
    
    let draggedItem = null;

    const handleDragStart = (e, position) => {
        draggedItem = position;
        setTimeout(() => {
            e.target.style.display = 'none';
        }, 0);
    }

    const handleDragEnd = (e) => {
        e.target.style.display = '';
    }

    const handleDragOver = (e) => {
        e.preventDefault();
    }

    const handleDrop = (e, position) => {
        e.preventDefault();

        // Move the item
        const newList = [...tasks];
        const [removedItem] = newList.splice(draggedItem, 1);
        newList.splice(position, 0, removedItem);

        setTasks(newList);

        // Update backend with new order
        newList.forEach((task, index) => {
            axios.put(`${baseURL}/api/tasks/${task.id}/`, {
                ...task,
                order: index
            });
        });
    }

    return (
        <div className="content">
            <div className="input-group">
                <input 
                    type="text" 
                    placeholder="Add a task" 
                    id="task-input" 
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <button id="add-task-button" onClick={handleAddTask}>Add</button>
            </div>

            <ul className="task-list">
                {tasks.map((task, idx) => (
                    <li key={task.id} draggable="true"
                    className="p-2 bg-gray-500 border rounded-md flex justify-between items-center"
                    onDragStart={(e) => handleDragStart(e, idx)} onDragEnd={handleDragEnd} onDragOver={handleDragOver}
                    onDrop={(e) => handleDrop(e, idx)}
                    >
                        <input
                            type="text"
                            value={editingTitle[task.id] !== undefined ? editingTitle[task.id] : task.title}
                            onChange={(e) => handleInputChange(task.id, e.target.value)}
                            onBlur={() => handleInputBlur(task.id)}
                        />
                        <span onClick={() => toggleTaskStatus(task.id)} className={task.completed ? "text-green" : "text-red"}>
                            {task.completed ? "(Done)" : "(Pending)"}
                        </span>
                        <button onClick={() => handleDeleteTask(task.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Content;
