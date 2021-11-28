// This ensures that things do not fail silently but will throw errors instead.
"use strict";
// Require better-sqlite.
const Database = require('better-sqlite3');
// Connect to databases or create them if one doesn't exist yet.
const db1 = new Database('user.db');
const db2 = new Database('transaction.db')

// Is the database initialized or do we need to initialize it?
const UStmt = db1.prepare(`SELECT name FROM sqlite_master WHERE type='table' and name='users';`);
const TStmt = db2.prepare(`SELECT name FROM sqlite_master WHERE type='table' and name='transactions';`);
let URow = UStmt.get();
let TRow = TStmt.get();

if (URow === undefined) {
// Echo information about what you are doing to the console.
    console.log('Your user database appears to be empty. Initializing...');
// Set a const that will contain your SQL commands to initialize the database.
    const sqlUInit = `
        CREATE TABLE userinfo ( id INTEGER PRIMARY KEY, user TEXT, pass TEXT, email TEXT, lastlogin TEXT);`;
// Execute SQL commands that we just wrote above.
    db1.exec(sqlUInit);
// Echo information about what we just did to the console.
    console.log('Your user database has been initialized with a new table.');
} else {
// Since the database already exists, echo that to the console.
    console.log('User Database exists.')
}
if (TRow === undefined) {
    // Echo information about what you are doing to the console.
        console.log('Your transaction database appears to be empty. Initializing...');
    // Set a const that will contain your SQL commands to initialize the database.
        const sqlTInit = `
            CREATE TABLE userinfo ( id INTEGER, time TEXT, category TEXT, amount INTEGER);`;
    // Execute SQL commands that we just wrote above.
        db2.exec(sqlTInit);
    // Echo information about what we just did to the console.
        console.log('Your transaction database has been initialized with a new table.');
    } else {
    // Since the database already exists, echo that to the console.
        console.log('Transaction Database exists.')
    }
// Export all of the above as a module so that we can use it elsewhere.
module.exports = db1;
module.exports = db2;
