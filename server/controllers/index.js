var models = require('../models');

module.exports = {
  messages: {
    get: function (req, res) {
      // console.log('123');
      // models.messages.get((err, result) => {

      //   res.json(result);

      // });

    },

    post: function (req, res) {
      console.log(req.body);
      //console.log('test message post');
      // var data = [req.body[text], req.body[roomname], req.body[username]];
      // models.messages.post(data, (err, result) => {
      //   res.json(result);

      // });
    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {
      models.users.get((err, result) => {
        res.json(result);
      });

      // models.users.get();
    },
    post: function (req, res) {
      let {name} = req.query;

      models.users.post(name, (err, result) => {
        res.json(result);
      });
    }
  }
};

