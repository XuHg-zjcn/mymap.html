if(typeof tile_url === 'undefined'){
    var tile_url = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
}

var map = L.map('map').setView([30.05, 120.47], 12);

L.tileLayer(tile_url, {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    maxZoom: 19,
    maxNativeZoom: 19
}).addTo(map);

L.Control.measureControl().addTo(map);

L.control.scale({
    position:"bottomleft",
    maxWidth:100,
    metric:true,
    imperial:false
}).addTo(map);