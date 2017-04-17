app.controller('listCtrl', function(listFactory) {
  var self = this;

  self.getCards = function(list) {
    return listFactory.getCards(list);
  };


});
