const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = 5000;
const tasksRouter = require('./routes/tasksRouter.js');
app.use('/tasksRouter', tasksRouter);

//what does it mean by that app is not defined?
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


app.use(express.static('server/server.js'));


app.use('/tasksRouter', tasksRouter);


// Start express

app.listen(PORT, () => {
    console.log('up and running on port', PORT);
});

