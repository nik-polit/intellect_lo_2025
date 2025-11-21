var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '&nbsp;&middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_2_1 = new ol.format.GeoJSON();
var features_2_1 = format_2_1.readFeatures(json_2_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_2_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2_1.addFeatures(features_2_1);
var lyr_2_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_2_1, 
                style: style_2_1,
                popuplayertitle: 'Плотность населения(чел/км^2)',
                interactive: false,
    title: 'Плотность населения(чел/км^2)<br />\
    <img src="styles/legend/2_1_0.png" /> 4 - 13<br />\
    <img src="styles/legend/2_1_1.png" /> 13 - 21<br />\
    <img src="styles/legend/2_1_2.png" /> 21 - 36<br />\
    <img src="styles/legend/2_1_3.png" /> 36 - 89<br />\
    <img src="styles/legend/2_1_4.png" /> 89 - 771<br />' });
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
                interactive: true,
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
                popuplayertitle: 'Количество школ',
                interactive: false,
    title: 'Количество школ<br />\
    <img src="styles/legend/_3_0.png" /> 9 - 10<br />\
    <img src="styles/legend/_3_1.png" /> 10 - 14<br />\
    <img src="styles/legend/_3_2.png" /> 14 - 19<br />\
    <img src="styles/legend/_3_3.png" /> 19 - 28<br />\
    <img src="styles/legend/_3_4.png" /> 28 - 46<br />' });

lyr_OSMStandard_0.setVisible(true);lyr_2_1.setVisible(true);lyr_Water_2.setVisible(true);lyr__3.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_2_1,lyr_Water_2,lyr__3];
lyr_2_1.set('fieldAliases', {'fid': 'fid', 'official_status': 'official_status', 'name': 'name', 'boundary': 'boundary', 'population': 'population', 'AREA': 'AREA', 'LALALA': 'LALALA', 'Численность школ': 'Численность школ', });
lyr_Water_2.set('fieldAliases', {'AREA': 'AREA', });
lyr__3.set('fieldAliases', {'fid': 'fid', 'official_status': 'official_status', 'name': 'name', 'boundary': 'boundary', 'population': 'population', 'AREA': 'AREA', 'LALALA': 'LALALA', 'Численность школ': 'Численность школ', });
lyr_2_1.set('fieldImages', {'fid': 'TextEdit', 'official_status': 'TextEdit', 'name': 'TextEdit', 'boundary': 'TextEdit', 'population': 'Range', 'AREA': 'TextEdit', 'LALALA': 'TextEdit', 'Численность школ': '', });
lyr_Water_2.set('fieldImages', {'AREA': 'TextEdit', });
lyr__3.set('fieldImages', {'fid': 'TextEdit', 'official_status': 'TextEdit', 'name': 'TextEdit', 'boundary': 'TextEdit', 'population': 'Range', 'AREA': 'TextEdit', 'LALALA': 'TextEdit', 'Численность школ': 'Range', });
lyr_2_1.set('fieldLabels', {'fid': 'no label', 'official_status': 'no label', 'name': 'no label', 'boundary': 'no label', 'population': 'no label', 'AREA': 'no label', 'LALALA': 'no label', 'Численность школ': 'no label', });
lyr_Water_2.set('fieldLabels', {'AREA': 'hidden field', });
lyr__3.set('fieldLabels', {'fid': 'no label', 'official_status': 'no label', 'name': 'no label', 'boundary': 'no label', 'population': 'no label', 'AREA': 'no label', 'LALALA': 'no label', 'Численность школ': 'no label', });
lyr__3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});