 /** Template.telize.helpers({
    location: function () {
      return Session.get('location');
    }
  });
  Template.telize.events({
    'click button': function (evt, tpl) {
      var ip = tpl.find('input#ipv4').value;
      Meteor.call('geoJsonForIp', ip, function (err, res) {
        // The method call sets the Session variable to the callback value
        if (err) { 
          Session.set('location', {error: err});
        } else {
          Session.set('location', res);
          return res;
        }
      });
    }
  });
  
  **/