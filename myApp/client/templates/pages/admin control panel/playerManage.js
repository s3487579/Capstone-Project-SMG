if(Meteor.isClient){
    Template.playerManage.helpers({
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

Template.playerManage.events({
   "click .remove": function() {
   var selectedUser = Session.get('selectedUser');
   Meteor.users.remove({ _id: selectedUser});
   },
    'click .user': function(){
        var uId = this._id;
        Session.set('selectedUser', uId);
    }
});


}

