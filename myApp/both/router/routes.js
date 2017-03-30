FlowRouter.route('/',{
    action:function(){
        FlowLayout.render('layout', {sidebar: 'sidebar', home: 'home', cart: 'cart'})
    }
});

FlowRouter.route('/sharemarket',{
    action:function(){
        FlowLayout.render('layout', {sidebar: 'sidebar', home: 'sharemarket', cart: 'cart'})
    }
});

FlowRouter.route('/leaderboard',{
    action:function(){
        FlowLayout.render('layout', {sidebar: 'sidebar', home: 'leaderboard', cart: 'cart'})
    }
});

FlowRouter.route('/login',{
    action:function(){
        FlowLayout.render('layout', {sidebar: '', home: 'login', cart: ''})
    }
});
