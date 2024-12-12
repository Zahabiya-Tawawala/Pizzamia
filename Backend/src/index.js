const express = require('express');
const dotenv = require('dotenv').config();
const dbConnect = require('./config/dbConnect');

dbConnect();

const app = express();

// Middleware
app.use(express.json());

// Routes

// start server
const PORT = process.env.PORT || 7002;  // process.env.PORT is for deployment
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));