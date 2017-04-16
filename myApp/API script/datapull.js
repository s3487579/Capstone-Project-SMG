    var apiCall = function (apiUrl, callback) 
    {
    
      
      try 
      {
        var response = HTTP.get(apiUrl).data;
        callback(null, response);
      }
      catch (error)
      {
        if (error.response)
        {
          var errorCode = error.response.data.code;
          var errorMessage = error.response.data.message;
        
        } else
        {
          var errorCode = 500;
          var errorMessage = 'Cannot access the API';
        }
        
        var myError = new Meteor.Error(errorCode, errorMessage);
        callback(myError, null);
      }
    }
    
    Meteor.methods({
      'geoJsonForIp': function (ip) {
        this.unblock();
        var apiUrl = 'http://finance.yahoo.com/d/quotes.csv' + ip;
        var response = Meteor.wrapAsync(apiCall)(apiUrl);
        return response;
      }
    });
