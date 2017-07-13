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
  var solution = []; //fixme
  //solution = grabbing soluton of countNRooksSolutions[n]
  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  var solutionCount = 0; //fixme
  //create a board based on given n value
  var myBoard = new Board({n: n});

  var traverseRow = function(row) {
    //base case
    //completed entire row traversal
    if (row === n) {
      solutionCount++;
      return;
    }
    //iterate through the rows
    for (var i = 0; i < n; i++) {
      //togglePiece on column
      myBoard.togglePiece(row, i);
      //if the row has no conflicts on column and row
        //traverseRow next row until count reaches limit of matrix (n)
      if (!myBoard.hasAnyRooksConflicts()) {
        traverseRow(row + 1);
      }
      //untoggle the piece on the column
      myBoard.togglePiece(row, i);
    }
  };

  traverseRow(0);
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
