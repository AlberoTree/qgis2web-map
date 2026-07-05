var wms_layers = [];


        var lyr_BingSatellite_0 = new ol.layer.Tile({
            'title': 'Bing Satellite',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://ecn.t3.tiles.virtualearth.net/tiles/a{q}.jpeg?g=0&dir=dir_n''
            })
        });

        var lyr_OSMStandard_1 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_fontanelle_qfield_2 = new ol.format.GeoJSON();
var features_fontanelle_qfield_2 = format_fontanelle_qfield_2.readFeatures(json_fontanelle_qfield_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_fontanelle_qfield_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_fontanelle_qfield_2.addFeatures(features_fontanelle_qfield_2);
cluster_fontanelle_qfield_2 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_fontanelle_qfield_2
});
var lyr_fontanelle_qfield_2 = new ol.layer.Vector({
                declutter: false,
                source:cluster_fontanelle_qfield_2, 
                style: style_fontanelle_qfield_2,
                popuplayertitle: 'fontanelle_qfield',
                interactive: true,
                title: '<img src="styles/legend/fontanelle_qfield_2.png" /> fontanelle_qfield'
            });

lyr_BingSatellite_0.setVisible(true);lyr_OSMStandard_1.setVisible(true);lyr_fontanelle_qfield_2.setVisible(true);
var layersList = [lyr_BingSatellite_0,lyr_OSMStandard_1,lyr_fontanelle_qfield_2];
lyr_fontanelle_qfield_2.set('fieldAliases', {'id': 'Identificativo:', 'nome': 'Nome:', 'accesso': 'Accesso:', 'location': 'Location:', 'operator': 'Operatore:', 'wheelchair': 'Accessibile:', 'data ril': 'Data rilievo:', 'capacity': 'Capacità (n° rubinetti):', 'Note_': 'Note_', });
lyr_fontanelle_qfield_2.set('fieldImages', {'id': 'TextEdit', 'nome': 'TextEdit', 'accesso': 'ValueMap', 'location': 'ValueMap', 'operator': 'TextEdit', 'wheelchair': 'ValueMap', 'data ril': 'DateTime', 'capacity': 'Range', 'Note_': '', });
lyr_fontanelle_qfield_2.set('fieldLabels', {'id': 'inline label - visible with data', 'nome': 'inline label - visible with data', 'accesso': 'inline label - visible with data', 'location': 'inline label - visible with data', 'operator': 'inline label - visible with data', 'wheelchair': 'inline label - visible with data', 'data ril': 'inline label - visible with data', 'capacity': 'inline label - visible with data', 'Note_': 'inline label - visible with data', });
lyr_fontanelle_qfield_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});