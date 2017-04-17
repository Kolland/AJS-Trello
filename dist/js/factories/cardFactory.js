angular.module('app').factory('cardFactory', function() {
  var service = {};

  var cards = [
    {
      list_id: 1,

    },
    {
      list_id: 2,
      cards: [
        {
          id: 1,
          description: 'Lear ReactJS'
        },
        {
          id: 2,
          description: 'Lear Some shit'
        },
        {
          id: 3,
          description: 'Lear Some shit 2'
        }
      ]
    },
    {
      list_id: 3,
      cards: [
        {
          id: 1,
          description: 'Lear ReactJS'
        },
        {
          id: 2,
          description: 'Lear Some shit'
        },
        {
          id: 3,
          description: 'Lear Some shit 2'
        }
      ]
    }
  ];

  service.getCards = function(list) {
    var index = _.findIndex(cards, { list_id: list.id });
    if (index === -1) {
      return [];
    };
    return cards[index].cards;
  };

  service.createCardList = function(list) {

  };

  service.createCard = function(list, cardDescription) {
    var index = _.findIndex(cards, { list_id: list.id });
    if (cardDescription) {
      cards.push({
        id: _.uniqueId('card_'),
        description: cardDescription,
        list_id: list.id
      });
    }

  };

  service.deleteCard = function(card) {
    return _.pull(cards, card);
  };

  service.updateCard = function(updatingCard) {
    var card = _.findWhere(cards, {id: updatingCard.id});
    card.description = updatingCard.description;
    card.list_id = updatingCard.list_id;
  };

  return service;
});
