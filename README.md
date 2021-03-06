## Northcoders News

Northcoders News is a social news aggregation and discussion site.
It has been built using React, Redux, Bulma and Axios.

Northcoders News has articles which are divided into topics. Each article has user curated ratings and can be up or down voted. Users can add comments about an article. Any comments you post from your app will automatically be given the username 'northcoder'. Comments can also be up or down voted. You can delete your own comments (but not anyone else's!)

You can view the deployed site here: https://northcodersnewsgv.herokuapp.com. 

Alternatively, you can run this project locally by following the installation and setup instructions below.

This repo contains all the front-end code for this project. The code for the back-end can be found here: https://github.com/Gemmawv/northcoders-news-api


# Installation

1. Make sure you have node installed.
``` javascript 
node -v
```
This command will tell you the version of node you have, if you have it installed already. If you do not have node installed, follow the installation instructions found here: https://nodejs.org/en/download/package-manager/.


# Project setup

1. To clone the project and install dependencies, open a terminal and navigate to the folder where you wish to save the project. Run the following command:
``` javascript 
git clone https://github.com/Gemmawv/northcoders-news
```

2. To install all project dependencies, navigate into the new folder and run:
``` javascript 
npm install
```

3. Make sure you have the back-end running locally by following the installation and setup instructions here: https://github.com/Gemmawv/northcoders-news-api

4. Finally, open another terminal, navigate to the front-end project folder and run:
``` javascript 
npm start
```
Once webpack has finished compiling, the application will open at http://localhost:3000


# Running tests
1. To run tests, open a terminal, navigate to the project folder and run:
``` javascript 
npm test
```
