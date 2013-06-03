var maze = require('./maze');

var x = parseInt(process.argv[2] || 20, 10), // get length from cli
    y = parseInt(process.argv[3] || 10, 10), // get height from cli
    links = maze(x, y), // create maze
    i, j, k; // just for iterating


for (i = 1; i <= y; ++i) {
  for (j = 1; j <= x; ++j) {
      if ((i === 1 && j === 1) || (i === y && j === x)) {
        process.stdout.write('X'); // add entry or exit room
      } else {
        process.stdout.write('o'); // add normal room
      }

      if (
        links[j + ',' + i + '_' + (j + 1) + ',' + i] ||
        links[(j + 1) + ',' + i + '_' + j + ',' + i]
      ) {
        process.stdout.write('---'); // add way on x axis
      } else {
        process.stdout.write('   '); // no way on x axis
      }
  }

  process.stdout.write('\n');

  for (k = 1; k <= x; ++k) {
    if (i < y) {
      if (
        links[k + ',' + i + '_' + k + ',' + (i + 1)] ||
        links[k + ',' + (i + 1) + '_' + k + ',' + i]
      ) {
        process.stdout.write('|'); // add way on y axis
      } else {
        process.stdout.write(' '); // no way on y axis
      }

      process.stdout.write('   '); // placeholder between ways
    }
  }

  process.stdout.write('\n');
}
