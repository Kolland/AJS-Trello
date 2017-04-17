app.factory('boardFactory', function() {
  var service = {};

  var boards = [
    {
      id: '1',
      boardName: 'Home'
    },
    {
      id: '2',
      boardName: 'Work'
    }
  ];

  service.getBoards = function() {
    return boards;
  };

  service.getBoard = function(boardId) {
    return _.find(boards, {id: boardId});
  };

  service.addBoard = function(boardName) {
    boards.push({
      id: _.uniqueId('board_'),
      boardName: boardName
    });
  };

  service.editBoardName = function(boardName, board) {
    var index = _.indexOf(boards, board);
    boards[index].boardName = boardName;
  };

  service.removeBoard = function(board) {
    _.pull(boards, board);
  };

  return service;
});
