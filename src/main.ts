import 'ol/ol.css';
import {
  Map,
  View
} from 'ol';
import TileLayer from 'ol/layer/Tile';
import TileWMS from 'ol/source/TileWMS.js';
import {
  fromLonLat
} from 'ol/proj.js';
import TileSource from 'ol/source/Tile';
import layerUrlsJson from './layer.json'

let layerUrls: { name: string, opacity?: number, url: string, layer: string, visible?: boolean }[] = layerUrlsJson;

let layer:TileLayer<TileSource>[] = [];
layerUrls.forEach((values) => {
  layer.push(new TileLayer({
    opacity: values.opacity??1,
    visible: values.visible??false,
    source: new TileWMS({
      url: values.url,
      params: {
        'LAYERS': values.url,
        'TILED': true
      }
    })
  }))
})

const map = new Map({
  target: 'map',
  layers: layer,
  view: new View({
    center: fromLonLat([10.0045, 53.4975]),
    zoom: 14
  })
});

document.getElementById("karte").addEventListener("change", function (e) {
  layer.forEach(function (ele) {
    ele.setVisible(false);
  });
  layer[0].setVisible(true);
  let id = (<HTMLInputElement>document.getElementById("karte")).value
  layer[id].setVisible(true);
  document.getElementById("ueberschrift").innerHTML = layerUrls[id].get("name");
});