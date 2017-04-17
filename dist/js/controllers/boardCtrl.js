angular.module('app').controller('boardCtrl', function(boardFactory, $routeParams) {

  var self = this;
  // route
  self.boardId = $routeParams.boardId;
  self.board = boardFactory.getBoard(self.boardId);

  // remove board
  self.removeBoard = function(board) {
    boardFactory.removeBoard(board);
  };

  // Editing board
  self.isEditing = false;

  self.edit = function(oldBoardName) {
    self.newBoardName = oldBoardName;
    self.isEditing = true;
  };
  self.endEdit = function(board) {
    self.isEditing = false;
    if (!self.newBoardName) {
      return;
    }
    boardFactory.editBoardName(self.newBoardName, board);
  };

});
