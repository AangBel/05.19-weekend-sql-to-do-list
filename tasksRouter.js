app.use('/tasksRouter', tRouter);

tRouter.post('/', (req, res) => {
    const meh = req.body;
    console.log('reached the tRouter for post', meh);
    const queryText = `CREATE TABLE "toDoList"
                        ("id", "task")
                        VALUES ($1, $2);
        `;
    const values = [
        meh.id,
        meh.task
    ];
    console.log(values);
}).then((result) => {
    res.sendStatus(200);
}).catch((error) => {
    console.log('error at trouter post');
    res.sendStatus(500);
})

tRouter.get('/', (req,res) =>{
    const queryText = `SELECT * FROM "toDoList"`
})Pool.query(queryText)
.then((result) => {
    res.send(result.rows);
}).catch((error) => {
    send.sendStatus(500)
})

module.exports = tasksRouter;