ol.proj.proj4.register(proj4);
ol.proj.get("EPSG:4326").setExtent([-67.879363, -46.069405, -67.126644, -45.684149]);
var wms_layers = [];

var format_ejidocr_0 = new ol.format.GeoJSON();
var features_ejidocr_0 = format_ejidocr_0.readFeatures(json_ejidocr_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_ejidocr_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ejidocr_0.addFeatures(features_ejidocr_0);
var lyr_ejidocr_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ejidocr_0, 
                style: style_ejidocr_0,
                interactive: true,
                title: '<img src="styles/legend/ejidocr_0.png" /> ejido-cr'
            });
var format_escuelas_publicas_1 = new ol.format.GeoJSON();
var features_escuelas_publicas_1 = format_escuelas_publicas_1.readFeatures(json_escuelas_publicas_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_escuelas_publicas_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_escuelas_publicas_1.addFeatures(features_escuelas_publicas_1);
var lyr_escuelas_publicas_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_escuelas_publicas_1, 
                style: style_escuelas_publicas_1,
                interactive: true,
                title: '<img src="styles/legend/escuelas_publicas_1.png" /> escuelas_publicas'
            });
var format_cpbcr_2 = new ol.format.GeoJSON();
var features_cpbcr_2 = format_cpbcr_2.readFeatures(json_cpbcr_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_cpbcr_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_cpbcr_2.addFeatures(features_cpbcr_2);
var lyr_cpbcr_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_cpbcr_2, 
                style: style_cpbcr_2,
                interactive: true,
                title: '<img src="styles/legend/cpbcr_2.png" /> cpb-cr'
            });
var format_asociacionvecinal_3 = new ol.format.GeoJSON();
var features_asociacionvecinal_3 = format_asociacionvecinal_3.readFeatures(json_asociacionvecinal_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_asociacionvecinal_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_asociacionvecinal_3.addFeatures(features_asociacionvecinal_3);
var lyr_asociacionvecinal_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_asociacionvecinal_3, 
                style: style_asociacionvecinal_3,
                interactive: true,
                title: '<img src="styles/legend/asociacionvecinal_3.png" /> asociacion-vecinal'
            });

