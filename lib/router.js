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


    ----------------------------------------------------*/

    Router.map(function() {
        
            /* HOME & User Directory */
            this.route('home', {path: '/'});
            this.route('userDirectory', {
                path: 'directory'
            });

    });
