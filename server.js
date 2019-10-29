/* eslint-disable no-unused-vars */
// Dependencies
// ===========================================================
const express = require('express');


const app = express();
const PORT = 3000;

// Data
const table1 ={
  seats: 4,
};
const table2 ={
  seats: 4,
};
const table3 ={
  seats: 4,
};
const table4 ={
  seats: 6,
};
const table5 ={
  seats: 2,
};
const waitlist=[''];

// Routes
// ===========================================================
app.get('/ home', function(req, res) {
  res.send('');
});

app.get('/t1', function(req, res) {
  res.json(table1);
});
app.get('/t2', function(req, res) {
  res.json(table2);
});
app.get('/t3', function(req, res) {
  res.json(table3);
});
app.get('/t4', function(req, res) {
  res.json(table4);
});
app.get('/t5', function(req, res) {
  res.json(table5);
});

// app.get('/tables', function(req, res) {
//   res.json();
// });

// Listener
// ===========================================================
app.listen(PORT, function() {
  console.log('App listening on PORT ' + PORT);
});
//  dasd
