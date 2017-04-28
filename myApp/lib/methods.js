  /**  Meteor.methods({
      addStock: function(symbol){
        if(!Meteor.userId()){
          throw new Meteor.Error("not-authorized");
        }
        symbol = symbol.toUpperCase();
    
        // Don't allow duplicates
        if(Stocks.findOne({symbol: symbol, owner: Meteor.userId()})){
          return;
        }
        
        Stocks.insert({
            symbol: symbol,
            owner: Meteor.userId()
        })

        if(Meteor.isServer){
          Meteor.call("getName", symbol, function(error, result){
            if(result !== "N/A"){
              Stocks.insert({
                symbol: symbol,
                name: result,
                owner: Meteor.userId()
              });
            }
          });
        }
      }
    });
    **/
    
    Meteor.methods({
  getQuote: function( stockname ) {
    return YahooFinance.snapshot({symbols: [stockname] });
  }
})