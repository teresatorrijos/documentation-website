# Documentation Website

This is a responsive documentation website built using Express.js and EJS. It contains some interactivity that shows us where the link to the next page is placed.

Contents of the website are included in `.JSON` files located in the folder `public/pages` and accessed by routes placed in `routes` folder. This way, contents can be easily changed and extended.

`App.js` holds the Express server setup and `package.json` contains the Node application information and the dependencies we need.


## Prerequisites
1. Install [Node.js](https://nodejs.org)
1. From project root folder install all the dependencies: `npm i`


## To Run Locally
1. From project root folder run nodemon: `npm run dev`
1. Express server started on port 3000, visit http://localhost:3000. You don't need to restart Express server when any change occurs, just reload your browser.
