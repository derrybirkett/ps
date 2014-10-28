Template.layout.events({
    "click .usher": function(e) {
        e.preventDefault();

        console.log('Clicked');

        $('#LeftPanel').toggleClass('active');
    }
});
