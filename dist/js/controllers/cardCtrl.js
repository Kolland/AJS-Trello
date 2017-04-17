app.controller('cardCtrl', function(listFactory) {
  var self = this;
  self.deleteCard = function(card, listId) {
    listFactory.deleteCard(card, listId);
  };

  self.updateCard = function(card) {
    listFactory.updateCard(self.editingCard);
    self.editingCard = null;
    self.isEditing = false;
  };
});
