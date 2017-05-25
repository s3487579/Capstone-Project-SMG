
Template.sharemarket.helpers({
  stocks: function () {
    return Stocks.find({owner: Meteor.userId()}, {sort: ["symbol", "asc"]});
  },
  //ultilizing the autocomplete package and shows a list of suggestions
 settings: function (){
   return {
     position: "top",
      limit: 5,
      rules: [
        {
          token: '',
          collection: Stocks,
          field: "symbol",
          template: Template.userPill
        },
        ]
   }
 },

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
