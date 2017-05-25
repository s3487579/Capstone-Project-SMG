
Meteor.methods({
  addStock: function(symbol){
    if(!Meteor.userId()){
      throw new Meteor.Error("not-authorized");
    }
    symbol = symbol.toUpperCase();

    // Don't allow duplicates
    if(Stocks.findOne({symbol: symbol, owner: Meteor.userId()})){
      return;
    }

    if(Meteor.isServer){
      Meteor.call("getName", symbol, function(error, result){
        console.log("Result = " + result);
        if(result !== null){
          Stocks.insert({
            symbol: symbol,
            name: result,
            ask: result,
            owner: Meteor.userId()
          });
        }
      });
    }
   
  },
  removeStock: function(stockId){
    Stocks.remove(stockId);
  },
  setFavourite: function(stockId, favourite){
    Stocks.update(stockId, {$set: {favourite: favourite}});
  },
  getData: function(symbol){
    var end = new Date();
    var start = new Date(end);
    start.setDate(start.getDate() - 365);
  
    return YahooFinance.historical({
      symbol: symbol,
      from: start,
      to: end
    });
  },
  
   searchUsers:function(inputName){
      var foundUser = Meteor.users.findOne({'profile.profileName': inputName});
      console.log(foundUser.profile.profileName);
      UserList.insert({name: foundUser.profile.profileName});
    },
});
  



 

