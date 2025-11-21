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
    <img src="styles/legend/_1_0.png" /> 0 - 10<br />\
    <img src="styles/legend/_1_1.png" /> 10 - 21,1<br />\
    <img src="styles/legend/_1_2.png" /> 21,1 - 35,5<br />\
    <img src="styles/legend/_1_3.png" /> 35,5 - 88,8<br />\
    <img src="styles/legend/_1_4.png" /> 88,8 - 770,9<br />' });
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
                popuplayertitle: 'Вода',
                interactive: false,
                title: '<img src="styles/legend/_2.png" /> Вода'
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
                popuplayertitle: 'Безработица',
                interactive: true,
    title: 'Безработица<br />\
    <img src="styles/legend/_3_0.png" /> 0,1 - 0,1<br />\
    <img src="styles/legend/_3_1.png" /> 0,1 - 0,2<br />\
    <img src="styles/legend/_3_2.png" /> 0,2 - 0,3<br />\
    <img src="styles/legend/_3_3.png" /> 0,3 - 0,4<br />\
    <img src="styles/legend/_3_4.png" /> 0,4 - 0,6<br />' });

lyr_OSMStandard_0.setVisible(true);lyr__1.setVisible(true);lyr__2.setVisible(true);lyr__3.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr__1,lyr__2,lyr__3];
lyr__1.set('fieldAliases', {'fid': 'fid', 'official_status': 'official_status', 'name': 'name', 'boundary': 'boundary', 'population': 'population', 'Area': 'Area', 'Area new': 'Area new', 'Density new': 'Density new', 'Уровень безработицы': 'Уровень безработицы', });
lyr__2.set('fieldAliases', {'AREA': 'AREA', });
lyr__3.set('fieldAliases', {'fid': 'fid', 'official_status': 'official_status', 'name': 'name', 'boundary': 'boundary', 'population': 'population', 'Area': 'Area', 'Area new': 'Area new', 'Density new': 'Density new', 'Безработица': 'Безработица', });
lyr__1.set('fieldImages', {'fid': 'TextEdit', 'official_status': 'TextEdit', 'name': 'TextEdit', 'boundary': 'TextEdit', 'population': 'Range', 'Area': 'TextEdit', 'Area new': 'TextEdit', 'Density new': 'TextEdit', 'Уровень безработицы': '', });
lyr__2.set('fieldImages', {'AREA': 'TextEdit', });
lyr__3.set('fieldImages', {'fid': 'TextEdit', 'official_status': 'TextEdit', 'name': 'TextEdit', 'boundary': 'TextEdit', 'population': 'Range', 'Area': 'Range', 'Area new': 'TextEdit', 'Density new': 'TextEdit', 'Безработица': 'TextEdit', });
lyr__1.set('fieldLabels', {'fid': 'no label', 'official_status': 'no label', 'name': 'no label', 'boundary': 'no label', 'population': 'no label', 'Area': 'no label', 'Area new': 'no label', 'Density new': 'no label', 'Уровень безработицы': 'no label', });
lyr__2.set('fieldLabels', {'AREA': 'no label', });
lyr__3.set('fieldLabels', {'fid': 'no label', 'official_status': 'no label', 'name': 'no label', 'boundary': 'no label', 'population': 'no label', 'Area': 'no label', 'Area new': 'no label', 'Density new': 'no label', 'Безработица': 'no label', });
lyr__3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});