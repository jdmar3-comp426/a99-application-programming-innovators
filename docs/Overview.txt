The Budget App
Budgeting Simplified


Design: (Use Bulma)
3 pages: Account Info, Enter transaction, Display spending
Account info
Display username, email, user id
Show delete account button 
Enter transaction
Drop down to select the category: Food, Entertainment, Subscriptions, Housing, Shopping, Investments, 
Field to enter the amount
Button to submit the transaction to the database
Spending display
Dropdown to select a category or total spending
A field that shows spending this month in chosen category
Field with a chart of spending each month in the chosen category




Database Info:
Database 1: Users
Per user:
	Username
	Password (encrypted)
	Email
	User ID (hashed)
	Last logged in
Database 2: Transactions
Per Transaction:
	Category (from predefined list)
	Amount (positive number)
	Date (autodetect)
	User ID
