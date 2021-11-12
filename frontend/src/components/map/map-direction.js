/* eslint-disable */
import { useState } from 'react';
import { GoogleMap, DirectionsRenderer } from '@react-google-maps/api';

const defaultLocation = { lat: 40.756795, lng: -73.954298 };

const MapDirection = ({ origin, destination }) => {
    const directionsService = new window.google.maps.DirectionsService();
    const [mapPath, setMapPath] = useState({ direction: null, bounds: null });

    const onMapLoad = map => {
        changeDirection(origin, destination);
    };

    const changeDirection = (origin, destination) => {
        directionsService.route(
          {
            origin: origin,
            destination: destination,
            travelMode: window.google.maps.TravelMode.DRIVING
          },
          (result, status) => {
            if (status === window.google.maps.DirectionsStatus.OK) {
              setMapPath({
                directions: result
              });
            } else {
              console.error(`error fetching directions ${result}`);
            }
          }
        );
    };

    return (
        <div>
          <GoogleMap
            center={defaultLocation}
            zoom={5}
            onLoad={map => onMapLoad(map)}
            mapContainerStyle={{ height: "100vw", width: "39vw" }}
          >
            {mapPath.directions !== null && (
              <DirectionsRenderer directions={mapPath.directions} />
            )}
          </GoogleMap>
        </div>
    );
};

export { MapDirection };