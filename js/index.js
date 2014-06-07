$(function () {

});
   

   google.load('visualization', '1', {'packages': ['geomap']});
   google.setOnLoadCallback(drawMap);

    function drawMap() {
        items = [
            {
                location: "Chua Cocani",
                projects: 12
            },
            {
                location: "Huatajata",
                projects: 233
            },
            {
                location: "Huarina ",
                projects: 111
            },
            {
                location: "Ckochas",
                projects: 1234
            },
            {
                location: "Shinahota",
                projects: 4
            },
            {
                location: "Santiago de Huata",
                projects: 34
            },
            {
                location: "Villa Charcas",
                projects: 2
            },
            {
                location: "Humanata",
                projects: 43
            },
            {
                location: "Escoma",
                projects: 3
            },
            {
                location: "Alto Beni",
                projects: 45
            },
            {
                location: "Cocapata",
                projects: 45
            },
            {
                location: "Chuquihuta Ayllu Jucumani",
                projects: 0
            },
            {
                location: "Santa Rosa del Sara",
                projects: 10
            },
            {
                location: "Lagunillas",
                projects: 1
            },
            {
                location: "Cabezas",
                projects: 1
            },
            {
                location: "Cuevo",
                projects: 1
            },
            {
                location: "Gutiérrez",
                projects: 1
            },
            {
                location: "Camiri",
                projects: 1
            },
            {
                location: "Boyuibe",
                projects: 1
            },
            {
                location: "Vallegrande",
                projects: 1
            },
            {
                location: "Trigal",
                projects: 1
            },
            {
                location: "Moro Moro",
                projects: 1
            },
            {
                location: "Pucara",
                projects: 1
            },
            {
                location: "Mairana",
                projects: 1
            },
            {
                location: "Comarapa",
                projects: 1
            },
            {
                location: "Saipina",
                projects: 1
            },
            {
                location: "San Ignacio",
                projects: 1
            },
            {
                location: "Loreto",
                projects: 1
            },
            {
                location: "San Andrés",
                projects: 1
            },
            {
                location: "San Joaquín",
                projects: 1
            },
            {
                location: "San Ramón",
                projects: 1
            },
            {
                location: "Puerto Síles",
                projects: 1
            },
            {
                location: "Magdalena",
                projects: 1
            },
            {
                location: "Baures",
                projects: 1
            },
            {
                location: "Huacaraje",
                projects: 1
            },
            {
                location: "Exaltación",
                projects: 1
            },
            {
                location: "Cobija",
                projects: 1
            },
            {
                location: "Bolpebra",
                projects: 1
            },
            {
                location: "Bella Flor",
                projects: 1
            },
            {
                location: "Puerto Rico",
                projects: 1
            },
            {
                location: "San Pedro",
                projects: 1
            },
            {
                location: "Puerto Gonzalo Moreno",
                projects: 1
            },
            {
                location: "San Lorenzo",
                projects: 1
            },
            {
                location: "Sena",
                projects: 1
            },
            {
                location: "Santa Rosa del Abuna",
                projects: 1
            },
            {
                location: "Villa Nueva",
                projects: 1
            },
            {
                location: "Santos Mercado",
                projects: 1
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