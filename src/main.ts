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

let layer = [
  new TileLayer({
    title: "Geobasis GB",
    opacity: 0.3,
    source: new TileWMS({
      url: 'https://geodienste.hamburg.de/HH_WMS_Geobasiskarten_GB?',
      params: {
        'LAYERS': 'M100000_graublau,M60000_graublau,M20000_graublau,M5000_graublau,M125000_graublau,M40000_graublau,M10000_graublau,M2500_graublau',
        'TILED': true
      },
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
      params: {
        'LAYERS': 'vermessungskarten_1879_89',
        'TILED': true
      },
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
      params: {
        'LAYERS': 'vermessungskarten_1890_99',
        'TILED': true
      },
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
      params: {
        'LAYERS': 'vermessungskarten_1900_10',
        'TILED': true
      },
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
      params: {
        'LAYERS': 'vermessungskarten_1910_15',
        'TILED': true
      },
      serverType: 'geoserver',
      // Countries have transparency, so do not fade tiles:
      transition: 0
    })
  }),

  new TileLayer({
    title: "1916-1925",
    visible: false,
    source: new TileWMS({
      url: 'https://geodienste.hamburg.de/HH_WMS_Vermessungskarten_1880_1925?',
      params: {
        'LAYERS': 'vermessungskarten_1816_25',
        'TILED': true
      },
      serverType: 'geoserver',
      // Countries have transparency, so do not fade tiles:
      transition: 0
    })
  }),

  new TileLayer({
    title: "1925-1930",
    visible: false,
    source: new TileWMS({
      url: 'https://geodienste.hamburg.de/HH_WMS_Historische_Karte_1_5000?',
      params: {
        'LAYERS': 'Jahrgang_1925-1930',
        'TILED': true
      },
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
      params: {
        'LAYERS': 'Jahrgang_1930-1940',
        'TILED': true
      },
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
      params: {
        'LAYERS': 'Jahrgang_1940-1950',
        'TILED': true
      },
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
      params: {
        'LAYERS': 'Jahrgang_1950-1960',
        'TILED': true
      },
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
      params: {
        'LAYERS': 'Jahrgang_1960-1970',
        'TILED': true
      },
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
      params: {
        'LAYERS': 'Jahrgang_1970-1980',
        'TILED': true
      },
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
      params: {
        'LAYERS': 'Jahrgang_1980-1990',
        'TILED': true
      },
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
      params: {
        'LAYERS': 'Jahrgang_1990-2000',
        'TILED': true
      },
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
      params: {
        'LAYERS': 'Jahrgang_2005',
        'TILED': true
      },
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
      params: {
        'LAYERS': 'Jahrgang_2010',
        'TILED': true
      },
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
      params: {
        'LAYERS': 'Jahrgang_2015',
        'TILED': true
      },
      serverType: 'geoserver',
      // Countries have transparency, so do not fade tiles:
      transition: 0
    })
  }),
  new TileLayer({
    title: "2020",
    visible: false,
    source: new TileWMS({
      url: 'https://geodienste.hamburg.de/HH_WMS_Historische_Karte_1_5000',
      params: {
        'LAYERS': 'Jahrgang_2020',
        'TILED': true
      },
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
      params: {
        'LAYERS': 'DK5',
        'TILED': true
      },
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