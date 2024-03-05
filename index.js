// Put all onload AJAX calls here, and event listeners

jQuery(document).ready(function(){
	
    jQuery('.header').height(jQuery(window).height() -jQuery(navbar).height() );
    jQuery(window).on("resize", function() {
        jQuery("header").css({ height: $(window).height() });
        jQuery("body").css({ width: $(window).width() });
    });
});

/*
jQuery(document).ready(function() {
    // On page-load AJAX Example
    //need ajax call on page load to get files and populate table
    jQuery.ajax({
        type: 'get',            //Request type
        dataType: 'json',       //Data type - we will use JSON for almost everything 
        url: '/fillTable',   //The server endpoint we are connecting to
        data: {
            data1: "InitialFill"
        },
        success: function (data) {
            //  Do something with returned object
            //    Note that what we get is an object, not a string, 
            //    so we do not need to parse it on the server.
            //    JavaScript really does handle JSONs seamlessly
            
            //ex let table = document.getElementById("fileTable");
            
            //We write the object to the console to show that the request was successful
            console.log(data); 
        },
        fail: function(error) {
            // Non-200 return, do something with error
            $('#blah').html("On page load, received error from server");
            console.log(error); 
        }
    });

    // Event listener form example , we can use this instead explicitly listening for events
    // No redirects if possible
    $('#someform').submit(function(e){
        $('#blah').html("Form has data: "+$('#entryBox').val());
        e.preventDefault();
        //Pass data to the Ajax call, so it gets passed to the server
        $.ajax({
            //Create an object for connecting to another waypoint
        });
    });
});*/