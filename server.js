// Define app using express
var express = require("express")
var app = express()
// Require database SCRIPT file
var db1 = require("./userdatabase.js")
var db2 = require("./transactiondatabase.js")
// Require md5 MODULE
var md5 = require("md5")
// Require cors
const cors = require("cors")
// Make Express use its own built-in body parser
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
// Make the server use cors
app.use(cors());
var currentUser = 0;
// Set server port
var HTTP_PORT = 5000
// Start server
const server = app.listen(HTTP_PORT, () => {
    console.log("Server running on port %PORT%".replace("%PORT%",HTTP_PORT))
});

//method to calculate endpoint call times
function currentTime() {
    const d = new Date();
    return d.getUTCMonth()+1+"/"+d.getUTCDate()+"/"+d.getUTCFullYear()+", "+d.getUTCHours()+":"+d.getUTCMinutes()+":"+d.getUTCSeconds()+" UTC"
}

// READ (HTTP method GET) at root endpoint /app/
app.get("/app/", (req, res, next) => {
    res.json({"message":"Your API works! (200)"});
	res.status(200);
});
//CREATE a new user at endpoint /app/new/user
app.post("/app/new/user", (req, res, next) => {
	console.log(req.body);
	var data = {
		user: req.body.user,
		pass: req.body.pass ? md5(req.body.pass) : null,
		email: req.body.email,
		lastlogin: currentTime()
	}
	const stmt = db1.prepare("INSERT INTO userinfo (user, pass, email, lastlogin) VALUES (?, ?, ?, ?)");
	const info = stmt.run(data.user, data.pass, data.email, data.lastlogin);
	res.status(201).json({"message":stmt.changes + " record created: ID " + info.lastInsertRowid + " (201)"});
});
// DELETE a single user (HTTP method DELETE) at endpoint /app/delete/user/:id
app.delete("/app/delete/user/:id", (req, res) => {
	const stmt = db1.prepare("DELETE FROM userinfo WHERE id = ?");
	const stmt2 =db2.prepare("DELETE FROM transactions WHERE id = ?");
	const info = stmt.run(req.params.id);
	const info2 = stmt2.run(req.params.id);

	res.status(200).json({"message":info.changes + " record deleted: ID " + req.params.id + " (200)"});

});
// READ a single user (HTTP method GET) at endpoint /app/user/:id
app.get("/app/user/:id", (req, res) => {	
	const stmt = db1.prepare("SELECT * FROM userinfo WHERE id = ?").get(req.params.id);
	res.json(stmt);
    res.status(200);
});
//READ a single users id at endpoint /app/getfromid
app.get("/app/get/id/:email", (req, res) => {
	const stmt = db1.prepare("SELECT id FROM userinfo WHERE email = ?")
	.get(req.params.email);
	res.json(stmt);
    res.status(200);
})


//READ a single users id at endpoint /app/getfromid
app.get("/app/get/id/:user/:email/:pass", (req, res) => {
	var pass = (req.params.pass ? md5(req.params.pass) : null);
	const stmt = db1.prepare("SELECT id FROM userinfo WHERE user = ? AND email = ? AND pass = ?")
	.get(req.params.user, req.params.email, pass);
	res.json(stmt);
    res.status(200);
})

app.get("/app/get/totalSpend/:id", (req, res) => {
	const stmt = db2.prepare("SELECT SUM(amount) FROM transactions WHERE id = ?")
	.get(req.params.id);
	res.json(stmt);
    res.status(200);
})

app.get("/app/get/food/:id", (req, res) => {
	const stmt = db2.prepare("SELECT SUM(amount) FROM transactions WHERE id = ? AND category = 'food'")
	.get(req.params.id);
	res.json(stmt);
    res.status(200);
})

app.get("/app/get/entertainment/:id", (req, res) => {
	const stmt = db2.prepare("SELECT SUM(amount) FROM transactions WHERE id = ? AND category = 'entertainment'")
	.get(req.params.id);
	res.json(stmt);
    res.status(200);
})

app.get("/app/get/shopping/:id", (req, res) => {
	const stmt = db2.prepare("SELECT SUM(amount) FROM transactions WHERE id = ? AND category = 'shopping'")
	.get(req.params.id);
	res.json(stmt);
    res.status(200);
})

app.get("/app/get/health/:id", (req, res) => {
	const stmt = db2.prepare("SELECT SUM(amount) FROM transactions WHERE id = ? AND category = 'health'")
	.get(req.params.id);
	res.json(stmt);
    res.status(200);
})

app.get("/app/get/housing/:id", (req, res) => {
	const stmt = db2.prepare("SELECT SUM(amount) FROM transactions WHERE id = ? AND category = 'housing'")
	.get(req.params.id);
	res.json(stmt);
    res.status(200);
})

app.get("/app/get/other/:id", (req, res) => {
	const stmt = db2.prepare("SELECT SUM(amount) FROM transactions WHERE id = ? AND category = 'other'")
	.get(req.params.id);
	res.json(stmt);
    res.status(200);
})

//GET ALL
// READ a list of all users (HTTP method GET) at endpoint /app/users/
app.get("/app/users", (req, res) => {	
	const stmt = db1.prepare("SELECT * FROM userinfo ").all();
	res.status(200).json(stmt);
});

// UPDATE a single user (HTTP method PATCH) at endpoint /app/update/user/:id
app.patch("/app/update/user/:id", (req, res) => {
	var data = {
        user: req.body.user ? req.body.user : null,
        pass: req.body.pass ? md5(req.body.pass) : null,
        email: req.body.email ? req.body.email : null,
		lastlogin: currentTime()
    }
    
    const stmt = db1.prepare("UPDATE userinfo SET user = COALESCE(?, user), pass = COALESCE(?, pass), email = COALESCE(?, email), lastlogin = COALESCE(?, lastlogin) WHERE id = ?");
	const info = stmt.run(data.user, data.pass, data.email, data.lastlogin, req.params.id);

    res.status(201).json({"message":info.changes + " record updated: ID " + req.params.id + " (201)"});
	//res.json(stmt);
	
});

//CREATE a new transaction at endpoint /app/new/transaction
app.post("/app/new/transaction", (req, res, next) => {
	var data = {
		id: req.body.id,
		time: currentTime(),
		category: req.body.category,
		amount: req.body.amount
	}
	const stmt = db2.prepare("INSERT INTO transactions (id, time, category, amount) VALUES (?, ?, ?, ?)");
	const info = stmt.run(data.id, data.time, data.category, data.amount);
	res.status(201).json({"message":stmt.changes + " record created: ID " + info.lastInsertRowid + " (201)"});
});

//READ all transactions for a user at endpoint /app/transactions/:id
app.get("/app/transactions/:id", (req, res) => {	
	const stmt = db2.prepare("SELECT * FROM transactions WHERE id = ?").all(req.params.id);
	res.json(stmt);
    res.status(200);
});

//READ all transactions at endpoint /app/transactions/
app.get("/app/transactions/", (req, res) => {	
	const stmt = db2.prepare("SELECT * FROM transactions ").all();
	res.status(200).json(stmt);
});

// Default response for any other request
app.use(function(req, res){
	res.json({"message":"Endpoint not found. (404)"});
    res.status(404);
});