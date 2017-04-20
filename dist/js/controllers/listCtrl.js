app.controller('listCtrl', function($scope, listFactory) {
  var self = this;
  self.list = {};
  self.setList = function(list) {
    self.list = list;
  };
  // Cards Time Sum
  self.estimatedSum = 0;
  self.spentSum = 0;
  self.remainingSum = 0;

  $scope.$on('timeUpdate', function(event, data) {
    self.estimatedSum = self.getTimeSum('estimated', self.list);
    self.spentSum = self.getTimeSum('spent', self.list);
    self.remainingSum = self.getTimeSum('remaining', self.list);
  });

  self.getTimeSum = function(timeType, list) {
    var sum = 0;
    for (var i = 0; i < list.cards.length; i++) {
      sum += list.cards[i].time[timeType];
    }
    console.log(sum);
    return sum;
  };

  self.getCards = function(list) {
    return listFactory.getCards(list);
  };


});
