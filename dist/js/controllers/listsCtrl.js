angular.module('app').controller('listsCtrl', function(listFactory, $routeParams) {
  var self = this;
  var boardId = $routeParams.boardId;
  self.isEditing = false;
  self.editingCard = '0';
  self.lists = listFactory.getLists(boardId);

  self.addList = function() {
    listFactory.addList(self.listName, boardId);
    self.listName = null;
    self.lists = listFactory.getLists(boardId);
  };

  self.removeList = function(list) {
    listFactory.removeList(list);
    self.lists = listFactory.getLists(boardId);
  };

  self.editCard = function(card) {
    self.isEditing = true;
    // self.editingCard = angular.copy(card);
    self.editingCard = '2';
    console.log(self.editingCard);
  };

});
