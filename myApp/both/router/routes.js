FlowRouter.route('/',{
    action:function(){
        if(Roles.userIsInRole(Meteor.userId(), 'player-user')){
        BlazeLayout.render('layout', {sidebar: 'sidebar', home: 'home', cart: ''})
    }else{
        BlazeLayout.render('layout', {sidebar: '', home: 'home', cart: ''})
        }
    }
});

FlowRouter.route('/sharemarket',{
    action:function(){
        BlazeLayout.render('layout', {sidebar: 'sidebar', home: 'sharemarket', cart: 'cart'})
    }
});

FlowRouter.route('/leaderboard',{
    action:function(){
        BlazeLayout.render('layout', {sidebar: 'sidebar', home: 'leaderboard', cart: 'cart'})
    }
});

FlowRouter.route('/login',{
    action:function(){
       BlazeLayout.render('layout', {sidebar: '', home: 'login', cart: ''})
    }
});

FlowRouter.route('/logout',{
   action:function(){
       Meteor.logout(function(err){
           if(!err){
               FlowRouter.go('/login');
           }
       })
   }
});


FlowRouter.route('/profile',{
    action:function(){
        BlazeLayout.render('layout', {sidebar: 'sidebar', home: 'profile', cart: ''})
    }
});

FlowRouter.route('/contact',{
    action:function(){
        BlazeLayout.render('layout', {sidebar: '', home: 'contact', cart: ''})
    }
});

FlowRouter.route('/adminMain',{
    action:function(){
        if(Roles.userIsInRole(Meteor.userId(), 'admin')){
        BlazeLayout.render('layout', {sidebar: 'adminSidebar', home: 'adminMain', cart: ''})
    }else{
        BlazeLayout.render('layout', {sidebar: '', home: 'unauthorized', cart: ''})
        }
    }
});

FlowRouter.route('/playerManage',{
    action:function(){
        BlazeLayout.render('layout', {sidebar: 'adminSidebar', home: 'playerManage', cart: ''})
    }
});

FlowRouter.route('/adminMail',{
    action:function(){
        BlazeLayout.render('layout', {sidebar: 'adminSidebar', home: 'adminMail', cart: ''})
    }
});

