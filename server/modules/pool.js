
// const pg = require('pg');

const pg = require(‘pg’);
let pool;
if (process.env.DATABASE_URL) {
    pool = new pg.Pool({
        connectionString: process.env.DATABASE_URL,
        ssl: {
            rejectUnauthorized: false
        }
    });
}
else {
    pool = new pg.Pool({ //the port has to correspond to what we’re using in Postico/postgreSQL
        host: ‘localhost’,
        port: 5432,
        database: ‘weekend-to-do-app’,
    });
}


module.exports = pool;

// const pool = new pg.Pool({
//   // name of our database
//   // this will change for every app!
//   database: 'weekend-to-do-app',
//   // where our db is
//   // localhost === on your computer
//   host: 'localhost',
//   // Postgres listens for network connections on port 5432 by default
//   port: 5432
// })



// module.exports = pool;