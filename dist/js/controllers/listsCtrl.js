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
  self.cardList = {};
  self.cardListId = '';
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
      checklist: [],
      file: ''
    };
    self.cardList = list;
  };
  self.editingCard = null;
  self.editCard = function(card, listId) {
    self.isCardEditing = true;
    self.cardListId = listId;
    self.editingCard = angular.copy(card);
  };

  $scope.$on('save', function(event, data) {
    listFactory.createCard(self.cardList, self.editingCard);
    self.editingCard = {};
    self.cardList = {};
  });
  $scope.$on('update', function(event, data) {
    listFactory.updateCard(self.editingCard, self.cardListId);
    self.editingCard = {};
    self.cardListId = '';
  });



});
