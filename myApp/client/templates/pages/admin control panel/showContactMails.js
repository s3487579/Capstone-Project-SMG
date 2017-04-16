Template.adminMail.helpers({
    mailList: function () {
        return ContactMails.find();
    }
})