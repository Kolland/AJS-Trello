angular.module('app').controller('listsCtrl', function($scope, listFactory, $routeParams) {
  var self = this;
  var boardId = $routeParams.boardId;
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

  // card creating/editing
  self.isCardEditing = false;
  self.editingCard = {};
  self.createCard = function(list) {
    self.isCardEditing = true;
    self.editingCard = {
      title: '',
      description: '',
      comments: [],
      members: [],
      dueDate: '',
      time: {
        estimated: '',
        spent: '',
        remaining: ''
      },
      file: ''
    };
  };
  self.editingCard = null;
  self.editCard = function(card) {
    self.isEditing = true;
    self.editingCard = angular.copy(card);
    console.log(self.editingCard);
  };

  $scope.$on('save', function(event, data) {
    console.log(data); // 'Some data'
  });

});
