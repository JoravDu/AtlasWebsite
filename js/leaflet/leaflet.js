var Stamen_Toner = L.tileLayer('https://stamen-tiles-{s}.a.ssl.fastly.net/toner/{z}/{x}/{y}{r}.{ext}', {
    minZoom: 0,
    maxZoom: 20,
    ext: 'png'
}),
    mapboxSatellite = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {   
        maxZoom: 18,                                                                                                        
        id: 'mapbox/satellite-v9',
        accessToken: 'pk.eyJ1Ijoiam9yYW52ZHVpbiIsImEiOiJjam53d2k5a3EwZzdhM3FucTByaDRrMzQwIn0.sCAmQZysagzU2t82TJiRkw' 
    });

var map = L.map('leaflet-kaart', {      
    center: [52.3420431, 5.2019296],    
    zoom: 7,                            
    layers: [Stamen_Toner]              
});

// map.touchZoom.disable(); 
// map.scrollWheelZoom.disable(); 

var baseMaps = {                    
    "Wereldkaart": Stamen_Toner,    
    "Mapbox": mapboxSatellite       
};

// Layers <-- Hier voeg je lagen toe aan Leaflet
var iconWind = {
    iconURL: 'js/leaflet/molen.png',
    iconSize: [12, 30],
    iconAnchor: [0,0]
}

var windmolens = L.geoJson(molens, {
    style: function (feature) {        
        return L.marker({                       
            icon: iconWind
        })
    }
}).addTo(map);

var kaart = {
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

var toggleLaag = {
    "Windmolens": windmolens
}

L.control.layers(baseMaps, toggleLaag).addTo(map);

var iconWind = {
    iconURL: 'js/leaflet/molen.png',
    iconSize: [30, 60],
    iconAnchor: [0,0]
}