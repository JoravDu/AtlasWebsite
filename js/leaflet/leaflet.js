var CartoDB_DarkMatter = L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
    maxZoom: 19
}),
    mapboxSatellite = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
        maxZoom: 18,
        id: 'mapbox/satellite-v9',
        accessToken: 'pk.eyJ1Ijoiam9yYW52ZHVpbiIsImEiOiJjam53d2k5a3EwZzdhM3FucTByaDRrMzQwIn0.sCAmQZysagzU2t82TJiRkw'
    });

var map = L.map('leaflet-kaart', {
    center: [52.7420431, 5.2019296],
    zoom: 7,
    layers: [CartoDB_DarkMatter]
});

// map.touchZoom.disable(); 
// map.scrollWheelZoom.disable(); 

var baseMaps = {
    "Wereldkaart": CartoDB_DarkMatter,
    "Mapbox": mapboxSatellite
};

// Layers <-- Hier voeg je lagen toe aan Leaflet

var windIcon = {
    radius: 4,
    fillColor: "#cb0000",
    weight: 1,
    opacity: 1,
    fillOpacity: 1
}

var windmolens = L.geoJson(molens, {
    pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, windIcon);
    }
}).addTo(map);

// var kaart = {
//     "type": "FeatureCollection",
//     "features": [
//         {
//             "type": "Feature",
//             "properties": {},
//             "geometry": {
//                 "type": "Polygon",
//                 "coordinates": [
//                     [
//                         [
//                             4.85321044921875,
//                             52.44261787120725
//                         ],
//                         [
//                             4.7406005859375,
//                             52.3688917060255
//                         ],
//                         [
//                             5.01251220703125,
//                             52.38565847278254
//                         ],
//                         [
//                             4.91363525390625,
//                             52.22611704066942
//                         ],
//                         [
//                             5.33111572265625,
//                             52.18403686498285
//                         ],
//                         [
//                             5.2734375,
//                             52.45600939264076
//                         ],
//                         [
//                             4.85321044921875,
//                             52.44261787120725
//                         ]
//                     ]
//                 ]
//             }
//         }
//     ]
// }

// var kaartlaag = L.geoJson(kaart, {
//     style: function (feature) {
//         return {
//             fillColor: '#43429C',
//             weight: 0.5,
//             fillOpacity: 0.5
//         }
//     }
// }).addTo(map);

var toggleLaag = {
    "Windmolens": windmolens
}

L.control.layers(baseMaps, toggleLaag).addTo(map);

