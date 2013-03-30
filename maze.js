var maze = function(sizeX, sizeY) {
  maze._directions = [{x: 0, y: -1}, {x: 1, y: 0}, {x: 0, y: 1}, {x: -1, y: 0}];
  maze._links = {};
  maze._path = [];
  maze._size = {
    x: sizeX,
    y: sizeY
  };
  maze._visited = {};

  // create maze with startpoint
  maze._create({
    x: maze._random(1, maze._size.x),
    y: maze._random(1, maze._size.y)
  });

  return maze;
};


maze._create = function(room) {
  var nextRoom;

  // add room to visited rooms and to the path
  maze._visited[room.x + ',' + room.y] = true;

  // get next random room
  nextRoom = maze._getDirection(room);

  if (nextRoom === false) {
    if (Object.keys(maze._visited).length < maze._size.x * maze._size.y) {
      // ok, we are stucked, but don't visited all rooms
      maze._create(maze._path.pop());
    }
  } else {
    maze._path.push(room);
    maze._create(nextRoom);
  }
};


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


maze._random = function(min, max) {
  return min + parseInt(Math.random() * (max - min + 1));
};

module.exports = maze;