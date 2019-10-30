/* eslint-disable no-unused-vars */
const express = require('express');
const path = require('path');
const htmlroutes = require('./server/routes/htmlRoutes');

const app = express();
const PORT = 3000;

app.use(express.urlencoded({extended: true}));
app.use(express.json());

htmlroutes(app);



app.listen(PORT, function() {
  console.log('App listening on PORT ' + PORT);
});

