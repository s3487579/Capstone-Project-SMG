Template.contact.events({
    'submit #contactUs' : function () {
        event.preventDefault();
        
        var Email = event.target.email.value;
        var ProfileName = event.target.username.value;
        var Message = event.target.msgBox.value;
        
        ContactMails.insert({
            Email: Email,
            ProfileName: ProfileName,
            Message: Message
        });
        
    }
});