import { useState, useEffect } from 'react';

export const useCurrentCoordinates = () => {
    // -26.17216623002055
    // 28.043785715092408
    const [latitude, setLatitude] = useState(0);
    const [longitude, setLongitude] = useState(0);
    const [error, setError] = useState(false);

    const displayLocationInfo = (position: any) => {
        const lng = position.coords.longitude;
        const lat = position.coords.latitude;
        setLatitude(lat);
        setLongitude(lng);
    };

    useEffect(() => {
        if ('geolocation' in navigator) {
            navigator.geolocation.getCurrentPosition(displayLocationInfo);
        } else {
            setError(true);
        }
    }, []);

    return { latitude, longitude, error };
};
