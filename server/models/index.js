var db = require('../db');

module.exports = {
  messages: {
    get: function (callback) {
      let query = 'SELECT * FROM messages left outer join users on \(messages.fromUser = users.id)';
      // db.query(query, (err, result) => {

      //   if (err) {
      //     console.log('something wrong!!!!');
      //     callback(err, result);
      //   }

      //   callback(null, result);
      // });
    }, // a function which produces all the messages

    post: function (data, callback) {
      //let fromUserId = `SELECT id FROM users WHERE name = ${data.username}`;
      // let query = 'INSERT INTO messages(content, room, fromUser) \
      // values (?,(select id from users where name = ? limit 1), ?)';
      // db.query(query, data, (err, result) => {
      //   if (err) {
      //     console.log('post message err');
      //     callback(err, result);
      //   }
      //   callback(null, result);
      // });

    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function (callback) {

      const query = 'SELECT * FROM users';
      db.query(query, (err, result) => {
        if (err) {
          console.log('something wrong with get user name');
          //callback(err);
        }
        callback(null, result);
      });
    },
    post: function (data, callback) {
      const query = 'INSERT INTO users(name) values (?)';
      db.query(query, data, (err, result) => {
        if (err) {
          console.log('something wrong with post user');
          callback(err, result);
        }
        callback(null, result);
      });
    }
  }
};

