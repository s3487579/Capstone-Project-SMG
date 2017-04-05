/**Template.register.events({
    "submit form":function(event){
        event.preventDefault();
        var username = event.target.username.value;
        var passowrd = event.target.password.value;
        Meteor.loginWithPassword(username,password);
        FlowRouter.go('/');
    }
});
**/