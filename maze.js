/**
 * base function for creating a maze
 *
 * @param {number} sizeX count of rooms on the x axis
 * @param {number} sizeY count of rooms on the y axis
 */
var maze = function(sizeX, sizeY) {
  maze._directions = [{x: 0, y: -1}, {x: 1, y: 0}, {x: 0, y: 1}, {x: -1, y: 0}];
  maze._links = {};
  maze._path = [];
  maze._size = {
    x: sizeX,
    y: sizeY
  };
  maze._visitCount = 0;
  maze._visited = {};

  // create maze with startpoint
  maze._create({
    x: maze._random(1, maze._size.x),
    y: maze._random(1, maze._size.y)
  });

  return maze._links;
};


/**
 * this really creates the maze, room for room
 *
 * @param {object} room next room to visit and search, with x- and y-coords
 */
maze._create = function(room) {
  var nextRoom;

  // add room to visited rooms and to the path
  if (maze._visited[room.x + ',' + room.y] === undefined) {
    maze._visited[room.x + ',' + room.y] = true;
    ++maze._visitCount;
  }

  // get next random room
  nextRoom = maze._getDirection(room);

  if (nextRoom === false) {
    if (maze._visitCount < maze._size.x * maze._size.y) {
      // ok, we are stucked, but don't visited all rooms
      maze._create(maze._path.pop());
    }
  } else {
    maze._path.push(room); // add room to path
    maze._links[room.x + ',' + room.y + '_' + nextRoom.x + ',' + nextRoom.y] = [
      room,
      nextRoom
    ];
    maze._create(nextRoom); // go to next room
  }
};


/**
 * choose the next room to go
 *
 * @param {object} room current room to search, with x- and y-coords
 * @return {object|boolean} returns the next room or false, if we are stucked
 */
maze._getDirection = function(room) {
  var directions = [],
      direction,
      nextRoom;

  // can we add north?
  if (room.y !== 1 && !maze._visited[room.x + ',' + (room.y - 1)]) {
    directions.push(1);
  }

  // can we add east?
  if (room.x !== maze._size.x && !maze._visited[(room.x + 1) + ',' + room.y]) {
    directions.push(2);
  }

  // can we add south?
  if (room.y !== maze._size.y && !maze._visited[room.x + ',' + (room.y + 1)]) {
    directions.push(3);
  }

  // can we add west?
  if (room.x !== 1 && !maze._visited[(room.x - 1) + ',' + room.y]) {
    directions.push(4);
  }

  if (directions.length === 0) {
    nextRoom = false;
  } else {
    direction = directions[maze._random(0, directions.length - 1)] - 1;
    nextRoom = {
      x: room.x + maze._directions[direction].x,
      y: room.y + maze._directions[direction].y
    };
  }

  return nextRoom;
};


/**
 * generates a random number between two numbers
 *
 * @param {number} min minimum number
 * @param {number} max maximum number
 */
maze._random = function(min, max) {
  return min + parseInt(Math.random() * (max - min + 1));
};

module.exports = maze;
