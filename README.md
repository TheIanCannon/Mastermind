# MASTERMIND #
Based on the original physical boardgame, this digital version challenges a player to solve a secret code of four colors within ten moves. 

## Screenshots ##
![Various states: starting, four colors needed, try again, lose, win](https://i.imgur.com/KZuxDOT.png)

## Technologies Used ##
_Languages:_ CSS, HTML, Javascript\
_Libraries:_ ReactJS\
_API:_ Random.org API for code generation

## Setup ##
1. Clone the repository code with ```git clone https://github.com/TheIanCannon/mastermind-react.git```.
2. Install node modules with ```npm install```.
3. Run the app with ```npm start``` and browse to Localhost:3000.

## Get Started ##
1. Match the hidden code of four colors at top.
2. Click on any of the eight colored dots to select one and add it to the blank rows, starting with the lowest first.
3. Click ```✗``` to reset the current row at any time before submitting.
4. Click ```✓``` to submit the attempted solution. A solution is accepted only if all four spaces have been filled. Upon submission, light grey (wrong color), dark grey (right color/wrong location), and black (right color/location) pips randomly fill each of the four hint spots next to the current row.
6. Receive a ```YOU WIN!!!``` message if the solution is correct. 
7. Receive a ```Try another solution...``` message if the solution is incorrect, and attempt decoding again.
8. Receive a ```You lose. Better luck next time!``` message if all ten attempts fail.
7. Click ```Reset``` to restart the game at any time.

## Next Steps ##
• Expand difficulty by including more color choices for longer code sequences.\
• Increase number of players by including more gameboards or switching between gameboards each turn.\
• Add more decoration with CSS.\
• Update design in CSS to avoid components' minor shifting based on screen size.\