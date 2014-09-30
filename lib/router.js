/* 

ROUTING
-------

    C O N T E N T S
    ---------------
    010 Configuration
        0110 Layout Template
        0120 Loading Template
        0130 Subscriptions

    020 Mapping
        0210 Home

    030 Hooks
        0310 LoginRequired

*/


    /* ---------------------------------------------------

        010 CONFIG
            0110 Layout


    ----------------------------------------------------*/

    Router.configure({

        /* Set application layout template */
        layoutTemplate: "layout",
        loadingTemplate: "loading",
        waitOn: function() { return Meteor.subscribe( 'users' ); }
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
                path: '/',
                data: {
                    title: "Welcome to er, this website.",
                    description: "Cover is a one-page template for building simple and beautiful home pages. Download, edit the text, and add your own fullscreen background photo to make it your own.",
                    cta: "Get Started"
                }
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



/* ---------------------------------------------------

    030 HOOKS 
        0300 Functions
            03010 Login required
        0310 Hooks
           03110 onBeforeAction
                031110 Loading
                031120 RequireLogin

----------------------------------------------------*/

    /* 03010 Login Required */
    var requireLogin = function(pause) {
        if (! Meteor.user()) {
            /* Loggin In */
            if(Meteor.loggingIn())
                this.render(this.loadingTemplate);
            else 
                this.render('accessDenied'); 
            pause();
        }
    }

    /* 03110 OnBeforeAction */
    Router.onBeforeAction( 'loading' );
    Router.onBeforeAction( requireLogin, { only: 'account' } );
