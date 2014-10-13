Template.layout.events({
    "click .usher": function(e) {
        e.preventDefault();

        console.log('Clicked');

        /* Fetch target from DOM */
        var target = $(e.target).data("target");

        $(this).toggleClass('active');
        $(target).toggleClass('active');
    }
});
