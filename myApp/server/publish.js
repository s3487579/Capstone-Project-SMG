Meteor.publish('allUsers',function(){
    return Meteor.users.find({}, {fields: {emails: 1}});    
});

Meteor.publish("stocks", function () {
  return Stocks.find();
});

Meteor.publish("chatrooms",function(){
  return ChatRooms.find({});
  
});

Meteor.publish("usersList",function(){
  return UsersList.find({});
})