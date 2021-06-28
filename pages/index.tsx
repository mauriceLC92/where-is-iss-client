import { Map } from '../components/Map/Map';
import { Header } from '../components/Header/Header';
import { MapContainer } from '../components/Map/MapContainer';
import { MapLoading } from '../components/Map/MapLoading';
import { useCurrentCoordinates } from '../hooks/useCurrentCoordinates';

export default function Home() {
    const { latitude, longitude, error } = useCurrentCoordinates();

    if (error) {
        console.error(
            'geolocation is not enabled on this browser, please enable and reload the page'
        );
    }
    const hasLngAndLat = latitude && longitude;
    return (
        <div className="bg-blue-100 h-screen">
            <Header />
            <main className="flex justify-center">
                <MapContainer>
                    {hasLngAndLat ? (
                        <Map zoom={12} lng={longitude} lat={latitude} />
                    ) : (
                        <MapLoading />
                    )}
                </MapContainer>
            </main>
        </div>
    );
}