lyr_ejidocr_0.setVisible(true);lyr_escuelas_publicas_1.setVisible(true);lyr_cpbcr_2.setVisible(true);lyr_asociacionvecinal_3.setVisible(true);
var layersList = [lyr_ejidocr_0,lyr_escuelas_publicas_1,lyr_cpbcr_2,lyr_asociacionvecinal_3];
lyr_ejidocr_0.set('fieldAliases', {'ID': 'ID', 'NOMBRE': 'NOMBRE', 'AREA': 'AREA', 'PERIMETER': 'PERIMETER', 'HECTARES': 'HECTARES', });
lyr_escuelas_publicas_1.set('fieldAliases', {'ID': 'ID', 'DENOMINACI': 'DENOMINACI', 'NIVEL': 'NIVEL', 'NRO': 'NRO', 'BARRIO': 'BARRIO', 'TIPO': 'TIPO', 'PARTIDA': 'PARTIDA', 'JORNADA': 'JORNADA', 'CALLE': 'CALLE', 'NUMERACION': 'NUMERACION', 'MAIL': 'MAIL', 'OBS': 'OBS', 'NUM_TEL': 'NUM_TEL', 'MODALIDAD': 'MODALIDAD', 'ORIENTACIO': 'ORIENTACIO', 'ZONA': 'ZONA', 'MATR_AÃ‘O': 'MATR_AÃ‘O', 'MATR_TARDE': 'MATR_TARDE', 'MATR_MANA': 'MATR_MANA', 'MATR_NOCHE': 'MATR_NOCHE', 'LOCALIDAD': 'LOCALIDAD', 'PROVINCIA': 'PROVINCIA', 'DEPARTAMEN': 'DEPARTAMEN', 'SUP_REGION': 'SUP_REGION', 'RED': 'RED', 'FCHA_REALI': 'FCHA_REALI', });
lyr_cpbcr_2.set('fieldAliases', {'ID': 'ID', 'CPB': 'CPB', 'CALLE': 'CALLE', 'NUMERACIóN': 'NUMERACIóN', 'NUM_TEL': 'NUM_TEL', 'BARRIO': 'BARRIO', 'OBS': 'OBS', 'PARTIDA': 'PARTIDA', 'NUM_CEL': 'NUM_CEL', 'FOTOS': 'FOTOS', 'COD_FOTOS': 'COD_FOTOS', 'Jardin Mat': 'Jardin Mat', 'Responsabl': 'Responsabl', 'Actividad': 'Actividad', 'Actividad_1': 'Actividad_1', 'Actividad_2': 'Actividad_2', 'Actividad_3': 'Actividad_3', 'Actividad_4': 'Actividad_4', 'Actividad_5': 'Actividad_5', 'Actividad_6': 'Actividad_6', 'Matricula': 'Matricula', });
lyr_asociacionvecinal_3.set('fieldAliases', {'NOMBRE': 'NOMBRE', 'TELEFONO': 'TELEFONO', 'BARRIO': 'BARRIO', 'PRESIDENTE': 'PRESIDENTE', 'FUNDADO EN': 'FUNDADO EN', 'CELULAR': 'CELULAR', 'DIRECCION': 'DIRECCION', });
lyr_ejidocr_0.set('fieldImages', {'ID': '', 'NOMBRE': '', 'AREA': '', 'PERIMETER': '', 'HECTARES': '', });
lyr_escuelas_publicas_1.set('fieldImages', {'ID': '', 'DENOMINACI': '', 'NIVEL': '', 'NRO': '', 'BARRIO': '', 'TIPO': '', 'PARTIDA': '', 'JORNADA': '', 'CALLE': '', 'NUMERACION': '', 'MAIL': '', 'OBS': '', 'NUM_TEL': '', 'MODALIDAD': '', 'ORIENTACIO': '', 'ZONA': '', 'MATR_AÃ‘O': '', 'MATR_TARDE': '', 'MATR_MANA': '', 'MATR_NOCHE': '', 'LOCALIDAD': '', 'PROVINCIA': '', 'DEPARTAMEN': '', 'SUP_REGION': '', 'RED': '', 'FCHA_REALI': '', });
lyr_cpbcr_2.set('fieldImages', {'ID': '', 'CPB': '', 'CALLE': '', 'NUMERACIóN': '', 'NUM_TEL': '', 'BARRIO': '', 'OBS': '', 'PARTIDA': '', 'NUM_CEL': '', 'FOTOS': '', 'COD_FOTOS': '', 'Jardin Mat': '', 'Responsabl': '', 'Actividad': '', 'Actividad_1': '', 'Actividad_2': '', 'Actividad_3': '', 'Actividad_4': '', 'Actividad_5': '', 'Actividad_6': '', 'Matricula': '', });
lyr_asociacionvecinal_3.set('fieldImages', {'NOMBRE': '', 'TELEFONO': '', 'BARRIO': '', 'PRESIDENTE': '', 'FUNDADO EN': '', 'CELULAR': '', 'DIRECCION': '', });
lyr_ejidocr_0.set('fieldLabels', {'ID': 'no label', 'NOMBRE': 'no label', 'AREA': 'no label', 'PERIMETER': 'no label', 'HECTARES': 'no label', });
lyr_escuelas_publicas_1.set('fieldLabels', {'ID': 'no label', 'DENOMINACI': 'no label', 'NIVEL': 'no label', 'NRO': 'no label', 'BARRIO': 'no label', 'TIPO': 'no label', 'PARTIDA': 'no label', 'JORNADA': 'no label', 'CALLE': 'no label', 'NUMERACION': 'no label', 'MAIL': 'no label', 'OBS': 'no label', 'NUM_TEL': 'no label', 'MODALIDAD': 'no label', 'ORIENTACIO': 'no label', 'ZONA': 'no label', 'MATR_AÃ‘O': 'no label', 'MATR_TARDE': 'no label', 'MATR_MANA': 'no label', 'MATR_NOCHE': 'no label', 'LOCALIDAD': 'no label', 'PROVINCIA': 'no label', 'DEPARTAMEN': 'no label', 'SUP_REGION': 'no label', 'RED': 'no label', 'FCHA_REALI': 'no label', });
lyr_cpbcr_2.set('fieldLabels', {'ID': 'no label', 'CPB': 'no label', 'CALLE': 'no label', 'NUMERACIóN': 'no label', 'NUM_TEL': 'no label', 'BARRIO': 'no label', 'OBS': 'no label', 'PARTIDA': 'no label', 'NUM_CEL': 'no label', 'FOTOS': 'no label', 'COD_FOTOS': 'no label', 'Jardin Mat': 'no label', 'Responsabl': 'no label', 'Actividad': 'no label', 'Actividad_1': 'no label', 'Actividad_2': 'no label', 'Actividad_3': 'no label', 'Actividad_4': 'no label', 'Actividad_5': 'no label', 'Actividad_6': 'no label', 'Matricula': 'no label', });
lyr_asociacionvecinal_3.set('fieldLabels', {'NOMBRE': 'no label', 'TELEFONO': 'no label', 'BARRIO': 'no label', 'PRESIDENTE': 'no label', 'FUNDADO EN': 'no label', 'CELULAR': 'no label', 'DIRECCION': 'no label', });
lyr_asociacionvecinal_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});