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
                popuplayertitle: 'Районы ЛО по плотности населения (чел/км^2)',
                interactive: true,
    title: 'Районы ЛО по плотности населения (чел/км^2)<br />\
    <img src="styles/legend/2_1_0.png" /> 3,9 - 4,9<br />\
    <img src="styles/legend/2_1_1.png" /> 4,9 - 8,4<br />\
    <img src="styles/legend/2_1_2.png" /> 8,4 - 12,9<br />\
    <img src="styles/legend/2_1_3.png" /> 12,9 - 21,1<br />\
    <img src="styles/legend/2_1_4.png" /> 21,1 - 35,5<br />\
    <img src="styles/legend/2_1_5.png" /> 35,5 - 88,8<br />\
    <img src="styles/legend/2_1_6.png" /> 88,8 - 770,9<br />' });
var format__2 = new ol.format.GeoJSON();
var features__2 = format__2.readFeatures(json__2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__2.addFeatures(features__2);
var lyr__2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource__2, 
                style: style__2,
                popuplayertitle: 'Водная карта ЛО',
                interactive: true,
                title: '<img src="styles/legend/_2.png" /> Водная карта ЛО'
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
                popuplayertitle: 'Количество учащихся школ ЛО',
                interactive: true,
    title: 'Количество учащихся школ ЛО<br />\
    <img src="styles/legend/_3_0.png" /> 2313 - 2313<br />\
    <img src="styles/legend/_3_1.png" /> 2313 - 2313<br />\
    <img src="styles/legend/_3_2.png" /> 2313 - 2313<br />\
    <img src="styles/legend/_3_3.png" /> 2313 - 2313<br />\
    <img src="styles/legend/_3_4.png" /> 2313 - 2313<br />\
    <img src="styles/legend/_3_5.png" /> 2313 - 2313<br />\
    <img src="styles/legend/_3_6.png" /> 2313 - 2313<br />\
    <img src="styles/legend/_3_7.png" /> 2313 - 3573<br />\
    <img src="styles/legend/_3_8.png" /> 3573 - 4319<br />\
    <img src="styles/legend/_3_9.png" /> 4319 - 6067<br />\
    <img src="styles/legend/_3_10.png" /> 6067 - 6995<br />\
    <img src="styles/legend/_3_11.png" /> 6995 - 7594<br />\
    <img src="styles/legend/_3_12.png" /> 7594 - 12132<br />\
    <img src="styles/legend/_3_13.png" /> 12132 - 12892<br />\
    <img src="styles/legend/_3_14.png" /> 12892 - 22397<br />\
    <img src="styles/legend/_3_15.png" /> 22397 - 65907<br />' });

lyr_OSMStandard_0.setVisible(true);lyr_2_1.setVisible(true);lyr__2.setVisible(true);lyr__3.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_2_1,lyr__2,lyr__3];
lyr_2_1.set('fieldAliases', {'fid': 'fid', 'official_status': 'official_status', 'name': 'name', 'boundary': 'boundary', 'population': 'population', 'area ': 'area ', 'density': 'density', 'school students': 'school students', });
lyr__2.set('fieldAliases', {'AREA': 'AREA', });
lyr__3.set('fieldAliases', {'fid': 'fid', 'official_status': 'official_status', 'name': 'name', 'boundary': 'boundary', 'population': 'population', 'area ': 'area ', 'density': 'density', 'school students': 'school students', });
lyr_2_1.set('fieldImages', {'fid': 'TextEdit', 'official_status': 'TextEdit', 'name': 'TextEdit', 'boundary': 'TextEdit', 'population': 'Range', 'area ': 'TextEdit', 'density': 'TextEdit', 'school students': '', });
lyr__2.set('fieldImages', {'AREA': 'TextEdit', });
lyr__3.set('fieldImages', {'fid': 'TextEdit', 'official_status': 'TextEdit', 'name': 'TextEdit', 'boundary': 'TextEdit', 'population': 'Range', 'area ': 'TextEdit', 'density': 'TextEdit', 'school students': 'Range', });
lyr_2_1.set('fieldLabels', {'fid': 'no label', 'official_status': 'no label', 'name': 'no label', 'boundary': 'no label', 'population': 'no label', 'area ': 'no label', 'density': 'no label', 'school students': 'no label', });
lyr__2.set('fieldLabels', {'AREA': 'no label', });
lyr__3.set('fieldLabels', {'fid': 'no label', 'official_status': 'no label', 'name': 'no label', 'boundary': 'no label', 'population': 'no label', 'area ': 'no label', 'density': 'no label', 'school students': 'no label', });
lyr__3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});