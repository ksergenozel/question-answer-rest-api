const express = require('express');
const dotenv = require('dotenv');
const connectDatabase = require('./helpers/database/connectDatabase');
const customErrorHandler = require('./middlewares/errors/customErrorHandler');
const routers = require('./routes/index');

// environment variables
dotenv.config({
  path: './config/env/config.env'
});

// mongodb connection
connectDatabase();

const app = express();

app.use(express.urlencoded({ extended: true }))

const PORT = process.env.PORT;

// routers middleware
app.use('/api', routers);

// error handler
app.use(customErrorHandler)

app.listen(PORT, () => {
  console.log(`App started on port ${PORT}. `);
})