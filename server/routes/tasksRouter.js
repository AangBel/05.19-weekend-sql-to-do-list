

const express = require('express');
const tasksRouter = express.Router();

const pool = require('../modules/pool');


tasksRouter.post('/', (req, res) => {
    console.log('reached the tRouter for post');
    console.log(req.body);

    const meh = req.body;
    let queryText = `CREATE TABLE "toDoList"
                        ("id", "task")
                        VALUES ($1, $2);
        `;
        pool.query(queryText, [meh.id, meh.task]
            
            ).then((result) => {    
                res.sendStatus(200);
            }).catch((error) => {
                console.log('error at tRouter post');
                res.sendStatus(500);
            })
        });

    // const values = [
    //     meh.id,
    //     meh.task
    // ];

//     // console.log(values);
// }).then(result => {
//     res.sendStatus(200);
// }).catch(error => {
//     console.log('error at tRouter post', error);
//     res.sendStatus(500);
// });


tasksRouter.get('/', (req,res) =>{
    let queryText = `SELECT * FROM "toDoList"`
pool.query(queryText)
.then((result) => {
    res.send(result.rows);
})
.catch((error) => {
    console.log("error at tRouter", error)
    send.sendStatus(500)
})
});

module.exports = tasksRouter;