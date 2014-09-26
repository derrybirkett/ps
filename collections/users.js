/* ---------------------------------------

    USERS COLLECTION

    010 METHODS

----------------------------------------*/

Meteor.methods({

    updateAccount: function(data) {
        
        /* Call Mongo Updates */
        var accountUpdate = Meteor.users.update(
            { _id: Meteor.userId() }, 
            { $set: { 'profile':data } }
        )

        /* Return */
        return accountUpdate;
    }
});
