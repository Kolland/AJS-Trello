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
          title: 'Lear ReactJS'
        },
        {
          id: 2,
          title: 'Lear Some shit'
        },
        {
          id: 3,
          title: 'Lear Some shit 2'
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
          title: 'Lear ReactJS'
        },
        {
          id: 5,
          title: 'Lear Some shit'
        },
        {
          id: 6,
          title: 'Lear Some shit 2'
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
          title: 'Lear ReactJS'
        },
        {
          id: 8,
          title: 'Lear Some shit'
        },
        {
          id: 9,
          title: 'Lear Some shit 2'
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
    console.log(list);
    console.log(card);
  };

  service.deleteCard = function(card, listId) {
    var index = _.findIndex(lists, { id: listId });
    return _.pull(lists[index].cards, card);
  };

  return service;
});
