import React from 'react';

const TaskItem = ({ task, updateTask, deleteTask }) => {
    const toggleComplete = () => {
        updateTask(task._id, { ...task, completed: !task.completed });
    };

    return (
        <div>
            <h3 style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
                {task.title}
            </h3>
            <p>{task.description}</p>
            <button onClick={toggleComplete} style={{ marginRight: '10px' }}>
                {task.completed ? 'Incomplete' : 'Complete'}
            </button>
            <button onClick={() => deleteTask(task._id)}>Delete</button>
            <hr />
        </div>
    );
};

export default TaskItem;
