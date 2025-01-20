var wms_layers = [];
var format_DesaIndonesia_0 = new ol.format.GeoJSON();
var features_DesaIndonesia_0 = format_DesaIndonesia_0.readFeatures(json_DesaIndonesia_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DesaIndonesia_0 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_DesaIndonesia_0.addFeatures(features_DesaIndonesia_0);var lyr_DesaIndonesia_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_DesaIndonesia_0, 
                style: style_DesaIndonesia_0,
                title: '<img src="styles/legend/DesaIndonesia_0.png" /> DesaIndonesia'
            });var format_jalan_1 = new ol.format.GeoJSON();
var features_jalan_1 = format_jalan_1.readFeatures(json_jalan_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_jalan_1 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_jalan_1.addFeatures(features_jalan_1);var lyr_jalan_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_jalan_1, 
                style: style_jalan_1,
                title: '<img src="styles/legend/jalan_1.png" /> jalan'
            });var format_rmh_2 = new ol.format.GeoJSON();
var features_rmh_2 = format_rmh_2.readFeatures(json_rmh_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_rmh_2 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_rmh_2.addFeatures(features_rmh_2);var lyr_rmh_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_rmh_2, 
                style: style_rmh_2,
                title: '<img src="styles/legend/rmh_2.png" /> rmh'
            });

lyr_DesaIndonesia_0.setVisible(true);lyr_jalan_1.setVisible(true);lyr_rmh_2.setVisible(true);
var layersList = [lyr_DesaIndonesia_0,lyr_jalan_1,lyr_rmh_2];
lyr_DesaIndonesia_0.set('fieldAliases', {'DESA': 'DESA', 'KECAMATAN': 'KECAMATAN', 'KABUPATEN': 'KABUPATEN', 'PROPINSI': 'PROPINSI', 'LUAS': 'LUAS', 'MI_PRINX': 'MI_PRINX', });
lyr_jalan_1.set('fieldAliases', {'id': 'id', 'NAMA_JLN': 'NAMA_JLN', 'JENIS_JLN': 'JENIS_JLN', });
lyr_rmh_2.set('fieldAliases', {'id': 'id', 'rmh': 'rmh', });
lyr_DesaIndonesia_0.set('fieldImages', {'DESA': 'TextEdit', 'KECAMATAN': 'TextEdit', 'KABUPATEN': 'TextEdit', 'PROPINSI': 'TextEdit', 'LUAS': 'TextEdit', 'MI_PRINX': 'TextEdit', });
lyr_jalan_1.set('fieldImages', {'id': 'TextEdit', 'NAMA_JLN': 'TextEdit', 'JENIS_JLN': 'TextEdit', });
lyr_rmh_2.set('fieldImages', {'id': 'TextEdit', 'rmh': 'TextEdit', });
lyr_DesaIndonesia_0.set('fieldLabels', {'DESA': 'no label', 'KECAMATAN': 'no label', 'KABUPATEN': 'no label', 'PROPINSI': 'no label', 'LUAS': 'no label', 'MI_PRINX': 'no label', });
lyr_jalan_1.set('fieldLabels', {'id': 'no label', 'NAMA_JLN': 'no label', 'JENIS_JLN': 'no label', });
lyr_rmh_2.set('fieldLabels', {'id': 'no label', 'rmh': 'no label', });
lyr_rmh_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});