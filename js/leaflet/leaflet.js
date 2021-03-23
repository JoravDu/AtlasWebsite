var Stamen_Toner = L.tileLayer('https://stamen-tiles-{s}.a.ssl.fastly.net/toner/{z}/{x}/{y}{r}.{ext}', {
    minZoom: 0,
    maxZoom: 20,
    ext: 'png'
}),
    mapboxSatellite = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {   //Hier hoef je geen VAR voor te zetten, 
    maxZoom: 18,                                                                                                        //JavaScript snapt dat dit twee verschillende variabelen zijn
    id: 'mapbox/satellite-v9',
    accessToken: 'pk.eyJ1Ijoiam9yYW52ZHVpbiIsImEiOiJjam53d2k5a3EwZzdhM3FucTByaDRrMzQwIn0.sCAmQZysagzU2t82TJiRkw' //<--- Vul hier svp eigen Mapbox Token toe :)
});

var map = L.map('leaflet-kaart', {              //<--- Hier declareer je de kaart en het DIV-ID(HTML) waar de kaart naar moet refereren
    center: [52.3420431, 5.2019296],    //<--- Hier geef je het centrum van de kaart aan
    zoom: 7,                            //<--- Hier geef je het zoomniveau aan van je kaart (waar je begint)
    layers: [Stamen_Toner]              //<--- Hier declareer je de basemap (welke leaflet als eerste moet laten zien) <--- Verander eens naar mapboxSatellite
});

// map.touchZoom.disable(); // <--- Dit schakelt het zoomen met vingers uit op de kaart
// map.scrollWheelZoom.disable(); // <--- Dit schakelt het zoomen met je scrollwheel in

var baseMaps = {                    // Hier declareer je groep voor je basemaps. Er kunnen er meerdere staam
    "Wereldkaart": Stamen_Toner,    // Dit is de eerste basemap 
    "Mapbox": mapboxSatellite       // Dit is de tweede basemap
};

// Layers <-- Hier voeg je lagen toe aan Leaflet
var kaartlaag = {
    "type": "FeatureCollection",
    "features": [
        {
            "type": "Feature",
            "properties": {},
            "geometry": {
                "type": "Polygon",
                "coordinates": [
                    [
                        [
                            4.85321044921875,
                            52.44261787120725
                        ],
                        [
                            4.7406005859375,
                            52.3688917060255
                        ],
                        [
                            5.01251220703125,
                            52.38565847278254
                        ],
                        [
                            4.91363525390625,
                            52.22611704066942
                        ],
                        [
                            5.33111572265625,
                            52.18403686498285
                        ],
                        [
                            5.2734375,
                            52.45600939264076
                        ],
                        [
                            4.85321044921875,
                            52.44261787120725
                        ]
                    ]
                ]
            }
        }
    ]
}

var kaart = L.geoJson(kaartlaag, {
    style: function (feature) {        // Hier geef je aan wat de functie, de feature, voor uiterlijk moet krijgen
        return {                       // Hier geef je aan wat er teruggegeven moet worden door de javascript 
            fillColor: '#43429C',
            weight: 0.5,
            fillOpacity: 0.5
        }
    }
}).addTo(map);

var energieKaart = L.tileLayer.wms('http://localhost:8080/geoserver/energieNL/wms', {
    layers: 'zonurenNL',
    transparent: true,
    format: 'image/png'
}).addTo(map);


var energiePlaatsen = L.tileLayer.wms('http://localhost:8080/geoserver/energieNL/wms', {
    layers: 'Plaatsen',
    transparent: true,
    format: 'image/png'
}).addTo(map);


var toggleLaag = {
    "GeoJSON": kaart,
    "Plaatsen WMS": energiePlaatsen,
    "Kaart WMS": energieKaart
}

L.control.layers(baseMaps, toggleLaag).addTo(map);  
    // ^^^ Dit regelt de controls op je kaart, hier voor je (als je meerdere basemaps hebt) de basemaps toe
    // maar als je er één hebt hoeft dat niet. Als je meerdere lagen weer wilt geven
    // voeg je hier de toggleLaag toe.

    