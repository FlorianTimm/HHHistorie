export const layerUrls: { name: string, opacity?: number, url: string, layer: string, visible?: boolean }[] = [
    {
        name: 'Geobasis GB',
        opacity: 0.3,
        visible: true,
        url: 'https://geodienste.hamburg.de/HH_WMS_Geobasiskarten_GB?',
        layer: 'M100000_graublau,M60000_graublau,M20000_graublau,M5000_graublau,M125000_graublau,M40000_graublau,M10000_graublau,M2500_graublau'
    },
    {
        name: '1880-1889',
        url: 'https://geodienste.hamburg.de/HH_WMS_Vermessungskarten_1880_1925?',
        layer: 'vermessungskarten_1879_89'
    },
    {
        name: '1890-1899',
        url: 'https://geodienste.hamburg.de/HH_WMS_Vermessungskarten_1880_1925?',
        layer: 'vermessungskarten_1890_99'
    },
    {
        name: '1900-1910',
        url: 'https://geodienste.hamburg.de/HH_WMS_Vermessungskarten_1880_1925?',
        layer: 'vermessungskarten_1900_10'
    },
    {
        name: '1910-1915',
        url: 'https://geodienste.hamburg.de/HH_WMS_Vermessungskarten_1880_1925?',
        layer: 'vermessungskarten_1910_15'
    },
    {
        name: '1916-1925',
        url: 'https://geodienste.hamburg.de/HH_WMS_Vermessungskarten_1880_1925?',
        layer: 'vermessungskarten_1816_25'
    },
    {
        name: '1925-1930',
        url: 'https://geodienste.hamburg.de/HH_WMS_Historische_Karte_1_5000?',
        layer: 'Jahrgang_1925-1930'
    },
    {
        name: '1930-1940',
        url: 'https://geodienste.hamburg.de/HH_WMS_Historische_Karte_1_5000',
        layer: 'Jahrgang_1930-1940'
    },
    {
        name: '1940-1950',
        url: 'https://geodienste.hamburg.de/HH_WMS_Historische_Karte_1_5000',
        layer: 'Jahrgang_1940-1950'
    },
    {
        name: '1950-1960',
        url: 'https://geodienste.hamburg.de/HH_WMS_Historische_Karte_1_5000',
        layer: 'Jahrgang_1950-1960'
    },
    {
        name: '1960-1970',
        url: 'https://geodienste.hamburg.de/HH_WMS_Historische_Karte_1_5000',
        layer: 'Jahrgang_1960-1970'
    },
    {
        name: '1970-1980',
        url: 'https://geodienste.hamburg.de/HH_WMS_Historische_Karte_1_5000',
        layer: 'Jahrgang_1970-1980'
    },
    {
        name: '1980-1990',
        url: 'https://geodienste.hamburg.de/HH_WMS_Historische_Karte_1_5000',
        layer: 'Jahrgang_1980-1990'
    },
    {
        name: '1990-2000',
        url: 'https://geodienste.hamburg.de/HH_WMS_Historische_Karte_1_5000',
        layer: 'Jahrgang_1990-2000'
    },
    {
        name: '2005',
        url: 'https://geodienste.hamburg.de/HH_WMS_Historische_Karte_1_5000',
        layer: 'Jahrgang_2005'
    },
    {
        name: '2010',
        url: 'https://geodienste.hamburg.de/HH_WMS_Historische_Karte_1_5000',
        layer: 'Jahrgang_2010'
    },
    {
        name: '2015',
        url: 'https://geodienste.hamburg.de/HH_WMS_Historische_Karte_1_5000',
        layer: 'Jahrgang_2015'
    },
    {
        name: '2020',
        url: 'https://geodienste.hamburg.de/HH_WMS_Historische_Karte_1_5000',
        layer: 'Jahrgang_2020'
    },
    {
        name: 'aktuell',
        visible: true,
        url: 'https://geodienste.hamburg.de/HH_WMS_DK5?',
        layer: 'DK5'
    }
]