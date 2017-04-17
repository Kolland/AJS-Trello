app.controller('listCtrl', function(listFactory) {
  var self = this;

  self.getCards = function(list) {
    return listFactory.getCards(list);
  };

  self.createCard = function(list) {
    listFactory.createCard(list, self.cardDescription);
    self.cardDescription = null;
  };
});
