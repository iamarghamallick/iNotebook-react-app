const connectToMongo = require('./db');
const express = require('express');
var cors = require('cors');
require('dotenv').config();

connectToMongo();
const app = express();
app.use(cors());
const port = process.env.PORT;

app.use(express.json());

// Avalable routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/notes', require('./routes/notes'));

app.listen(port, () => {
  console.log(`iNotebook-backend listening on http://localhost:${port}`);
})