var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '&nbsp;&middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
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
    <img src="styles/legend/lo_1_0.png" /> 3,9 - 12,9<br />\
    <img src="styles/legend/lo_1_1.png" /> 12,9 - 21,1<br />\
    <img src="styles/legend/lo_1_2.png" /> 21,1 - 35,5<br />\
    <img src="styles/legend/lo_1_3.png" /> 35,5 - 88,8<br />\
    <img src="styles/legend/lo_1_4.png" /> 88,8 - 770,9<br />' });
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
var format_centr_3 = new ol.format.GeoJSON();
var features_centr_3 = format_centr_3.readFeatures(json_centr_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_centr_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_centr_3.addFeatures(features_centr_3);
var lyr_centr_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_centr_3, 
                style: style_centr_3,
                popuplayertitle: 'centr',
                interactive: false,
    title: 'centr<br />\
    <img src="styles/legend/centr_3_0.png" /> 3,9 - 12,9<br />\
    <img src="styles/legend/centr_3_1.png" /> 12,9 - 21,1<br />\
    <img src="styles/legend/centr_3_2.png" /> 21,1 - 35,5<br />\
    <img src="styles/legend/centr_3_3.png" /> 35,5 - 88,8<br />\
    <img src="styles/legend/centr_3_4.png" /> 88,8 - 770,9<br />' });

lyr_OSMStandard_0.setVisible(true);lyr_lo_1.setVisible(true);lyr_Water_2.setVisible(true);lyr_centr_3.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_lo_1,lyr_Water_2,lyr_centr_3];
lyr_lo_1.set('fieldAliases', {'fid': 'fid', 'official_status': 'official_status', 'name': 'name', 'boundary': 'boundary', 'population': 'population', 'dens': 'dens', });
lyr_Water_2.set('fieldAliases', {'AREA': 'AREA', 'PERIMETER': 'PERIMETER', 'DNAR_': 'DNAR_', 'DNAR_ID': 'DNAR_ID', 'DNAR_CODE': 'DNAR_CODE', 'DNAR_ABS': 'DNAR_ABS', 'DNAR_WID': 'DNAR_WID', 'DNAR_STAT': 'DNAR_STAT', 'DNAR_SH': 'DNAR_SH', 'DNAR_WT': 'DNAR_WT', 'DNAR_SHIP': 'DNAR_SHIP', 'DNAR_CHR': 'DNAR_CHR', 'DNAR_TEXT': 'DNAR_TEXT', 'CONT': 'CONT', 'B_CODE': 'B_CODE', 'text': 'text', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_centr_3.set('fieldAliases', {'fid': 'fid', 'official_status': 'official_status', 'name': 'name', 'boundary': 'boundary', 'population': 'population', 'dens': 'dens', });
lyr_lo_1.set('fieldImages', {'fid': 'TextEdit', 'official_status': 'TextEdit', 'name': 'TextEdit', 'boundary': 'TextEdit', 'population': 'TextEdit', 'dens': 'TextEdit', });
lyr_Water_2.set('fieldImages', {'AREA': 'TextEdit', 'PERIMETER': 'TextEdit', 'DNAR_': 'TextEdit', 'DNAR_ID': 'TextEdit', 'DNAR_CODE': 'TextEdit', 'DNAR_ABS': 'TextEdit', 'DNAR_WID': 'Range', 'DNAR_STAT': 'Range', 'DNAR_SH': 'Range', 'DNAR_WT': 'Range', 'DNAR_SHIP': 'Range', 'DNAR_CHR': 'Range', 'DNAR_TEXT': 'TextEdit', 'CONT': 'Range', 'B_CODE': 'Range', 'text': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_centr_3.set('fieldImages', {'fid': 'TextEdit', 'official_status': 'TextEdit', 'name': 'TextEdit', 'boundary': 'TextEdit', 'population': 'Range', 'dens': 'TextEdit', });
lyr_lo_1.set('fieldLabels', {'fid': 'no label', 'official_status': 'hidden field', 'name': 'inline label - visible with data', 'boundary': 'no label', 'population': 'hidden field', 'dens': 'no label', });
lyr_Water_2.set('fieldLabels', {'AREA': 'no label', 'PERIMETER': 'no label', 'DNAR_': 'no label', 'DNAR_ID': 'no label', 'DNAR_CODE': 'no label', 'DNAR_ABS': 'no label', 'DNAR_WID': 'no label', 'DNAR_STAT': 'no label', 'DNAR_SH': 'no label', 'DNAR_WT': 'no label', 'DNAR_SHIP': 'no label', 'DNAR_CHR': 'no label', 'DNAR_TEXT': 'no label', 'CONT': 'no label', 'B_CODE': 'no label', 'text': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_centr_3.set('fieldLabels', {'fid': 'no label', 'official_status': 'no label', 'name': 'no label', 'boundary': 'no label', 'population': 'no label', 'dens': 'no label', });
lyr_centr_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});