function CardDetailController($scope) {
  var self = this;

  self.save = function() {
    self.isEditing = false;
    console.log(self.isEditing);
    $scope.$emit('save', self.card);
    self.card = {};
  };

  self.addComment = function() {
    if (self.newComment) {
      self.card.comments.push(self.newComment);
      self.newComment = null;
    };
  };
}

app.component('cardDetail', {
  templateUrl: 'js/components/cardDetail/cardDetail.html',
  controller: CardDetailController,
  bindings: {
    card: '=',
    isEditing: '='
  }
});
