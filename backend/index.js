const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();

mongoose.connect(process.env.MONGODB_URI).then(() => {
    console.log('MongoDB connected');
}).catch((err) => {
    console.error(err.message);
});

app.use(cors());
app.use(express.json());

app.use('/api/tasks', require('./routes/taskRoutes'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
