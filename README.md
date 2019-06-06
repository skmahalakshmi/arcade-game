# Classic Arcade Game Clone Project

## Table of Contents

- [Instructions](#instructions)
- [Contributing](#contributing)

## Instructions

Use this [rubric](https://review.udacity.com/#!/rubrics/15/view) for self-checking your submission.

Make sure the functions you write are **object-oriented** - either class functions (like `Player` and `Enemy`) or class prototype functions such as `Enemy.prototype.checkCollisions`. Also make sure that the keyword `this` is used appropriately within your class and class prototype functions to refer to the object the function is called upon.

Your **README.md** file should be updated with instructions on both how to 1. Run and 2. Play your arcade game.

For detailed instructions on how to get started, check out this [guide](https://docs.google.com/document/d/1v01aScPjSWCCWQLIpFqvg3-vXLH2e8_SZQKC8jNO0Dc/pub?embedded=true).

## Contributing

This repository is the starter code for _all_ Udacity students. Therefore, we most likely will not accept pull requests.

## links to download the scratch Project from github repository
https://github.com/udacity/frontend-nanodegree-arcade-game
https://github.com/udacity/frontend-nanodegree-arcade-game.git


## I did the following steps to complete this Project
1.Downloaded the zip file in to my work station ,extracted the zip file and open the **index.html** page
2.initially i have created a  5 player characters so that we can choose the `player` character  before starting the game .later i have added the classlist for the players.
3.i have placed the player object in an `player` variable, in `app.js` in the same way i have done for `enemy`.
4.i have define  the starting position for the player where actual game will be started, later in the  `handleInput()` i have define the positions of each and every arrow key with respective to the `Player`. i have updated the player position with `prototype.Update` function,
5.later i have defined the enemy position in the canvas, later i have pushed all the enemies in an array `allEnemies`.
6.later i have provided the speed for bugs randomly with help of `math.random()`,next i have provided the positions values  for the player which contains the chances to hit the bug .  
7.if the player reached the destination with out hitting of bugs the game will be end with the `Congratulations popup` menu which is created by `sweetalert` popup contains on one button we clicked that button again will be reloaded.

## how to play a game
 select the player initially and use the **arrow keys** to move the player up ,right ,down ,left
