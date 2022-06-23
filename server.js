const express = require('express');
const PORT = process.env.PORT || 3001;
const app = express();
const db = require('./db/connection');
// Add near the top of the file
const apiRoutes = require('./routes/apiRoutes');
// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
const inputCheck = require('./utils/inputCheck');


// Add after Express middleware
app.use('/api', apiRoutes);





//consoles the rows from the database in cnosole
// db.query(`SELECT * FROM candidates`, (err, rows) => {
//     console.log(rows);
// });

// // GET a single candidate, hard coded 1
// db.query(`SELECT * FROM candidates WHERE id = 1`, (err, row) => {
//     if (err) {
//         console.log(err);
//     }
//     console.log(row);
// });

// Delete a candidate
// db.query(`DELETE FROM candidates WHERE id = ?`, 1, (err, result) => {
//     if (err) {
//         console.log(err);
//     }
//     console.log(result);
// });

// Create a candidate
// const sql = `INSERT INTO candidates (id, first_name, last_name, industry_connected) 
//               VALUES (?,?,?,?)`;
// const params = [1, 'Ronald', 'Firbank', 1];

// db.query(sql, params, (err, result) => {
//     if (err) {
//         console.log(err);
//     }
//     console.log(result);
// });

// app.get('/', (req, res) => {
//     res.json({
//         message: 'Hello World'
//     });
// });

// Default response for any other request (Not Found)
app.use((req, res) => {
    res.status(404).end();
});

// Start server after DB connection
db.connect(err => {
    if (err) throw err;
    console.log('Database connected.');
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });
});