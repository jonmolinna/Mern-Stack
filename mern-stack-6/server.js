const path = require('path');
const express = require('express');
const dotenv = require('dotenv');
const colors = require('colors');
const morgan = require('morgan');
const connectDB = require('./config/db');

// Variables de Entorno
dotenv.config({ path: './config/config.env'})

// Connectando MongoDB
connectDB();

// Routes
const transactions = require('./routes/transactions');

// Initializando Express
const app = express();

// Formato Json
app.use(express.json());

// Morgan Middleware si esta en desarrollo usa morgan
if(process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
}

// Creando  Routes
app.use('/api/v1/transactions', transactions);

// Si esta el codigo en producion que ejecute
if(process.env.NODE_ENV === 'production'){
    app.use(express.static('client/build'));

    app.get('*', (req, res) => res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html')));
}

const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold));