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