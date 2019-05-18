import 'ol/ol.css';
import {Map, View} from 'ol';
import TileLayer from 'ol/layer/Tile';
import TileWMS from 'ol/source/TileWMS.js';
import { fromLonLat } from 'ol/proj.js';

let layer = [
new TileLayer({
        title: "Geobasis GB",
        opacity: 0.3,
          source: new TileWMS({
            url: 'https://geodienste.hamburg.de/HH_WMS_Kombi_DISK_GB?',
            params: {'LAYERS': '6,10,18,26,2,14,22,30', 'TILED': true},
            serverType: 'geoserver',
            // Countries have transparency, so do not fade tiles:
            transition: 0
          })
        }),
new TileLayer({
        title: "1880-1889",
        visible: false,
          source: new TileWMS({
            url: 'https://geodienste.hamburg.de/HH_WMS_Vermessungskarten_1880_1925?',
            params: {'LAYERS': '4', 'TILED': true},
            serverType: 'geoserver',
            // Countries have transparency, so do not fade tiles:
            transition: 0
          })
        }),
new TileLayer({
        title: "1890-1899",
        visible: false,
          source: new TileWMS({
            url: 'https://geodienste.hamburg.de/HH_WMS_Vermessungskarten_1880_1925?',
            params: {'LAYERS': '3', 'TILED': true},
            serverType: 'geoserver',
            // Countries have transparency, so do not fade tiles:
            transition: 0
          })
        }),

                new TileLayer({
        title: "1900-1910",
        visible: false,
          source: new TileWMS({
            url: 'https://geodienste.hamburg.de/HH_WMS_Vermessungskarten_1880_1925?',
            params: {'LAYERS': '2', 'TILED': true},
            serverType: 'geoserver',
            // Countries have transparency, so do not fade tiles:
            transition: 0
          })
        }),
        
    new TileLayer({
        title: "1910-1915",
        visible: false,
          source: new TileWMS({
            url: 'https://geodienste.hamburg.de/HH_WMS_Vermessungskarten_1880_1925?',
            params: {'LAYERS': '1', 'TILED': true},
            serverType: 'geoserver',
            // Countries have transparency, so do not fade tiles:
            transition: 0
          })
        }),


    new TileLayer({
        title: "1925-1930",
        visible: false,
          source: new TileWMS({
            url: 'https://geodienste.hamburg.de/HH_WMS_Historische_Karte_1_5000',
            params: {'LAYERS': '2', 'TILED': true},
            serverType: 'geoserver',
            // Countries have transparency, so do not fade tiles:
            transition: 0
          })
        }),
    new TileLayer({
        title: "1930-1940",
        visible: false,
          source: new TileWMS({
            url: 'https://geodienste.hamburg.de/HH_WMS_Historische_Karte_1_5000',
            params: {'LAYERS': '8', 'TILED': true},
            serverType: 'geoserver',
            // Countries have transparency, so do not fade tiles:
            transition: 0
          })
        }),
        new TileLayer({
        title: "1940-1950",
        visible: false,
          source: new TileWMS({
            url: 'https://geodienste.hamburg.de/HH_WMS_Historische_Karte_1_5000',
            params: {'LAYERS': '14', 'TILED': true},
            serverType: 'geoserver',
            // Countries have transparency, so do not fade tiles:
            transition: 0
          })
        }),
        new TileLayer({
        title: "1950-1960",
        visible: false,
          source: new TileWMS({
            url: 'https://geodienste.hamburg.de/HH_WMS_Historische_Karte_1_5000',
            params: {'LAYERS': '20', 'TILED': true},
            serverType: 'geoserver',
            // Countries have transparency, so do not fade tiles:
            transition: 0
          })
        }),
        new TileLayer({
        title: "1960-1970",
        visible: false,
          source: new TileWMS({
            url: 'https://geodienste.hamburg.de/HH_WMS_Historische_Karte_1_5000',
            params: {'LAYERS': '26', 'TILED': true},
            serverType: 'geoserver',
            // Countries have transparency, so do not fade tiles:
            transition: 0
          })
        }),
        new TileLayer({
        title: "1970-1980",
        visible: false,
          source: new TileWMS({
            url: 'https://geodienste.hamburg.de/HH_WMS_Historische_Karte_1_5000',
            params: {'LAYERS': '32', 'TILED': true},
            serverType: 'geoserver',
            // Countries have transparency, so do not fade tiles:
            transition: 0
          })
        }),
        new TileLayer({
        title: "1980-1990",
        visible: false,
          source: new TileWMS({
            url: 'https://geodienste.hamburg.de/HH_WMS_Historische_Karte_1_5000',
            params: {'LAYERS': '38', 'TILED': true},
            serverType: 'geoserver',
            // Countries have transparency, so do not fade tiles:
            transition: 0
          })
        }),
         new TileLayer({
        title: "1990-2000",
        visible: false,
          source: new TileWMS({
            url: 'https://geodienste.hamburg.de/HH_WMS_Historische_Karte_1_5000',
            params: {'LAYERS': '44', 'TILED': true},
            serverType: 'geoserver',
            // Countries have transparency, so do not fade tiles:
            transition: 0
          })
        }),
        new TileLayer({
        title: "2005",
        visible: false,
          source: new TileWMS({
            url: 'https://geodienste.hamburg.de/HH_WMS_Historische_Karte_1_5000',
            params: {'LAYERS': '50', 'TILED': true},
            serverType: 'geoserver',
            // Countries have transparency, so do not fade tiles:
            transition: 0
          })
        }),
        new TileLayer({
        title: "2010",
        visible: false,
          source: new TileWMS({
            url: 'https://geodienste.hamburg.de/HH_WMS_Historische_Karte_1_5000',
            params: {'LAYERS': '56', 'TILED': true},
            serverType: 'geoserver',
            // Countries have transparency, so do not fade tiles:
            transition: 0
          })
        }),
        new TileLayer({
        title: "2015",
        visible: false,
          source: new TileWMS({
            url: 'https://geodienste.hamburg.de/HH_WMS_Historische_Karte_1_5000',
            params: {'LAYERS': '62', 'TILED': true},
            serverType: 'geoserver',
            // Countries have transparency, so do not fade tiles:
            transition: 0
          })
        }),
        new TileLayer({
        title: "aktuell",
        visible: true,
          source: new TileWMS({
            url: 'https://geodienste.hamburg.de/HH_WMS_DK5',
            params: {'LAYERS': '1', 'TILED': true},
            serverType: 'geoserver',
            // Countries have transparency, so do not fade tiles:
            transition: 0
          })
        }),
  ];

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
    layer[e.target.value].setVisible(true);
    document.getElementById("ueberschrift").innerHTML = layer[e.target.value].get("title");
});
