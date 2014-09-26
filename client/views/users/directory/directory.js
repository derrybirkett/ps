/* ---------------------------------------

    Userlist
    Displays a list of users

----------------------------------------*/

    Template.directory.helpers({
        user: function() {
            return Meteor.users.find();
        }
    });

        

