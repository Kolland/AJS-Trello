function CardDetailController($scope) {
  var self = this;

  self.save = function() {
    self.isEditing = false;
    if (!self.card.title) {
      self.card.title = 'No Card Title';
    }
    if (!self.card.id) {
      $scope.$emit('save', self.card);
    } else {
      $scope.$emit('update', self.card);
    }
    self.card = {};
  };

  self.close = function() {
    self.isEditing = false;
    self.card = {};
  };

  self.addComment = function() {
    if (self.newComment) {
      self.card.comments.push(self.newComment);
      self.newComment = null;
    }
  };

  self.addChecklistItem = function() {
    if (self.newChecklistItem) {
      self.card.checklist.push({
        label: self.newChecklistItem,
        status: false
      });
      self.newChecklistItem = null;
    }
  };

  self.addMember = function() {
    if (self.newMember) {
      self.card.members.push(self.newMember);
      self.newMember = null;
    }
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
