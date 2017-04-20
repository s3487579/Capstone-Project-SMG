Meteor.publish('allUsers',function(){
    return Meteor.users.find({}, {fields: {emails: 1}});    
});

Meteor.publish("stocks", function () {
  return Stocks.find();
});