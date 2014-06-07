$(function () {

});
   

   google.load('visualization', '1', {'packages': ['geomap']});
   google.setOnLoadCallback(drawMap);

    function drawMap() {
        items = [
            {
                location: "murillo",
                projects: 11
            },
            {
                location: "yungas",
                projects: 233
            },
            {
                location: "otros",
                projects: 111
            }
        ];
        arrayData = [];
        
        arrayData.push([
            'localidad',
            "Nro Proyectos"
        ]);
        for (var i = 0; i < items.length; i++) {
            
            arrayData.push([
                items[i].location,
                items[i].projects
            ]);
        }

        var data = google.visualization.arrayToDataTable(arrayData);

        var options = {
            width: document.body.clientHeight, 
            height: 600,
            region: 'BO',
            colors: [0x44d341, 0x0fff600, 0xe54747],
            dataMode: 'markers'
        };

        var container = document.getElementById('map_canvas');
        var geomap = new google.visualization.GeoMap(container);
        geomap.draw(data, options);
    };    

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