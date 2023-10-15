import '../assets/css/Content.css';
import React, { useState, useEffect } from "react";
import axios from "axios";
import io from 'socket.io-client';

const Content = () => {
    const [tasks, setTasks] = useState([]);
    const [title, setTitle] = useState("");
    const [editingTitle, setEditingTitle] = useState({}); // Local state for editing

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
            // If the title is empty, revert to the original title (or handle this as you see fit)
            setEditingTitle(prevEditing => {
                const updatedEditing = { ...prevEditing };
                delete updatedEditing[id];  // Removing the key so that it doesn't override the original task title
                return updatedEditing;
            });
        }
    };
    
    const baseURL = window.location.hostname === 'localhost' 
        ? 'http://localhost:8000' 
        : `http://${window.location.hostname}:8000`;

    useEffect(() => {
        axios.get(`${baseURL}/api/tasks/`).then((response) => {
            setTasks(response.data);
        });
    }, []);

    const fetchTasks = () => {
        axios.get(`${baseURL}/api/tasks/`).then(response => {
            setTasks(response.data);
        });
    };

    useEffect(() => {
        const baseURL = window.location.hostname === 'localhost' 
            ? 'ws://localhost:8000' 
            : `ws://${window.location.hostname}:8000`;

        const ws = new WebSocket(`${baseURL}/ws/tasks/`);

        ws.onmessage = (event) => {
            const data = JSON.parse(event.data);
            if (data.type === "new_task") {
                setTasks(prevTasks => [...prevTasks, data.task]);
            }

            const eventType = data.event_type;

            switch (eventType) {
                case 'task_created':
                case 'task_updated':
                case 'task_deleted':
                    fetchTasks();
                    break;
                default:
                    console.log("Unsupported event type:", eventType);
            }
        };

        ws.onerror = (error) => {
            console.error("WebSocket Error:", error);
        };

        ws.onclose = (event) => {
            if (event.wasClean) {
                console.log(`Connection closed cleanly, code=${event.code}, reason=${event.reason}`);
            } else {
                console.error('Connection died');
            }
        };

        return () => {
            ws.close();
        };
    }, []);


    const handleAddTask = () => {
        axios
            .post(`${baseURL}/api/tasks/`, {
                title: title,
                completed: false,
            })
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


    // When making changes to tasks (like adding, editing, or deleting), emit a WebSocket event from the client. 
    // Then, in your Django consumer, when that event is received, broadcast it to all connected clients.
    const socket = io(`ws://${baseURL}`);
    socket.on('connect', () => {
        console.log('Connected to the WebSocket server');
    });

    // Listen for real-time updates
    socket.on('task_updated', (data) => {
        // Update your tasks state based on the data received
    });

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
                {tasks.map((task) => (
                    <li key={task.id} className="p-2 bg-gray-500 border rounded-md flex justify-between items-center">
                        <input
                            type="text"
                            value={editingTitle[task.id] !== undefined ? editingTitle[task.id] : task.title}
                            onChange={(e) => handleInputChange(task.id, e.target.value)}
                            onBlur={() => handleInputBlur(task.id)}
                        />
                        <span onClick={() => toggleTaskStatus(task.id)} className={ task.completed ? "text-green" : "text-red" }>
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

