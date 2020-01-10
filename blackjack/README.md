This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
Project Overview
Project Description
simple blackjack game following the rules of casino style play for single and eventually mulitple players at once. Eventually adding on account features for tracking accounts once we introduce database components.

Project Links
https://github.com/davidloesch1/BlackJack
Wireframes
Upload images of wireframe to cloudinary and add the link here with a description of the specific wireframe.

https://www.lucidchart.com/invitations/accept/e50fcce9-f30b-418f-9c9e-bb2a8c29440c
https://www.lucidchart.com/invitations/accept/9094ff81-a184-42a0-8845-836188525bb0
App will house all other components, there will be a table component for the actual game board, as well as an account component that will house all information related to the account, such as balance and win stats. Each will also house a number of other smaller compoenents like "Card" and "Dealer"

MVP/PostMVP - 5min
MVP - of this project will be to have 1 deck, 1 player, and a dealer that you will be able to play a single hand of blackjack per turn and go throught the entire deck, then be able to reshuffle the deck and continue play.

Post MVP - will be a full casinon style play for single player (multiplayer eventually). using typical casino house rules, a player will be able to play up to 7 seats on their own, with each seat producing a seperate hand and betting amount. The player will have some setting options such as "apply bet to all seats" or "change betting amout each deal"

My focus for this project will be UI/UX and functionality. I want this game to be fun to play without any extra features that may hinder gameplay.

MVP EXAMPLE
Find and use external api - deckofcardsapi.com
https://deckofcardsapi.com/api/deck/bilfs0xe2sxh/draw/?count=1
http://comfortable-stem.surge.sh/
The api I'm using only deals with decks of cards, the ability to shuffle, and keeping track of any cards drawn. Using this, I'll use state to manipulate the data and create game logic to offer players.

PostMVP EXAMPLE
Add localStorage or firebase for storage
Components
Writing out your components and its descriptions isn't a required part of the proposal but can be helpful.
Component	Description
App	This will make initial data pull and be the core source of data
Account	This will hold account information
Table	This will house all components related to gameplay
Time Frames
Component	Priority	Estimated Time	Time Invetsted	Actual Time
Adding Form	H	6hrs	-	-
Working with API	H	6hrs	3	-
Building components	H	20hrs	6	-
CSS	M	6hrs	-	-
Game Logic	H	8hrs	3	-
Testing	H	8hrs	2	-
Total	H	54hrs	-	-
Code Snippet
To Be Determined
Issues and Resolutions
TBD

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `yarn build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
