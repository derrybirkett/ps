/* ---------------------------------------

    USERS COLLECTION

    010 METHODS

----------------------------------------*/

Meteor.methods({

    'updateAccount': function(data) {
        
        /* Call Mongo Updates */
        var accountUpdate = Meteor.users.update(
            Meteor.userID, 
            {$set:{'profile':data}}
        );

        /* Return */
        return accountUpdate;
    }

});
