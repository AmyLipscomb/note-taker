const express = require('express');
const htmlRoutes = require('./routes/htmlroutes');
const apiRoutes= require('./routes/apiroutes');

//For when you send to Heroku. 
const PORT = process.env.PORT || 9002;

//Creating an 'app' variable set to the value of 'express()'
const app = express();


//Insert MIDDLEWARE
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(apiRoutes);
app.use(htmlRoutes);


//Have the app listen on PORT 9002
app.listen(PORT, () => {
    console.log(`Your server is awake at http://localhost:${PORT}`)
  });

