# Note-Taking Made Easy 
<img src="https://img.shields.io/badge/License-MIT-ff69b4.svg">

## Description

I don't know about you, but every day there's at least 2-3 things I write down as notes to myself. However, instead of writing reminders on random pieces of paper, I can now utilize my note-taker and so can you! I used the npm package, [Express](https://www.npmjs.com/package/express) to help create my site. Express is a a Node.js web framework, that allows its' users to structure web applications to handle different http requests at a specific url. Below are pictures of the final results!  

![homepage](./public/assets/css/images/noteTakerhomepage.png)

![note](./public/assets/css/images/amysNote.png)

You can create your own notes, by visiting my [deployed site](ENTER URL ONCE IT'S DEPLOYED)! This was deployed using Heroku, which is a platform that allows its' users to create, run and operate applications in the &#9729; .

 

----
## Table of Contents 

  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contribution](#contribution)
  * [Tests](#tests)
  * [Technologies](#technologies)
  * [Questions](#questions)

---
## Installation

To use the npm package, "express", I typed the following code into the command line:

```
npm i
```

I also installed the package, uniqid, which creates unique ID's for users. Below is the line of code typed into the command line:

```
npm i uniqid
```

Then to deploy to Heroku, the following lines of code had to be typed into the terminal: 

```
heroku create
```

```
git push heroku main
```
---

## Usage

In order to get my site up and running using Heroku, my repo needed the following four items:

1. gitnore - Allows Node to run.  

2. [package.json](https://heynode.com/tutorial/what-packagejson/) -  This JSON file holds important information that the program uses. 

3. server.js - This file creates the server (among other things)! 

4. PORT - The PORT is defined in the server.js file. When connecting to Heroku, it's important to include the code:

```
process.env.PORT || Enter Port Number
```

I used the PORT number 9002, however you can use whatever number you want when creating the PORT.  

![servercode](./public/assets/css/images/serverjscode.png)

After creating the server, you can run it by typing this line of code into the terminal:

```
node server
```

Once you do that, it should be awake (if you use app.listen - lines 21-23)! 

![serverawake](./public/assets/css/images/server-awake.png)

*Note- If you want to kill the server, within the terminal, click "control + C". 

The purpose of a server is to listen for a request, AND send back a response. To get a response, routes need to be created, utilizing HTTP request methods. There are four request methods, and for my website I used the first 3 listed below:

1. POST - Creates
2. GET  - Reads
3. DELETE - Deletes
4. PUT - Updates

When I made routes, in order to make the code easier to follow, I created a "routes" folder, and created two js files- one for api routes, and one for html routes. I then connected them to the server.js file (can be seen on lines 16 & 17 in the screenshot above). 

Check out my code below to see the HTTP requests! 

<strong>Api Route</strong>

![apiroute](./public/assets/css/images/apiroutecode.png)

<strong>HTML Route</strong>

![htmlroute](./public/assets/css/images/htmlroutecode.png)


Before deploying via Heroku, I tested my node server to make sure everything was working smoothly!


---

## Contribution

  None.

  ---

## License

```
This project is licensed under MIT.
```

---


## Tests

None.

 ---

 ## Technologies

* HTML 
* CSS
* JavaScript
* Node
    * npm packages:
       * [express](https://www.npmjs.com/package/express)
       * [uniqid](https://www.npmjs.com/package/uniqid)
* Heroku
* VS Code

 ---

## Questions

If you'd like to see more of my projects, check out my github: [amylipscomb](https://github.com/amylipscomb).
For further information please contact me at [amy.a.lipscomb@gmail.com](mailto:amy.a.lipscomb@gmail.com)!