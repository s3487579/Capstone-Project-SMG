Meteor.methods({
  getName: function(symbol){
    var data = YahooFinance.snapshot({
      symbols: [symbol],
      fields: ['n', 'v', 'w4', 'l1']
    });
    console.log(data[0], data[1], data[2], data[3], data[4]);
    console.log(data[0], data[1], data[2], data[3], data[4] === undefined);
    return data[0];
  },
  removePlayer: function(_id){
    Meteor.users.remove(_id);
  },
});
/**List the average price of shares in possession and current number of shares held**/