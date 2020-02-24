### [How to install the application](Terminal-Hangman/README.md)

# Assignment 2
1. [Plan and Time Log](#plan-and-time-log)
2. [Updated Use Case Diagram](#updated-use-case-diagram)
3. [Fully Dressed "Play Game" Use Case](#fully-dressed-play-game-use-case)
4. [State Machine Diagram for "Play Game"](#state-machine-diagram-for-play-game)
6. [Class diagram](#class-diagram)

***

## Plan and Time log
|   Task   |   Time Estimate   |   Actual Time |   Description | Reflection |
|   :------ |   :----------:    |   :--------:  |   :--- |:---
| **Make time estimations** | 2 hours | 2 hours | Make time estimations on the different tasks | Time wise I'm surprised that it went as expected. |
| **Create Usecase** | 4 hours | 2 hours 30 minutes | To get visualization over what our system is supposed to do, who uses the system and what our system relies on upon.| Most of the time was spent figuring out how to write Usecases |
| **Modeling Behavior** | 3 hours | 6 hours |   Create a Play Game State Machine | Changed the diagram many times. At first, the diagram looked too much like a Sequence Diagram.   |
| **Implement** | 4 hours | 6 hours | Create a basic menu flow, so that I can move according to the state machine | Figuring out how the different modules that I used work took longer than expected. |
| **Modeling Structure** | 2 hours | 1 hour | Create class diagrams from the implementation | Made a simple class diagram. | 

***

### Results
|   Total Estimated Time | Total Actual Time | 
| :------:               | :-------:         |
|   15 hours             | 17 hours and 30 minutes |


***

## Updated Use Case Diagram

![Alt text][UCDIAGRAM]

[UCDIAGRAM]: Project-Documentation/Images/Usecase-Model.png "A Use Case Diagram"

***

## Fully Dressed Play Game use case

### UC 2 Play Game

Precondition: The Player wants to play the game.

Postcondition: The Player chooses to stop playing.

##### Main scenario

1. Starts when the Player has chosen a word theme.
2. The system presents placeholders for the letters of the word.
3. The Player enters a letter.
4. The system replaces the placeholders to the letter(Goto step 3)
5. The Player enters all the letters of the word without exceeding the number of allowed guesses.
6. The system presents the Game win confirmation and two alternatives, Play Again and Quit Game.
7. The Player chooses Quit Game.

##### Alternative scenarios

3.1 The Player enters a letter not included in the word.

1. The system adds a part to the man getting hanged.
2. Goto 3.

3.2 The Player enters a letter that's already been entered.

1. The System informs the player.
2. Goto 3

3.3 The Player chooses to stop playing

1. The System exits the game.

5.1 The player exceeds the number of allowed guesses.
1. (See step 6)
2. The player chooses Play Again(See 7.1)

7.1 The Player chooses Play Again
1. Goto 1

***

## State Machine Diagram for Play Game

![Alt text][STATEMACHINE]

[STATEMACHINE]: Project-Documentation/Images/Play-Game-State-Machine.png "A State Diagram"

***


## Class diagram

![Alt text][CLASSDIAGRAM]

[CLASSDIAGRAM]: Project-Documentation/Images/Class-Diagram.png "A Class Diagram"