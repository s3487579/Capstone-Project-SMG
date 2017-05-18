Meteor.startup(function(){
  Meteor.typeahead.inject();
})
Template.sharemarket.helpers({
  stocks: function () {
    return Stocks.find({owner: Meteor.userId()}, {sort: ["symbol", "asc"]});
  },
});

Template.sharemarket.onRendered(function(){
  Meteor.typeahead.inject();
});

Template.sharemarket.events({
  "submit .add-stock": function(event) {
    event.preventDefault();

    var input = event.target.symbol;
    console.log("Input = " + input.value);
    Meteor.call("addStock", input.value);
    input.value = "";
  }
});
