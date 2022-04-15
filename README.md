# MASTERMIND #

## Pseudocode ##

### Define Required Constants (Game Board) ###
1. Challenge Code: 1 row of 4 blank spaces (hidden)
2. Solution Attempts: 10 rows of 4 blank spaces
3. Attempt Responses: 10x 4 blank spaces next to Solution Attempts

### Define Variables to Track State / Cache Elements ### 
1. Challenge Code
2. Number of Rows played (current active row out of 10)
3. Solution Attempts in each Row
4. Attempt Responses to each Solution Attempt
5. Win or Lose condition

### Begin Play ###
1. Randomly generate 4-number sequence for Challenge Code (drawn from API).
2. Guess 4 numbers in sequence. They will be placed in the first row of Solution Attempts.
3. Compare numbers in Solution Attempt to Challenge Code
4. If number is right guess AND right place, add “Yes” response to random point in Attempt Response row
5. If number is right guess AND NOT right place, add “Partial” response to random point in Attempt Response row
6. If number is NOT right guess, add nothing.
7. Return to Step 2, continuing through Rows 2 to Row 10.
8. If all numbers guessed are a match for number AND position, declare win, fill all Attempt Responses with Yes, and show Challenge Code to player.
9. If player reaches Row 10 without solving, declare Lose.

### ICEBOX ###
* Multiple players beyond Computer and Player
* Challenge, Solution, and Responses of 5 or more

## Setup ##
1.