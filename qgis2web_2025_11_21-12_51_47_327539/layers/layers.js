var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '&nbsp;&middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_lo_1 = new ol.format.GeoJSON();
var features_lo_1 = format_lo_1.readFeatures(json_lo_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_lo_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_lo_1.addFeatures(features_lo_1);
var lyr_lo_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_lo_1, 
                style: style_lo_1,
                popuplayertitle: 'lo',
                interactive: true,
    title: 'lo<br />\
    <img src="styles/legend/lo_1_0.png" /> 0 - 5<br />\
    <img src="styles/legend/lo_1_1.png" /> 5 - 15<br />\
    <img src="styles/legend/lo_1_2.png" /> 15 - 35<br />\
    <img src="styles/legend/lo_1_3.png" /> 35 - 90<br />\
    <img src="styles/legend/lo_1_4.png" /> 90 - 800<br />' });
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
                popuplayertitle: 'коричневые кружки',
                interactive: true,
    title: 'коричневые кружки<br />\
    <img src="styles/legend/_3_0.png" /> 39870 - 43678<br />\
    <img src="styles/legend/_3_1.png" /> 43678 - 54987<br />\
    <img src="styles/legend/_3_2.png" /> 54987 - 84350<br />\
    <img src="styles/legend/_3_3.png" /> 84350 - 110432<br />\
    <img src="styles/legend/_3_4.png" /> 1104320 - 100000000<br />' });

lyr_OSMStandard_0.setVisible(true);lyr_lo_1.setVisible(true);lyr_Water_2.setVisible(true);lyr__3.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_lo_1,lyr_Water_2,lyr__3];
lyr_lo_1.set('fieldAliases', {'fid': 'fid', 'official_status': 'official_status', 'name': 'name', 'boundary': 'boundary', 'population': 'population', });
lyr_Water_2.set('fieldAliases', {'AREA': 'AREA', });
lyr__3.set('fieldAliases', {'fid': 'fid', 'official_status': 'official_status', 'name': 'name', 'boundary': 'boundary', 'population': 'population', 'area': 'area', 'srdjgiae': 'srdjgiae', 'ЗП': 'ЗП', });
lyr_lo_1.set('fieldImages', {'fid': 'TextEdit', 'official_status': 'TextEdit', 'name': 'TextEdit', 'boundary': 'TextEdit', 'population': 'Range', });
lyr_Water_2.set('fieldImages', {'AREA': 'TextEdit', });
lyr__3.set('fieldImages', {'fid': 'TextEdit', 'official_status': 'TextEdit', 'name': 'TextEdit', 'boundary': 'TextEdit', 'population': 'Range', 'area': 'TextEdit', 'srdjgiae': 'TextEdit', 'ЗП': 'TextEdit', });
lyr_lo_1.set('fieldLabels', {'fid': 'no label', 'official_status': 'no label', 'name': 'no label', 'boundary': 'no label', 'population': 'no label', });
lyr_Water_2.set('fieldLabels', {'AREA': 'no label', });
lyr__3.set('fieldLabels', {'fid': 'no label', 'official_status': 'no label', 'name': 'no label', 'boundary': 'no label', 'population': 'no label', 'area': 'no label', 'srdjgiae': 'no label', 'ЗП': 'no label', });
lyr__3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});