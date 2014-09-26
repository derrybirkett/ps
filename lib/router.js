/* 

ROUTING
-------

    C O N T E N T S
    ---------------
    010 Configuration
        0110 Layout

    020 Mapping
        0210 Home


*/


    /* ---------------------------------------------------

        010 CONFIG
            0110 Layout


    ----------------------------------------------------*/

    Router.configure({

        /* Set application layout template */
        layoutTemplate: "layout"

    });



    /* ---------------------------------------------------

        020 MAPS
            0210 Home
            0220 Directory
            0230 User Profile


    ----------------------------------------------------*/

    Router.map(function() {
        
            /* HOME */
            this.route('home', {
                path: '/'
            });

            /* Directory */
            this.route('directory', {
                path: 'directory'
            });

            /* Profile */
            this.route('profile', {
                path: '/profile/:_id',
                data: function() { return Meteor.users.findOne(this.params._id); }
            });

            /* Account */
            this.route('account', {
                path: '/account',
                data: function() {
                    return Meteor.users.findOne(Meteor.userId());
                }
            });

    });
