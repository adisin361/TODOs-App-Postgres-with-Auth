const express = require('express');
const taskRouter = require('./routes/todoRoutes');

const PORT = 5050;

const app = express();
app.use(express.json());
app.use('/tasks', taskRouter);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

