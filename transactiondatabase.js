// This ensures that things do not fail silently but will throw errors instead.
"use strict";
// Require better-sqlite.
const Database = require('better-sqlite3');
// Connect to databases or create them if one doesn't exist yet.
const db2 = new Database('transactions.db')

// Is the database initialized or do we need to initialize it?
const TStmt = db2.prepare(`SELECT name FROM sqlite_master WHERE type='table' and name='transactions';`);
let TRow = TStmt.get();

if (TRow === undefined) {
    // Echo information about what you are doing to the console.
        console.log('Your transaction database appears to be empty. Initializing...');
    // Set a const that will contain your SQL commands to initialize the database.
        const sqlTInit = `
            CREATE TABLE transactions ( id INTEGER, time TEXT, category TEXT, amount INTEGER);
            INSERT INTO transactions (id, time, category, amount) VALUES ('0', '8/4/20, 16:00:00 UTC', 'Food', '200.87');
            `;
    // Execute SQL commands that we just wrote above.
        db2.exec(sqlTInit);
    // Echo information about what we just did to the console.
        console.log('Your transaction database has been initialized with a new table and an entry.');
    } else {
    // Since the database already exists, echo that to the console.
        console.log('Transaction Database exists.')
    }
// Export all of the above as a module so that we can use it elsewhere.
module.exports = db2;