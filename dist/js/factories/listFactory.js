app.factory('listFactory', function() {
  var service = {};

  var lists = [
    {
      id: 1,
      boardId: '1',
      listName: 'ToDo',
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
      id: 2,
      boardId: '2',
      listName: 'Doing',
      cards: [
        {
          id: 4,
          description: 'Lear ReactJS'
        },
        {
          id: 5,
          description: 'Lear Some shit'
        },
        {
          id: 6,
          description: 'Lear Some shit 2'
        }
      ]
    },
    {
      id: 3,
      boardId: '1',
      listName: 'Done',
      cards: [
        {
          id: 7,
          description: 'Lear ReactJS'
        },
        {
          id: 8,
          description: 'Lear Some shit'
        },
        {
          id: 9,
          description: 'Lear Some shit 2'
        }
      ]
    }
  ];

  // lists
  service.getLists = function(boardId) {
    return _.filter(lists, {boardId: boardId});
  };

  service.addList = function(listName, boardId) {
    lists.push({
      id: _.uniqueId('list_'),
      boardId: boardId,
      listName: listName,
      cards: []
    });
  };

  service.removeList = function(list) {
    _.pull(lists, list);
  };

  // cards
  service.getCards = function(list) {
    var index = _.findIndex(lists, { id: list.id });
    return lists[index].cards;
  };

  service.createCard = function(list, cardDescription) {
    var index = _.findIndex(lists, { id: list.id });
    if (cardDescription) {
      lists[index].cards.push({
        id: _.uniqueId('card_'),
        description: cardDescription
      });
    }
  };

  service.deleteCard = function(card, listId) {
    var index = _.findIndex(lists, { id: listId });
    return _.pull(lists[index].cards, card);
  };

  return service;
});
