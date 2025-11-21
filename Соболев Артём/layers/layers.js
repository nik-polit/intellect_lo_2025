var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '&nbsp;&middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format__1 = new ol.format.GeoJSON();
var features__1 = format__1.readFeatures(json__1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__1.addFeatures(features__1);
var lyr__1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource__1, 
                style: style__1,
                popuplayertitle: 'Плотность населения',
                interactive: true,
    title: 'Плотность населения<br />\
    <img src="styles/legend/_1_0.png" /> 3,9 - 12,9<br />\
    <img src="styles/legend/_1_1.png" /> 12,9 - 21,1<br />\
    <img src="styles/legend/_1_2.png" /> 21,1 - 35,5<br />\
    <img src="styles/legend/_1_3.png" /> 35,5 - 88,8<br />\
    <img src="styles/legend/_1_4.png" /> 88,8 - 769,7<br />' });
var format_Water_2 = new ol.format.GeoJSON();
var features_Water_2 = format_Water_2.readFeatures(json_Water_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Water_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Water_2.addFeatures(features_Water_2);
var lyr_Water_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Water_2, 
                style: style_Water_2,
                popuplayertitle: 'Water',
                interactive: false,
                title: '<img src="styles/legend/Water_2.png" /> Water'
            });
var format__3 = new ol.format.GeoJSON();
var features__3 = format__3.readFeatures(json__3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__3.addFeatures(features__3);
var lyr__3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource__3, 
                style: style__3,
                popuplayertitle: 'Рождённые',
                interactive: true,
    title: 'Рождённые<br />\
    <img src="styles/legend/_3_0.png" /> 168 - 205<br />\
    <img src="styles/legend/_3_1.png" /> 205 - 436<br />\
    <img src="styles/legend/_3_2.png" /> 436 - 643<br />\
    <img src="styles/legend/_3_3.png" /> 643 - 1529<br />\
    <img src="styles/legend/_3_4.png" /> 1529 - 3597<br />' });

lyr_OSMStandard_0.setVisible(true);lyr__1.setVisible(true);lyr_Water_2.setVisible(false);lyr__3.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr__1,lyr_Water_2,lyr__3];
lyr__1.set('fieldAliases', {'fid': 'fid', 'official_status': 'official_status', 'name': 'name', 'boundary': 'boundary', 'population': 'population', 'area': 'area', 'density': 'density', 'born': 'born', });
lyr_Water_2.set('fieldAliases', {'AREA': 'AREA', });
lyr__3.set('fieldAliases', {'fid': 'fid', 'official_status': 'official_status', 'name': 'name', 'boundary': 'boundary', 'population': 'population', 'area': 'area', 'density': 'density', 'born': 'born', });
lyr__1.set('fieldImages', {'fid': 'TextEdit', 'official_status': 'TextEdit', 'name': 'TextEdit', 'boundary': 'TextEdit', 'population': 'Range', 'area': 'Range', 'density': 'TextEdit', 'born': '', });
lyr_Water_2.set('fieldImages', {'AREA': 'TextEdit', });
lyr__3.set('fieldImages', {'fid': 'TextEdit', 'official_status': 'TextEdit', 'name': 'TextEdit', 'boundary': 'TextEdit', 'population': 'Range', 'area': 'Range', 'density': 'TextEdit', 'born': 'Range', });
lyr__1.set('fieldLabels', {'fid': 'no label', 'official_status': 'no label', 'name': 'no label', 'boundary': 'no label', 'population': 'no label', 'area': 'no label', 'density': 'no label', 'born': 'no label', });
lyr_Water_2.set('fieldLabels', {'AREA': 'no label', });
lyr__3.set('fieldLabels', {'fid': 'no label', 'official_status': 'no label', 'name': 'no label', 'boundary': 'no label', 'population': 'no label', 'area': 'no label', 'density': 'no label', 'born': 'no label', });
lyr__3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});