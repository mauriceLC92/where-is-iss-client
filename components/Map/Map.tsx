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
        <div
            style={{ height: '70vh', width: '60%' }}
            className="border-gray-700 border-solid border-4 shadow-lg rounded-lg flex items-center justify-center"
        >
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
        </div>
    );
};
