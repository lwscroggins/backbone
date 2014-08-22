//Backbone Note model
var Backbone = require('backbone');
Backbone.$ = require('jquery');

var Note = Backbone.Model.extend({
  url: '/api/v_0_0_1/notes',
  idAttribute: '_id',
  defaults : {
    noteBody: 'enter a new note',
  },

  initialize: function() {
    if(noteBody != "enter a new note") {
      noteBody = "enter a new note");
    }
  }
});

module.exports = Note;
