DG.autoload(function() { 
var myMap = new DG.Map('myMapId'); 
myMap.setCenter(new DG.GeoPoint(76.890982,43.242296), 17); 
myMap.controls.add(new DG.Controls.Zoom()); 
var myBalloon = new DG.Balloons.Common({
geoPoint: new DG.GeoPoint(76.890982,43.242296),
contentHtml: 'Саламат 1'
});
var myMarker = new DG.Markers.Common({
geoPoint: new DG.GeoPoint(76.890982,43.242296),
clickCallback: function() {
if (! myMap.balloons.getDefaultGroup().contains(myBalloon)) {
myMap.balloons.add(myBalloon);
} else {
myBalloon.show();
}
}
});
myMap.markers.add(myMarker);
});