import 'ol/ol.css';
import { Map, View } from 'ol';
import TileLayer from 'ol/layer/Tile';
import TileWMS from 'ol/source/TileWMS.js';
import { fromLonLat } from 'ol/proj.js';
import TileSource from 'ol/source/Tile';
import { layerUrls } from './layer'

let layer: TileLayer<TileSource>[] = [];
layerUrls.forEach((values) => {
  layer.push(new TileLayer({
    opacity: values.opacity ?? 1,
    visible: values.visible ?? false,
    source: new TileWMS({
      url: values.url,
      params: {
        'LAYERS': values.layer,
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

let schieber = <HTMLInputElement>document.getElementById("karte");
schieber.max = (layerUrls.length - 1).toFixed();

schieber.addEventListener("change", function (e) {
  layer.forEach(function (ele) {
    ele.setVisible(false);
  });
  layer[0].setVisible(true);
  layer[schieber.value].setVisible(true);
  document.getElementById("ueberschrift").innerHTML = layerUrls[schieber.value].name;
});