var map = L.map('map').setView([38.638363, -90.279093], 8);

  // load a tile layer
 L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
	attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
	subdomains: 'abcd',
	minZoom: 0,
	maxZoom: 20,
	ext: 'png'
}).addTo(map);

 $.getJSON("https://raw.githubusercontent.com/sheikhasif1996/ThesisStudyArea/main/RedRiver_ONEPART_geojson.json",function(main){
    // add GeoJSON layer to the map once the file is loaded
    L.geoJson(main).addTo(map);
  });
