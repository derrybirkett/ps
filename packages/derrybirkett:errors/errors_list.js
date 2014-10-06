Template.meteorError.helpers({
    errors:function() {
        return Errors.collection.find();
    }
});

