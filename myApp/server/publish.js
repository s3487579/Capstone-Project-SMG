Meteor.publish('allUsers',function(){
    return Meteor.users.find({}, {fields: {emails: 1}});    
});

Meteor.publish("stocks", function () {
  return Stocks.find();
});

Meteor.publish("chatrooms",function(){
  return ChatRooms.find({});
  
});

Meteor.publish("userslist",function(){
  return UserList.find({});
})

Meteor.publish('searchUsers',function(){
  return Meteor.users.find(foundUser.profile.profileName);
})
