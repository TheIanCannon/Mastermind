# MASTERMIND #
Based on the original physical boardgame, this digital version challenges a player to solve a secret code of four colors within ten moves. 

## Technologies Used ##
_Languages:_ CSS, HTML, Javascript
_Libraries:_ ReactJS
_API:_ Random.org API for code generation

## Setup ##
1. Clone the repository code with ```git clone https://github.com/TheIanCannon/mastermind-react.git```.
2. Install node modules with ```npm install```.
3. Run the app: ```npm start``` and browse to Localhost:3000.

## Get Started ##
1. Click on any of the eight colored dots to select one and add it to the blank rows, starting with the lowest first.
2. Click the ✘ to reset the current row at any time.
3. Click the ✔ to submit the attempted solution. The solution is accepted only if all four spaces have been filled.
4. Upon submission, light grey (wrong color), dark grey (right color, wrong location), and black (right color and location) pips randomly fill each of the four hint spots next to the current row.
5. If the solution is correct, player wins. Otherwise, the next blank row becomes active. If the player is unable to solve by ten rounds, player loses.
6. Click the ```Reset``` key to restart the game at any time.