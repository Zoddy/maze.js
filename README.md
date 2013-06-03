maze.js
=======

JavaScript library to create perfect mazes. Perfect maze means, that there's only one way (if you ever go forward) from the start to the end point.

It's compatible with nodejs (maze.js) and browser (maze.min.js).


## Usage

After importing the library in browser or nodejs, just use

`maze(80, 60)` to create a maze with 80 cells on 60 rows. This function returns the links (or open doors) between the cells/rooms. So you can use what you want to show the maze as you like. Feel free to make the maze as big, as you want.


## Example Usage

You can use the cli-tool to look, what maze.js can do for you.

`$ node cli.js 25 15` can output these:

* **o** - a room
* **---** - link between rooms on the x-axis
* **|** - link between rooms on the y axis
* **X** - start or end point


```
X---o---o   o---o---o---o   o---o---o   o---o---o   o---o---o---o---o---o---o---o---o---o---o---o---o---o---o---o   o
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
o---o---o   o   o---o---o---o---o   o---o---o---o---o---o---o---o   o---o---o---o---o   o---o---o---o---o   o---o   X
```

## Upcoming Features

- tests (!)
- recursion detection
- random start and end points
- informations how long the way between start and end is
- get start and end point with the longest route
- analyzes (recursion, heatmaps, etc.)
- showroom for the browser


## License

(The MIT License)

Copyright (c) 2013 André Kussmann <zoddy@zoddy.de>

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
'Software'), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.