/* ---------------------------------------

    Userlist
    Displays a list of users

----------------------------------------*/

    Template.userDirectory.helpers({
        userInCollection: function() {
            return Meteor.users.find();
        }
    });

        

