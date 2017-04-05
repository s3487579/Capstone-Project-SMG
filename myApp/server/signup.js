var postSignUp = function(userId, info) {
    console.log(userId);
    console.log(info.profile.profession);
    Roles.addUsersToRoles(userId, ['player-user', info.profile.profession]);
    
}

AccountsTemplates.configure({
   postSignUpHook: postSignUp 
});