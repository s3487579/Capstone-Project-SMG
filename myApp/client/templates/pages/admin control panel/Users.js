Meteor.subscribe("allUsers");

Template.playerManage.helpers({
    allUsers(){return Meteor.users.find({}); },
    email(){ return this.emails[0].address; },
    
})
