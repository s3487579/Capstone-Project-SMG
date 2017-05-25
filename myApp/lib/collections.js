
Stocks = new Mongo.Collection("stocks");
SelectedStock = new ReactiveVar(null);
ChatRooms = new Meteor.Collection("chatrooms");
UserList = new Meteor.Collection("userlist");

if(Meteor.isClient){
    Template.usersList.helpers({
        'showList': function(){
            return UserList.find();
        }
    });
}