const mysql = require('mysql');

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',      // your password here
  database: 'admin_details' // your database name
});

db.connect((err) => {
  if (err) {
    console.error('MySQL connection error:', err);
    console.log('Please check your MySQL server and database configuration');
    console.log('Make sure MySQL is running and the database "admin_details" exists');
  } else {
    console.log('Connected to MySQL database successfully');
  }
});

// Test query with better error handling
db.query('SELECT * FROM profile_details ORDER BY ID DESC LIMIT 1', (err, rows) => {
  if (err) {
    console.error('Database query error:', err);
    console.log('Please make sure the "profile_details" table exists');
  } else {
    console.log('Database connection test successful');
  }
});

module.exports = db;
