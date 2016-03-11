var platform = new H.service.Platform({
  'app_id': '{aPE5uMRxySREuyn79B3S}',
  'app_code': '{p_wH0FjnnvzGxQzs0ZTMTA}'
});

// Obtain the default map types from the platform object:
var defaultLayers = platform.createDefaultLayers();

// Instantiate (and display) a map object:
var map = new H.Map(
  document.getElementById('mapContainer'),
  defaultLayers.normal.map,
  {
    zoom: 16,
    center: { lat: 37.7, lng: 122.4 }
  });