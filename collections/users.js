/* ---------------------------------------

    USERS COLLECTION

    000 PERMISSIONS
    010 METHODS

----------------------------------------*/

    Users.allow({
        update:ownsDocument,
        remove:ownsDocument        
    });


    /* ---------------------------------------------------

        METHODS


    ----------------------------------------------------*/
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
