Meteor.publish('allUsers',function(){
    return Meteor.users.find({}, {fields: {emails: 1}});    
});