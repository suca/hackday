/*
$("#mainId").on( "vclick", function() {
  $( ".ui-content" ).append( "<span style='color:#108040;'> vclick fired... </span>" );
});
$("#timeLineId").on( "vclick", function() {
  $( ".ui-content" ).append( "<span style='color:#108040;'> vclick fired... </span>" );
});
$("#reviewId").on( "vclick", function() {
  $( ".ui-content" ).append( "<span style='color:#108040;'> vclick fired... </span>" );
});
$("#registerId").on( "vclick", function() {
  $( ".ui-content" ).append( "<span style='color:#108040;'> vclick fired... </span>" );
});
$("#contactId").on( "vclick", function() {
    $( ".ui-content" ).append( "<span style='color:#108040;'> vclick fired... </span>" );
});
*/



$( document ).on( "pageinit", "[data-role='page'].demo-page", function() {
    var page = "#" + $( this ).attr( "id" ),
        // Get the filename of the next page that we stored in the data-next attribute
        next = $( this ).jqmData( "next" ),
        // Get the filename of the previous page that we stored in the data-prev attribute
        prev = $( this ).jqmData( "prev" );
    // Check if we did set the data-next attribute
    if ( next ) {
        // Prefetch the next page
        $.mobile.loadPage( next + ".html" );
        // Navigate to next page on swipe left
        $( document ).on( "swipeleft", page, function() {
            $.mobile.changePage( next + ".html", { transition: "slide" });
        });
        // Navigate to next page when the "next" button is clicked
        $( ".control .next", page ).on( "click", function() {
            $.mobile.changePage( next + ".html", { transition: "slide" } );
        });
    }
    // Disable the "next" button if there is no next page
    else {
        $( ".control .next", page ).addClass( "ui-disabled" );
    }
    // The same for the previous page (we set data-dom-cache="true" so there is no need to prefetch)
    if ( prev ) {
        $( document ).on( "swiperight", page, function() {
            $.mobile.changePage( prev + ".html", { transition: "slide", reverse: true } );
        });
        $( ".control .prev", page ).on( "click", function() {
            $.mobile.changePage( prev + ".html", { transition: "slide", reverse: true } );
        });
    }
    else {
        $( ".control .prev", page ).addClass( "ui-disabled" );
    }
});


















/******* PhoneGap *******/
var phoneGap = {
    // application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'phoneGap.receivedEvent(...);'
    onDeviceReady: function() {
        phoneGap.receivedEvent();
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        //My Callback
    }
};
phoneGap.initialize();

/******* EndPhoneGap ********/