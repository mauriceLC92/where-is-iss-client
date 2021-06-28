import { useEffect, useState } from 'react';
import GoogleMapReact from 'google-map-react';

interface MapProps {
    myLatitude: number;
    myLongitude: number;
    satelliteLatitude: number;
    satelliteLongitude: number;
    zoom: number;
}

const Satellite = ({ lat, lng }: { lat: number; lng: number }) => (
    <span className="text-4xl" role="img" aria-label="map">
        🛰️
    </span>
);

const MyLocation = ({ lat, lng }: { lat: number; lng: number }) => (
    <span className="text-4xl" role="img" aria-label="map">
        📍
    </span>
);

export const Map = ({
    myLatitude,
    myLongitude,
    zoom,
    satelliteLongitude,
    satelliteLatitude,
}: MapProps) => {
    const [latitude, setLatitude] = useState(0);
    const [longitude, setLongitude] = useState(0);

    useEffect(() => {
        setLatitude(satelliteLatitude);
        setLongitude(satelliteLongitude);
    }, [satelliteLatitude, satelliteLongitude]);

    return (
        <GoogleMapReact
            bootstrapURLKeys={{
                key: `${process.env.NEXT_PUBLIC_GOOGLE_API_KEY}`,
                language: 'en',
            }}
            defaultCenter={{
                lat: latitude,
                lng: longitude,
            }}
            yesIWantToUseGoogleMapApiInternals
            defaultZoom={zoom}
        >
            <Satellite lat={latitude} lng={longitude} />
            <MyLocation lat={myLatitude} lng={myLongitude} />
        </GoogleMapReact>
    );
};
