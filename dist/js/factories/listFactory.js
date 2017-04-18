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
          title: 'Title 1',
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
        },
        {
          id: 2,
          title: 'Title 2',
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
        },
        {
          id: 3,
          title: 'Title 3',
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
          title: 'Title 1',
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
        },
        {
          id: 5,
          title: 'Title 2',
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
        },
        {
          id: 6,
          title: 'Title 3',
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
          title: 'Title 1',
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
        },
        {
          id: 8,
          title: 'Title 2',
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
        },
        {
          id: 9,
          title: 'Title 3',
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

  service.createCard = function(list, card) {
    var index = _.findIndex(lists, { id: list.id });
    card.id = _.uniqueId('card_');
    lists[index].cards.push(card);
  };

  service.updateCard = function(card, listId) {
    var index = _.findIndex(lists, { id: listId });
    var cardIndex = _.findIndex(lists[index].cards, { id: card.id });
    lists[index].cards[cardIndex] = card;
  };

  service.deleteCard = function(card, listId) {
    var index = _.findIndex(lists, { id: listId });
    return _.pull(lists[index].cards, card);
  };

  return service;
});
