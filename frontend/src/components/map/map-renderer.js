/* eslint-disable */
import { withScriptjs } from 'react-google-maps';
import  { MapDirectionService } from './map-direction-service';

const MapRenderer= () => {
	const MapLoader = withScriptjs(MapDirectionService);
	return (
		<div className="App">
			<header className="App-header">

			</header>
			<MapLoader
					googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyCZma7kV6v4esHCaVHyphkBR0HUYe7IC6U"
					loadingElement={<div className="w-full" />}
			/>
		</div>
	);
};

export { MapRenderer };