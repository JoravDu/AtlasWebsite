import 'ol/ol.css';
import GeoJSON from 'ol/format/GeoJSON';
import Map from 'ol/Map';
import View from 'ol/View';
import { Circle as CircleStyle, Fill, Stroke, Style } from 'ol/style';
import { OSM, Vector as VectorSource } from 'ol/source';
import { Tile as TileLayer, Vector as VectorLayer } from 'ol/layer';
import TileWMS from 'ol/source/TileWMS';
import {Control, defaults as defaultControls} from 'ol/control';

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

var layers = [
  new TileLayer({
    source: new OSM(),
  }),
  new TileLayer({
    extent: [307150.05, 6550960.68, 829007.57, 7141345.42],
    source: new TileWMS({
      url: 'http://localhost:8080/geoserver/energieNL/wms',
      params: {'LAYERS': 'energieNL:zonurenNL', 'TILED': true},
      serverType: 'geoserver',
      transition: 0,
      visible: true
    }),
  }),
  new TileLayer({
    extent: [307150.05, 6550960.68, 829007.57, 7141345.42],
    source: new TileWMS({
      url: 'http://localhost:8080/geoserver/energieNL/wms',
      params: {'LAYERS': 'energieNL:Plaatsen', 'TILED': true},
      serverType: 'geoserver',
      transition: 0,
      visible: true
    }),
  }),
  vectorLayer = new VectorLayer({
    source: vectorSource,
    style: styleFunction,
  }),
];

var map = new Map({
  layers: layers, 
  target: 'olmap',
  view: new View({
    center: [579076.15, 6862209.10],
    zoom: 8,
  }),
});

// map.addControl(new ol.control.LayerSwitcher());