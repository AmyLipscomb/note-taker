const express = require('express');
const path = require ('path');
const db = require('../db/db.json');
const fs = require('fs');
const PORT = 9002
const app = express();
//^Creating an 'app' variable set to the value of 'express()'

//TO DO: INSERT MIDDLEWARE
app.use(express.static('public'));
app.use(express.json());



//The following API routes should be created:

//* `GET /api/notes` should read the `db.json` file and return all saved notes as JSON.

app.get('/', (req, res) => {
    res.json(db)
    // res.sendFile("/api/notes")
});

//^The route matches the fetch


//* `POST /api/notes` should receive a new note to save on the request body, add it to the `db.json` file, and then return the new note to the client. You'll need to find a way to give each note a unique id when it's saved (look into npm packages that could do this for you).

app.post('/',(req, res) => {
    res.sendFile("/api/notes")
});


//HTML ROUTES - having trouble finding the correct path names
app.get('/', (req, res) => 
res.sendFile(path.join(__dirname,'/public/index.html'))
);


app.get('/', (req, res) => 
res.sendFile(path.join(__dirname,'/public/notes.html'))
);


//Have the app listen on PORT 9002
app.listen(PORT, () => {
    console.log(`Your server is awake at http://localhost:${PORT}`)
  });

  //To connect to index.js
  module.exports= app;