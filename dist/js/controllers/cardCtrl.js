app.controller('cardCtrl', function(listFactory) {
  var self = this;
  self.deleteCard = function(card, listId) {
    listFactory.deleteCard(card, listId);
  };
});
