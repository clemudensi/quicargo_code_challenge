const getLatLng = (city: string): void => {
    const geocoder =  new window.google.maps.Geocoder();
    void geocoder.geocode( { 'address': city}, (results, status) => {
        if (status === google.maps.GeocoderStatus.OK && results) {
            return {
                lat: results[0].geometry.location.lat() ?? '',
                lng: results[0].geometry.location.lng() ?? ''
            }
        } else {
            console.error(status);
        }
    });
};

export { getLatLng };