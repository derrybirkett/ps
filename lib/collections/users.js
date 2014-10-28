/* ---------------------------------------

    USERS COLLECTION

    000 PERMISSIONS
    010 METHODS

----------------------------------------*/

    Meteor.users.allow({
    });


    /* ---------------------------------------------------

        METHODS


    ----------------------------------------------------*/
    Meteor.methods({

        updateAccount: function(data) {

            /* Call Mongo Updates */
            var accountUpdate = Meteor.users.update(
                { _id: Meteor.userId() },
                { $set: { 'account':data } }
            )

            /* Return */
            return accountUpdate;
        }
    });
