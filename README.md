##### [How to install the application](Terminal-Hangman/README.md)

# Assignment 2
1. [Plan and Time Log](#plan-and-time-log)
2. [Updated Use Case Diagram](#updated-use-case-diagram)
3. [Fully Dressed "Play Game" Use Case](#fully-dressed-play-game-use-case)
4. [State Machine Diagram for "Play Game"](#state-machine-diagram-for-play-game)
5. [Class diagram](#class-diagram)

***

## Plan and Time log
|   Task   |   Time Estimate   |   Actual Time |   Description | Reflection |
|   :------ |   :----------:    |   :--------:  |   :--- |:---
| **Make time estimations** | 2 hours | 2 hours | Make time estimations on the different tasks. Done when all the tasks have time estimations. | Went as expected time-wise. |
| **Expand the use case model** | 2 hours | 1 hour | Add a new use case to the current Use Case Diagram. Done when a new use case is added| No problems occurred during this task |
| **Create a fully dressed use case for Play Game** | 2 hours | 3 hours | Create a fully dressed use case for play game. Done when the use case describes the requirements for the play game use case.| Most of the time was spent figuring out how to write Usecases |
| **Create a Play Game State Machine** | 3 hours | 6 hours |   Create a State Machine for the play game use case, that describes the transitions between the different states of the use case. Done when the state machine can be used to describe the different states and transitions of the use case for "play game". | Changed the diagram many times. At first, the diagram looked too much like a Sequence Diagram.   |
| **Implementation** | 4 hours | 6 hours | Create a basic menu flow, so that the player can move according to the state machine. Done when its possible move around in the menus different parts described in the "Hangman State Chart"| Figuring out how the different dependencies that will be used work, took longer than expected. |
| **Create a Class Diagram** | 2 hours | 1 hour | Create a class diagram from the implementation. Done when the class diagram describes the implemented files different dependencies. | Made a simple class diagram that describes the dependencies between the different files| 

***

### Results
|   Total Estimated Time | Total Actual Time | 
| :------:               | :-------:         |
|   15 hours             | 19 hours  |


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


3.1 The Player chooses to stop playing

1. The System asks for the Player confirmation.
2. The Player confirms and exits the game

3.1.2 The player chooses to continue playing.
1. Goto 3

4.1 The Player enters a letter not included in the word.

1. The system adds a part to the man getting hanged.
2. Goto 3.

4.2 The Player enters a letter that's already been entered.

1. The System informs the player.
2. Goto 3

5.1 The player exceeds the number of allowed guesses.
1. The system presents the Game lose confirmation and two alternatives, Play Again and Quit Game.
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