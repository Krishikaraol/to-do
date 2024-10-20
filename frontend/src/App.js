import React, { useState, useEffect } from 'react';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import TaskItem from './components/TaskItem';
import { fetchTasks, createTask, updateTask, deleteTask } from './api/api';
import './App.css';

const App = () => {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        const getTasks = async () => {
            const tasksFromServer = await fetchTasks();
            setTasks(tasksFromServer);
        };
        getTasks();
    }, []);

    const addTask = async (task) => {
        const newTask = await createTask(task);
        setTasks([...tasks, newTask]);
    };

    const updateTaskStatus = async (id, updatedTask) => {
        const taskToUpdate = await updateTask(id, updatedTask);
        setTasks(tasks.map((task) => (task._id === id ? taskToUpdate : task)));
    };

    const removeTask = async (id) => {
        await deleteTask(id);
        setTasks(tasks.filter((task) => task._id !== id));
    };

    return (
        <div className="container">
            <h1>Task Manager</h1>
            <TaskForm addTask={addTask} />
            <TaskList tasks={tasks} updateTask={updateTaskStatus} deleteTask={removeTask} />
        </div>
    );
};

export default App;
