import 'ol/ol.css';
import Circle from 'ol/geom/Circle';
import Feature from 'ol/Feature';
import GeoJSON from 'ol/format/GeoJSON';
import Map from 'ol/Map';
import View from 'ol/View';
import {Circle as CircleStyle, Fill, Stroke, Style} from 'ol/style';
import {OSM, Vector as VectorSource} from 'ol/source';
import {Tile as TileLayer, Vector as VectorLayer} from 'ol/layer';
import Projection from 'ol/proj/Projection';

var styles = {
  'Polygon': new Style({
    stroke: new Stroke({
      color: 'blue',
      lineDash: [5],
      width: 3,
    }),
    fill: new Fill({
      color: 'rgba(0, 0, 255, 0.1)',
    }),
  }),
};

var styleFunction = function (feature) {
  return styles[feature.getGeometry().getType()];
};

const data = require('/data/geojson.json')
var geojsonObject = data;

var vectorSource = new VectorSource({
    features: (new GeoJSON()).readFeatures(geojsonObject,
            {
            dataProjection: 'EPSG:4326',
            featureProjection: 'EPSG:3857'
            })
    });


var vectorLayer = new VectorLayer({
  source: vectorSource,
  style: styleFunction,
});

var map = new Map({
  layers: [
    new TileLayer({
      source: new OSM(),
    }),
    vectorLayer ],
  target: 'map',
  view: new View({
    center: [0, 0],
    zoom: 2,
  }),
});
