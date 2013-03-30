maze.js
=======

JavaScript library to create perfect mazes. Perfect maze means, that there's only one way (if you ever go forward) from the start to the end point.

It's compatible with nodejs and browser.

## Usage

After importing the library in browser or nodejs, just use

`maze(80, 60)` to create a maze with 80 cells on 60 rows. This function returns the links (or open doors) between the cells/rooms, and the start and end point of the longest path. So you can use what you want to show the maze as you like. Feel free to make the maze as big, as you want.

## Example Usage

You can use [maze.js Showroom](http://zoddy.github.com/maze.js) to look, what maze.js can do for you.

There is also a file to show using on a CLI.

`$ node output.js 25 15` can output these:

* **o** - a room
* **---** - link between rooms on the x-axis
* **|** - link between rooms on the y axis
* **X** - start or end point


```
o---o---o   o---o---o---o   o---o---o   o---o---o   o---o---o---o---o---o---o---o---o---o---o---o---o---o---o---o   o
|           |           |   |       |           |   |   |                                                       |   |
o   o---o---o   o---o   o   o   o---o   o---o   o---o   o---o---o---o---o---o   o   o---o   o---o---o---o   o---o   o
|   |           |   |   |   |       |   |   |   |               |           |   |   |   |   |           |   |       |
o---o   o---o---o   o   o   o---o   o---o   o   o---o   o---o   o   o---o   o   o---o   o   o---o   o---o   o---o---o
|       |           |   |   |   |           |   |       |   |   |   |       |           |       |   |               |
o---o   o---o   o---o   o   o   o   o---o   o   o   o---o   o   o   o---o   o---o---o   o---o---o   o---o---o---o   o
    |       |   |       |   |   |   |   |   |       |       |   |       |           |       |                   |   |
o   o   o---o   o   o   o   o   o   o   o   o---o---o   o   o   o   o---o   o---o   o---o   o---o   o---o---o   o---o
|   |   |       |   |   |       |   |   |               |   |   |   |   |   |   |       |       |           |
o---o   o   o---o---o   o---o   o---o   o---o   o---o---o   o   o   o   o---o   o   o---o   o   o---o---o---o   o---o
|       |                   |   |           |   |           |   |   |   |           |       |               |   |   |
o   o---o---o---o   o---o   o   o---o---o   o   o---o---o---o   o---o   o   o---o---o   o---o---o---o   o   o---o   o
|   |           |   |   |   |           |   |   |                           |                   |   |   |           |
o   o   o---o   o   o   o---o   o   o---o   o   o---o---o   o---o---o---o   o---o---o---o---o   o   o---o---o---o   o
|   |       |   |   |           |   |       |           |   |           |                   |   |       |           |
o   o---o   o   o   o   o---o---o---o   o   o   o---o---o   o---o   o   o---o   o---o---o   o   o   o---o   o---o---o
|       |   |   |   |       |           |   |   |               |   |       |   |       |   |   |           |
o---o   o---o   o   o---o   o---o---o   o   o   o---o---o---o---o   o---o   o---o   o   o---o   o---o   o---o   o---o
    |           |       |           |   |   |                       |   |           |               |   |       |   |
o   o---o---o   o---o   o---o   o   o   o   o   o---o---o---o---o   o   o---o---o   o---o---o---o---o   o   o---o   o
|           |   |   |       |   |   |   |   |   |               |       |           |   |               |   |   |
o---o---o   o   o   o---o   o   o---o   o   o---o   o   o---o   o---o   o---o---o---o   o   o---o---o---o   o   o---o
|           |   |       |       |       |           |   |   |       |                   |   |                       |
o   o---o---o   o---o   o   o---o---o---o---o---o---o   o   o---o   o   o---o---o---o   o---o---o   o---o---o---o---o
|   |                   |   |                           |       |   |   |           |           |       |           |
o   o   o---o---o---o   o   o---o   o---o---o---o---o   o---o   o   o---o---o---o   o---o   o---o---o---o   o   o---o
|   |   |   |       |   |   |       |               |       |   |                       |                   |   |
o---o   o   o   o---o   o---o   o---o   o---o---o   o---o---o   o---o---o---o   o---o---o   o---o---o   o---o   o   o
|           |   |               |       |                                   |   |           |       |   |       |   |
o   o---o---o   o---o---o---o---o   o   o---o   o---o---o---o---o---o---o   o   o---o---o---o   o---o   o---o---o---o
|   |   |                           |   |   |   |                       |   |                   |                   |
o   o   o   o---o---o---o   o---o---o   o   o---o   o---o---o   o---o---o   o---o---o---o---o   o---o---o---o---o   o
|   |   |   |   |           |       |   |               |   |   |                           |   |               |   |
o   o   o   o   o---o   o---o   o   o---o   o---o   o---o   o   o---o---o---o   o---o---o---o   o---o---o---o   o   o
|   |   |   |       |   |       |           |   |   |       |               |   |                               |   |
o   o   o   o   o---o   o   o---o---o---o---o   o---o   o   o   o---o---o   o---o   o---o---o---o---o   o---o   o   o
|       |   |   |       |       |                       |   |   |       |           |               |   |   |   |   |
o---o---o   o   o---o---o---o---o   o---o---o---o---o---o---o---o   o---o---o---o---o   o---o---o---o---o   o---o   o
```