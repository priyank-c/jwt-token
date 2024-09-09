require('dotenv').config();
const express = require('express');
const authRouter = require('./auth');


const app = express();

// Middleware function
app.use((req, res, next) => {
  console.log('Middleware function');
  next();
});

/// port 
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
//// hi priyank 
