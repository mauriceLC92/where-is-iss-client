import { useState } from 'react';
import GoogleMapReact from 'google-map-react';
interface MapProps {
    lat: number;
    lng: number;
    zoom: number;
}

const AnyReactComponent = ({ text }: { text: string }) => <div>{text}</div>;

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
            <AnyReactComponent text="My Marker" />
        </GoogleMapReact>
    );
};
