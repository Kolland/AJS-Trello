angular.module('app').controller('listsCtrl', function($scope, listFactory, $routeParams, $filter) {
  var self = this;
  var boardId = $routeParams.boardId;

  // Time duration convert
  var durationFilter = $filter('duration');

  function durationConvert(duration) {
    if (typeof duration === 'number') {
      return duration;
    }
    var d = new Duration(duration);
    return d._milliseconds;
  }

  // Drag End CallBack
  self.dragEndCallback = function() {
    $scope.$broadcast('timeUpdate');
  };

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
    self.editingCard.time.estimated = durationFilter(self.editingCard.time.estimated, "mm'm'hh'h'dd'd'");
    self.editingCard.time.spent = durationFilter(self.editingCard.time.spent, "mm'm'hh'h'dd'd'");
  };

  $scope.$on('save', function(event, data) {
    self.editingCard.time.estimated = durationConvert(self.editingCard.time.estimated);
    self.editingCard.time.spent = durationConvert(self.editingCard.time.spent);
    self.editingCard.time.remaining = self.editingCard.time.estimated - self.editingCard.time.spent;
    listFactory.createCard(self.cardList, self.editingCard);
    self.editingCard = {};
    self.cardList = {};
    // Update sum time
    $scope.$broadcast('timeUpdate');
  });
  $scope.$on('update', function(event, data) {
    self.editingCard.time.estimated = durationConvert(self.editingCard.time.estimated);
    self.editingCard.time.spent = durationConvert(self.editingCard.time.spent);
    self.editingCard.time.remaining = self.editingCard.time.estimated - self.editingCard.time.spent;
    listFactory.updateCard(self.editingCard, self.cardListId);
    self.editingCard = {};
    self.cardListId = '';
    // Update sum time
    $scope.$broadcast('timeUpdate');
  });



});
