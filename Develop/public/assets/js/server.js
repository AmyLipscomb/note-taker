const express = require('express');
const path = require ('path');

const PORT = 9002
const app = express();



//Have the app listen
app.listen(PORT, () => {
    console.log(`Your server is awake at http://localhost:${PORT}`)
  });