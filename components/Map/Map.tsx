import { useState } from 'react';
import GoogleMapReact from 'google-map-react';
interface MapProps {
    lat: number;
    lng: number;
    zoom: number;
}

const Satellite = () => (
    <span className="text-4xl" role="img" aria-label="map">
        🛰️
    </span>
);

export const Map = ({ lat, lng, zoom }: MapProps) => {
    const [draggable] = useState(true);
    const [latitude, setLatitude] = useState(lat);
    const [longitude, setLongitude] = useState(lng);

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
            <Satellite />
        </GoogleMapReact>
    );
};
