// Put all onload AJAX calls here, and event listeners

$(document).ready(function(){
	
  $('.header').height($(window).height());
  $(window).on("resize", function() {
    $("header").css({ height: $(window).height() });
    $("body").css({ width: $(window).width() });
  });
  
    /**
     * Intro type effect
    */
    const typed = select('.typed')
    if (typed) {
      let typed_strings = typed.getAttribute('data-typed-items')
      typed_strings = typed_strings.split(',')
      new Typed('.typed', {
        strings: typed_strings,
        loop: true,
        typeSpeed: 100,
        backSpeed: 50,
        backDelay: 2000
      });
    }

    /**
     * Preloader
     */
    let preloader = select('#preloader');
    if (preloader) {
      window.addEventListener('load', () => {
        preloader.remove()
      });
    }
})

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