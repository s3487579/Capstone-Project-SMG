

Template.profile.helpers({
   findUsers: function () {
       return Meteor.users.find().fetch.map(function(user) {
           return user.username;
       });
   },
   
    'selectedClass': function(){
            var uId = this._id;
            var selectedUser = Session.get('selectedUser');
            if(uId == selectedUser){
                return "selected";
            }
        },
         
         'selectedUser': function(){
            var selectedUser = Session.get('selectedUser');
            return Meteor.users.findOne({ _id: selectedUser });
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
    },
    
     'click .person': function(){
        Session.set('currentId', this._id);
        var result = ChatRooms.findOne({chatIds:{$all:[this._id, Meteor.userId()]}})
        if (result)
        {
            Session.set("roomid", result._id);
        }
        else
        {
            var newRoom = ChatRooms.insert({chatIds:[this._id, Meteor.userId()], messages:[]});
            Session.set('roomid', newRoom);
        }
    },
    
});

Template.messages.helpers ({
   'msgs':function(){
        var res=ChatRooms.findOne({_id:Session.get('roomid')});
        if(res){
          return res.messages;
        }
    }
});

Template.input.events = {
  'keydown input#message' : function (event) {
    if (event.which == 13) { 
        if (Meteor.user())
        {
              var Pname = Meteor.user().profile.profileName;
              var message = document.getElementById('message');
    
              if (message.value !== '') {
                var de=ChatRooms.update({"_id":Session.get("roomid")},{$push:{messages:{
                 Pname: Pname,
                 text: message.value,
                 createdAt: Date.now()
                }}});
                document.getElementById('message').value = '';
                message.value = '';
              }
        }
        else
        {
           alert("login to chat");
        }
       
    }
  }
}