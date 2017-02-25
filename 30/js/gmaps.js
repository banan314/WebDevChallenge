/**
 * Created by Kamil on 23-Feb-17.
 */

function loadGoogleMaps() {
    if (GBrowserIsCompatible()) {
        var map = new GMap2(document.getElementById("myMap"));
        map.setCenter(new GLatLng(50, 21), 10);
    }
}