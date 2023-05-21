const express = require('express');
const bodyParser = require('body-parser');
const app = express();

//const or let?
let tasksRouter = require("./routes/tasksRouter");
// Setup body parser
app.use(bodyParser.urlencoded({ extended: true }));
// Setup static files
app.use(express.static('server/public'));

// changed from /tasksRouter to /tasks
app.use('/tasks', tasksRouter);

const PORT = process.env.PORT || 8000;
// Start listening for requests on a specific port
app.listen(PORT, () => {
console.log("up and running on port", PORT);
});
