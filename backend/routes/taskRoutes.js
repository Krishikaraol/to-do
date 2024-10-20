const express = require('express');
const Task = require('../models/Task');
const router = express.Router();

// Create a new task
router.post('/', async (req, res) => {
    const { title, description } = req.body;
    try {
        const task = new Task({ title, description });
        await task.save();
        res.status(201).json(task);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

// Get all tasks
router.get('/', async (req, res) => {
    try {
        const tasks = await Task.find();
        res.json(tasks);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

// Update a task
router.put('/:id', async (req, res) => {
    const { title, description, completed } = req.body;
    try {
        const task = await Task.findByIdAndUpdate(
            req.params.id,
            { title, description, completed },
            { new: true }
        );
        res.json(task);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

// Delete a task
router.delete('/:id', async (req, res) => {
    try {
        await Task.findByIdAndDelete(req.params.id);
        res.json({ message: 'Task deleted' });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

module.exports = router;
