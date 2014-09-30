/* 

Error Helper
v0.1

Pulled from DiscoverMeteor Book

*/

/* Collection */
Errors = new Meteor.Collection(null);

/* Functions  */
throwError = function(message) {
    Errors.insert({message: message});
}
