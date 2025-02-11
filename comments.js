// Create web server
// 1. Import express
// 2. Create an express app
// 3. Create a route for /comments
// 4. Create a route for /comments/:id
// 5. Listen on port 3000

// 1. Import express
const express = require('express');

// 2. Create an express app
const app = express();

// 3. Create a route for /comments
app.get('/comments', (req, res) => {
  res.send('GET /comments');
});

// 4. Create a route for /comments/:id
app.get('/comments/:id', (req, res) => {
  res.send('GET /comments/:id');
});

// 5. Listen on port 3000
app.listen(3000, () => {
  console.log('Server is listening on port 3000');
});
