// This is where we will create our routes for our server to use.

const express = require("express");
const tasksRouter = express.Router();

const pool = require("../modules/pool");

// TODO - Add routes here...
tasksRouter.post("/", (req, res) => {
console.log("reached the tasksRouter for post");


let meh = req.body;

let queryText = `INSERT INTO "toDoList"
                        ("id", "task")
                        VALUES ($1, $2);`;
pool.query(queryText, [meh.id, meh.task])
    .then((result) => {
    res.sendStatus(200);
    })
    .catch((error) => {
    console.log('error at tRouter post');
    res.sendStatus(500);
    });
});

//GET route
tasksRouter.get('/', (req, res) => {
  let queryText = `SELECT * FROM "toDoList" ORDER BY "id";`;
pool.query(queryText).then((result) => {
    res.send(result.rows);
})
.catch((error) => {
    console.log("error at tRouter GET", error);
    send.sendStatus(500);
});
});

//PUT route
tasksRouter.put("/:id", (req, res) => {
let queryText = `UPDATE "toDoList" SET "task" = $1 WHERE "id" = $2;`;
pool
    .query(queryText, [req.body.task, req.params.id])
    .then((result) => {
    res.sendStatus(200);
    })
    .catch((error) => {
    console.log("error at tRouter put", error);
    res.sendStatus(500);
    });
});

//DELETE route
tasksRouter.delete("/:id", (req, res) => {
let queryText = `DELETE FROM "toDoList" WHERE "id" = $1;`;
pool
    .query(queryText, [req.params.id])
    .then((result) => {
    res.sendStatus(200);
    })
    .catch((error) => {
    console.log("error at tRouter delete", error);
    res.sendStatus(500);
    });
});

module.exports = tasksRouter;
