function initMap() {
    var companyLocation = {lat: 40.7128, lng: -74.0060};
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 14,
        center: companyLocation
    });
    var marker = new google.maps.Marker({
        position: companyLocation,
        map: map
    });
}