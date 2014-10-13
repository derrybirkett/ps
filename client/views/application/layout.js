template.layout.events({
    "click .usher": function(e) {
        e.preventDefault;
    
        /* Fetch target from DOM */
        var target = $(this).data("target");

        $(this).toggleClass('active');
        $(target).toggleClass('active');
    }
});
