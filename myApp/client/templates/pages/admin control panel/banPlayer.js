Template.playerManage.helpers ({
    'selectedUser': function (){
         var selectedUser = Session.get('selectedUser');
            return Meteor.users.findOne({ _id: selectedUser });
        }
})

Template.playerManage.events ({
    'click .user': function(){
        Session.set('selectedUser', userId);
    },
    
    'click .remove' : function(){
        var selectedId = Session.get('SelectedUser');
        Meteor.users.remove({ _id:this_id});
    }
})

if(Meteor.isServer){
    // this code only runs on the server
}


