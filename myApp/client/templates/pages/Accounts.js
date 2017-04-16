
AccountsTemplates.addFields([
    {
        _id: 'profession',
        type: 'select',
                _id: 'profileName',
                type: 'text',
                displayName: 'Display Name',
                required: true,
                re: /(?=.*[a-z])(?=.*[A-Z])/,
                errStr: 'please enter a name with 1 lower case and 1 upper case letters.',
            },{
                
                
                _id: 'amount',
                type: 'select',
                displayName: 'Account Type',
                select: [
                    {
                        text:'default account',
                        value:'100000'
                    }
                    ]
            }
    ]);
    
