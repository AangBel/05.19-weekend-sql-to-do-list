const express = require('express');

const bodyParser = require('body-parser');

const app = express();

// Setup body parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Setup static files
app.use(express.static('/server/public'));

let tasksRouter = require("./routes/tasksRouter");
app.use('/tasksRouter', tasksRouter);

const PORT = process.env.PORT || 5000;
// Start listening for requests on a specific port
app.listen(PORT, () => {
console.log("up and running on port", PORT);
});
