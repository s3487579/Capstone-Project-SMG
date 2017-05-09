if(Meteor.isClient){
Template.profile.onRendered(function() {
    Meteor.typeahead.inject();
});

Template.profile.helpers({
   findUsers: function () {
       return Meteor.users.find().fetch.map(function(user) {
           return user.username;
       });
   } 
});

Template.profile.events({
    //adding other users on their profile screens.
    'click [data-action=request]':function(){
        this.requestFriendship();   
    },
    
    'click [data-action=cancel]':function(){
        this.cancelFriendshipRequest();
    },
    //recieving requests from other users.
    'click [data-action=accept]':function(){
        this.accept();  
    },
    
    'click [data-action=deny]':function(){
        this.deny();
    }
});

}
