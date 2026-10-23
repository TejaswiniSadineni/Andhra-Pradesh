var wms_layers = [];


        var lyr_GoogleMaps_0 = new ol.layer.Tile({
            'title': 'Google Maps',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });
var format_AP_STATE_1 = new ol.format.GeoJSON();
var features_AP_STATE_1 = format_AP_STATE_1.readFeatures(json_AP_STATE_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AP_STATE_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AP_STATE_1.addFeatures(features_AP_STATE_1);
var lyr_AP_STATE_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AP_STATE_1, 
                style: style_AP_STATE_1,
                popuplayertitle: 'AP_STATE',
                interactive: true,
                title: '<img src="styles/legend/AP_STATE_1.png" /> AP_STATE'
            });

lyr_GoogleMaps_0.setVisible(true);lyr_AP_STATE_1.setVisible(true);
var layersList = [lyr_GoogleMaps_0,lyr_AP_STATE_1];
lyr_AP_STATE_1.set('fieldAliases', {'ID_0': 'ID_0', 'ISO': 'ISO', 'NAME_0': 'NAME_0', 'ID_1': 'ID_1', 'NAME_1': 'NAME_1', 'TYPE_1': 'TYPE_1', 'ENGTYPE_1': 'ENGTYPE_1', 'NL_NAME_1': 'NL_NAME_1', 'VARNAME_1': 'VARNAME_1', });
lyr_AP_STATE_1.set('fieldImages', {'ID_0': '', 'ISO': '', 'NAME_0': '', 'ID_1': '', 'NAME_1': '', 'TYPE_1': '', 'ENGTYPE_1': '', 'NL_NAME_1': '', 'VARNAME_1': '', });
lyr_AP_STATE_1.set('fieldLabels', {'ID_0': 'no label', 'ISO': 'no label', 'NAME_0': 'no label', 'ID_1': 'no label', 'NAME_1': 'no label', 'TYPE_1': 'no label', 'ENGTYPE_1': 'no label', 'NL_NAME_1': 'no label', 'VARNAME_1': 'no label', });
lyr_AP_STATE_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});