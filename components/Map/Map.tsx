import { useEffect, useState } from 'react';
import { useQuery } from '@apollo/client';
import GoogleMapReact from 'google-map-react';
import { LAST_HOUR_LOCATIONS } from '../../graphql-queries/queries';

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

const TrailMarker = ({ lat, lng }: { lat: number; lng: number }) => (
    <span className="text-4xl" role="img" aria-label="map">
        -
    </span>
);

export const Map = ({
    myLatitude,
    myLongitude,
    zoom,
    satelliteLongitude,
    satelliteLatitude,
}: MapProps) => {
    const { data, loading, error } = useQuery(LAST_HOUR_LOCATIONS, {
        pollInterval: 3600 * 1000,
    });
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
            {!loading &&
                data &&
                data.lastHourLocations.map((location: any) => {
                    return (
                        <TrailMarker
                            key={location.location.timestamp}
                            lat={location.location.issPosition.latitude}
                            lng={location.location.issPosition.longitude}
                        />
                    );
                })}
        </GoogleMapReact>
    );
};
