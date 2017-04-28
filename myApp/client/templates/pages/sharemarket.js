Template.body.helpers({
  stocks: function () {
    return Stocks.find({owner: Meteor.userId()}, {sort: ["symbol", "asc"]});
  }
});

Template.body.events({
  "submit .add-stock": function(event) {
    event.preventDefault();

    var input = event.target.symbol;
    Meteor.call("addStock", input.value);
    input.value = "";
  }
});

