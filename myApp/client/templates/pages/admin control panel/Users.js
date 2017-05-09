Meteor.subscribe("allUsers");

Template.playerManage.helpers({
    allUsers(){return Meteor.users.find({_id: { $ne: Meteor.userId()}}); },
    email(){ return this.emails[0].address; },
    
})


Template.leaderboard.helpers({
    allUsers(){return Meteor.users.find({}, {
        sort: { amount: -1}
    }); },
    email(){ return this.emails[0].address; }
})

Template.profile.helpers({
    allUsers(){return Meteor.users.find({_id: { $ne: Meteor.userId()}}); },
    
})

