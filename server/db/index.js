var mysql = require('mysql');

// Create a database connection and export it from this file.
// You will need to connect with the user "root", no password,
// and to the database "chat".

var connection = mysql.createConnection({
  user: 'student',
  password: 'student',
  database: 'chat'
});

//connection.connect();
module.exports = connection;
// connection.query('INSERT INTO messages(id,  text, room) values(0, "Hello", "Lobby");', function (error, results, fields) {
//   if (error) throw error;
//   // console.log('The solution is: ', results[0].solution);
// });

// // pool.query(`CREATE TABLE messages (
// //   id INT AUTO_INCREMENT,
// //   text VARCHAR(255),
// //   room VARCHAR(100),
// //   PRIMARY KEY(id))`, function (error, results, fields) {
// //   if (error) throw error;

// //   console.log('succesfully called db server');
// // });

// console.log('called');