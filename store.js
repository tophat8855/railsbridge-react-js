var items = [];

var notifyComponents = function() {
  $(ListStore).trigger('storeHasChanged');
};

var findItemById = function(id) {
  return items.filter(function(item) {
    return item.id === id;
  })[0];
},

ListStore = {

  getItems: function() {
    return items;
  },

  loadItems: function() {
    var loadRequest = $.ajax({
      type: 'GET',
      url: "https://listalous.herokuapp.com/lists/tophat8855/"
    }).done(function(dataFromServer) {
      items = dataFromServer.items;
      notifyComponents();
    });
  },

  addItem: function(itemDescription) {
    var creationRequestion = $.ajax({
      type: 'POST',
      url: "http://listalous.herokuapp.com/lists/tophat8855/items",
      data: { description: itemDescription, completed: false}
    }).done(function(itemDataFromServer) {
      items.push(itemDataFromServer);
      notifyComponents();
    });
  },
  
  toggleCompleteness: function(itemId) {}
};
