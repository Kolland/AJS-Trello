angular.module('app').controller('boardsCtrl', function(boardFactory) {
  var self = this;
  self.boards = boardFactory.getBoards();

  // New board creating
  self.boardName = '';
  self.addBoard = function() {
    if (!self.boardName) {
      return;
    };
    boardFactory.addBoard(self.boardName);
    self.boardName = '';
  };

});
