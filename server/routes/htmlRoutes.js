const path = require('path');
module.exports =function(app) {
  app.get('/home', function(req, res) {
    // res.send("Welcome to the Star Wars Page!")
    res.sendFile(path.join(__dirname, '../client/home.html'));
  });
};
module.exports=function(app) {
  app.get('/reserve', function(req, res) {
    // res.send("Welcome to the Star Wars Page!")
    res.sendFile(path.join(__dirname, 'reserve.html'));
  });
};

module.exports=function(app) {
  app.get('/tables', function(req, res) {
    // res.send("Welcome to the Star Wars Page!")
    res.sendFile(path.join(__dirname, 'tables.html'));
  });
};

