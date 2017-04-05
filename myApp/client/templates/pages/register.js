/**
Template.register.events({
    "submit form": function(event){
        event.preventDefault();
        var username = event.target.username.value;
        var password = event.target.password.value;
        Accounts.createUser({
            username:username,
            password:password
        })
    }
});
**/