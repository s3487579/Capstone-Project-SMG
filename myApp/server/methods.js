Meteor.methods({
  getName: function(symbol){
    var data = YahooFinance.snapshot({
      symbols: [symbol],
      fields: ['n']
    });
    console.log(data[0]);
    console.log(data[0] === undefined);
    return data[0].name;
  }
});
