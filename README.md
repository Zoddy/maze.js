maze.js
=======

JavaScript library to create perfect mazes. Perfect maze means, that there's only one way (if you ever go forward) from the start to the end point.

It's compatible with nodejs and browser.


## Usage

After importing the library in browser or nodejs, just use

`maze(80, 60)` to create a maze with 80 cells on 60 rows. This function returns the links (or open doors) between the cells/rooms, and the start and end point of the longest path (but feel free to set your start and end point whereever you want). So you can use what you want to show the maze as you like. Feel free to make the maze as big, as you want.


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


## License

(The MIT License)

Copyright (c) 2009-2012 André Kussmann <zoddy@zoddy.de>

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