// This is where we will create our routes for our server to use.

const express = require('express');
//is it router or tasksRouter?
const tasksRouter = express.Router();

const pool = require("../modules/pool");

// TODO - Add routes here...
tasksRouter.post('/', (req, res) => {
    let meh = req.body;
    console.log("reached the tasksRouter for post", meh);
let queryText = `INSERT INTO "toDoList" ("task", "complete") VALUES ($1, $2);`;
const queryValues = [meh.task, meh.complete];
pool.query(queryText, queryValues)
    .then(result => {
    res.sendStatus(200);
    })
    .catch(error => {
    console.log('error at tRouter post', error);
    res.sendStatus(500);
    });
});

//GET route
tasksRouter.get('/', (req, res) => {
  let queryText = `SELECT * FROM "toDoList" ORDER BY "id";`;
pool.query(queryText)
.then(result => {
    console.log('response', result.rows);    
    res.send(result.rows);
})
.catch(error => {
    console.log("error at tRouter GET", error);
    send.sendStatus(500);
})
})

//PUT route

//is using the id here the best choice?
tasksRouter.put("/:id", (req, res) => {
let id = req.params.id;


console.log("put route is working", id)

let queryText = `UPDATE "toDoList" SET "task" = $1 WHERE "complete" = $2;`;
pool
    .query(queryText, [req.body.task, req.params.complete])
    .then(result => {
    res.sendStatus(200);
    })
    .catch(error => {
    console.log("error at tRouter put", error);
    res.sendStatus(500);
    });
});

//DELETE route
tasksRouter.delete("/:id", (req, res) => {
let queryText = `DELETE FROM "toDoList" WHERE "id" = $1;`;
let taskId = req.params.id;

pool
    .query(queryText, [taskId])
    .then((result) => {
        console.log("delete task is working on client js", result.rows);
    res.sendStatus(200);
    })
    .catch((error) => {
    console.log("error at tRouter delete", error);
    res.sendStatus(500);
    });
});

// tasksRouter.complete("/:id", (req, res) => {
// // let queryText = `UPDATE "toDoList" SET "complete" = $1 WHERE "id" = $2;`;
// pool.query(queryText, [req.body.complete, req.params.id])
//     .then(result => {
//     res.sendStatus(200);
//     })
//     .catch(error => {
//     console.log("error at tRouter complete", error);
//     res.sendStatus(500);
//     });
// });


module.exports = tasksRouter;
