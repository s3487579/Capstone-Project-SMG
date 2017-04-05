var users = Meteor.users.find().fetch();
    _.each(users,function(userData){
        if(userData.emails[0].address === 'admin@gmail.com'){
            Roles.addUsersToRoles(userData,['admin']);
        }
    })
  
    
  