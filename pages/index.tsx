import { useQuery, gql } from '@apollo/client';

import { Map } from '../components/Map/Map';
import { Header } from '../components/Header/Header';
import { MapContainer } from '../components/Map/MapContainer';
import { MapLoading } from '../components/Map/MapLoading';
import { useCurrentCoordinates } from '../hooks/useCurrentCoordinates';
import { InformationBarContainer } from '../components/InformationBar/InformationBarContainer';
import { LocationData, CURRENT_LOCATION } from '../components/CurrentLocation';

export default function Home() {
    const {
        latitude,
        longitude,
        error: myCoordinatesError,
    } = useCurrentCoordinates();
    const { data, loading, error } = useQuery(CURRENT_LOCATION, {
        pollInterval: 5000,
    });

    const currentLongitude =
        !loading && data && data.currentLocation.issPosition.longitude;
    const currentLatitude =
        !loading && data && data.currentLocation.issPosition.latitude;

    if (myCoordinatesError) {
        console.error(
            'geolocation is not enabled on this browser, please enable and reload the page'
        );
    }

    const hasLngAndLat = currentLongitude && currentLatitude;
    return (
        <div className="bg-blue-100 h-screen">
            <Header />
            <main className="flex justify-center">
                <MapContainer>
                    {hasLngAndLat ? (
                        <Map
                            zoom={8}
                            myLongitude={longitude}
                            myLatitude={latitude}
                            satelliteLatitude={parseFloat(currentLatitude)}
                            satelliteLongitude={parseFloat(currentLongitude)}
                        />
                    ) : (
                        <MapLoading />
                    )}
                </MapContainer>

                <InformationBarContainer>
                    {latitude && longitude && (
                        <LocationData
                            satelliteLatitude={parseFloat(currentLatitude)}
                            satelliteLongitude={parseFloat(currentLongitude)}
                            myLatitude={latitude}
                            myLongitude={longitude}
                        />
                    )}
                </InformationBarContainer>
            </main>
        </div>
    );
}
