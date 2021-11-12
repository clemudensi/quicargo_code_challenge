/* eslint-disable */
import { useEffect, useState } from 'react';
import {
    withGoogleMap,
    GoogleMap,
    DirectionsRenderer
} from 'react-google-maps';

const MapDirectionService = ({ origin, destination }) => {
    const [directions, setDirections] = useState(null);

    const directionsService = new window.google.maps.DirectionsService();

    useEffect(() => {
        directionsService.route(
            {
                origin: origin,
                destination: destination,
                travelMode: window.google.maps.TravelMode.DRIVING
            },
            (result, status) => {
                if (status === window.google.maps.DirectionsStatus.OK) {
                    setDirections(result)
                } else {
                    throw new Error(`could not fetch direction: ${result}`);
                }
            }
        );
    }, [origin, destination, directionsService]);

    const MapContainer = withGoogleMap(() => (
        <GoogleMap
            defaultCenter={{ lat: 6.5244, lng:  3.3792 }}
            defaultZoom={13}
        >
            <DirectionsRenderer
                directions={directions}
            />
        </GoogleMap>
    ));

    return (
        <>
            <MapContainer
                containerElement={<div />}
                mapElement={<div className="h-full" />}
            />
        </>
    );
};

export { MapDirectionService };