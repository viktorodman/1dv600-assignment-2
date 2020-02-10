# Assignment 2
1. [Plan and Time Log](#plan-and-time-log)
2. [Updated Use Case Diagram](#updated-use-case-diagram)
3. [Fully Dressed "Play Game" Use Case](#fully-dressed-play-game-use-case)
4. [Machine Diagrams for "Play Game"](#machine-diagrams-for-play-game)
5. [State Machines](#state-machines)
6. [Implementation](#implementation)
7. [Class diagram](#class-diagram)

***

## Plan and Time log
|   Task   |   Time Estimate   |   Actual Time |   Description | Reflection |
|   :------ |   :----------:    |   :--------:  |   :--- |:---
| **Make time estimations** | 2 hours | 2 hours | Make time estimations on the different tasks | Time wise I'm surprised that it went as expected. |
| **Create Usecase** | 4 hours | 2 hours 30 minutes | To get visualization over what our system is supposed to do, who uses the system and what our system relies on upon.| Most of the time was spent figuring out how to write Usecases |
| **Modeling Behavior** | 3 hours | TBA |   Create a Play Game State Machine | Insert Reflection |
| **Implement** | 4 hours | TBA | Create a basic menu flow, so that I can move according to the state machine | Insert Reflection |
| **Modeling Structure** | 2 hours | TBA | Create class diagrams from the implementation | Insert Reflection | 

*** 

## Updated Use Case Diagram

![Alt text][logo]

[logo]: Project-Documentation/Images/Usecase-Model.png "Logo Title Text 2"

***

## Fully Dressed Play Game use case

Precondition: The word theme has been chosen.

Postcondition: The Game Win confirmation is displayed.

##### Main scenario

1. Starts when the Player has chosen a word theme.
2. The system presents placeholders for the letters of the word.
3. The Player enters a letter.
4. The system replaces the placeholders to the letter(Goto step 3)
5. The Player enters all the letters of the word without exceeding the number of allowed guesses.
6. The system presents the Game win confirmation and two alternatives, Play Again and Quit Game.
7. The Player chooses Quit Game(see Use Case 3).

##### Alternative scenarios

3.1 The Player enters a letter not included in the word.

1. The system adds a part to the man getting hanged.
2. Goto 3.

5.1 The player does not enter all the letters without exceeding the number of allowed guesses.
1. The system presents the Game lose confirmation and two alternatives, Play Again and Quit Game.
2. The player chooses Play Again(See 7.1)

7.1 The Player chooses Play Again
1. Goto 2

***

## Machine Diagrams for Play Game

***

## State Machines

***

## Implementation

***

## Class diagram