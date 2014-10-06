/* ---------------------------------------

    ACCOUNT PAGE

    010 EVENTS
    020 HELPERS

----------------------------------------*/

    /* 
     * 010 Events 
     */

    Template.account.events({
       'submit form': function(e) {
            e.preventDefault();

            /* Fill object with form data */
            var accountUpdates = {
                firstname: $(e.target).find('[name=firstname]').val(),
                bio: $(e.target).find('[name=bio]').val()
            };

            /* Call Serverside write method */
            Meteor.call('updateAccount', accountUpdates, function(error,id) {

                /* Error Handler */
                if(error) {
                    Errors.throw(error.reason);
                } else {
                    Errors.throw("Success");
                }
            }); 
        } 
    });
