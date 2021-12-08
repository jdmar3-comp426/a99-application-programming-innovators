// This ensures that things do not fail silently but will throw errors instead.
"use strict";
// Require better-sqlite.
const Database = require('better-sqlite3');
// Connect to databases or create them if one doesn't exist yet.
const db1 = new Database('userinfo.db');

// Is the database initialized or do we need to initialize it?
const stmt = db1.prepare(`SELECT name FROM sqlite_master WHERE type='table' and name='userinfo';`);
let URow = stmt.get();

if (URow === undefined) {
// Echo information about what you are doing to the console.
    console.log('Your user database appears to be empty. Initializing...');
// Set a const that will contain your SQL commands to initialize the database.
    const sqlUInit = `
        CREATE TABLE userinfo ( id INTEGER PRIMARY KEY, user TEXT, pass TEXT, email TEXT, lastlogin TEXT);
        INSERT INTO userinfo (user, pass, email, lastlogin) VALUES ('admin','bdc87b9c894da5168059e00ebffb9077', 'email@email.com', 9/9/1999), ('test','9241818c20435c6672dac2c4b6e6c071', 'legoland@legoland.com', 6/66/666)
        `;
// Execute SQL commands that we just wrote above.
    db1.exec(sqlUInit);
// Echo information about what we just did to the console.
    console.log('Your user database has been initialized with a new table and two entries.');
} else {
// Since the database already exists, echo that to the console.
    console.log('User Database exists.')
}
module.exports = db1;