/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting


// return a matrix (an array of arrays) representing a single nxn chessboard, with n rooks placed such that none of them can attack each other



window.findNRooksSolution = function(n) {
  var solution = 0; //fixme

  //store all possible solutions in an array
  //create a board based on given n value
  //push board solution into solutions
  var myBoard = new Board({n: n});

  //edge cases
  //if n === 1 return solutionCount = 1
  //if n === 2 return solutionCount = 2;
  //if n === 3 return solutionCount = 5;
  if (n === 1) { solution = 1; }
  if (n === 2) { solution = 2; }
  if (n === 3) { solution = 5; }

  //rookPiece = 1

  //myBoard.rows(); // show 4x4 board
  //[[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]]

  //recursive function => accepts a row value
  //iterate through the items in the row
    //if the current row does not have any conflicts
    //if(!this.hasAnyRooksConflicts) {
      //push rookPiece into that row.
    //}
  var traverseRow = function(row) {
    if (n === row) {
      solution++;
    }
  };

  traverseRow(0);

  //iterate through the rows
    //for each row, iterate through each item of that row
      //if the current row does not have a rookPiece && the column doesnt have a rookPiece
        //push rookPiece into that current position in row
      //if current row does have rookPiece && column doesnt have rookPiece
        //push rookPiece into that current position in row
      //if current row and column both have rookPiece
        //skip to next row
  //call recursive function
  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  var solutionCount = undefined; //fixme
  //solution = grabbing soluton of countNRooksSolutions[0]
  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};

// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var solution = undefined; //fixme

  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solutionCount = undefined; //fixme

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
