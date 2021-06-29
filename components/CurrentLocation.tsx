import { gql } from '@apollo/client';
import { getDistance, convertDistance, getCompassDirection } from 'geolib';

export const CURRENT_LOCATION = gql`
    query CurrentLocation {
        currentLocation {
            message
            timestamp
            issPosition {
                latitude
                longitude
            }
        }
    }
`;

interface ILocationData {
    satelliteLatitude: number;
    satelliteLongitude: number;
    myLatitude: number;
    myLongitude: number;
}

export const LocationData = ({
    satelliteLatitude,
    satelliteLongitude,
    myLatitude,
    myLongitude,
}: ILocationData) => {
    const relativeDistance = getDistance(
        { latitude: satelliteLatitude, longitude: satelliteLongitude },
        { latitude: myLatitude, longitude: myLongitude }
    );
    const directionToSatellite = getCompassDirection(
        { latitude: myLatitude, longitude: myLongitude },
        { latitude: satelliteLatitude, longitude: satelliteLongitude }
    );
    return (
        <div className="p-2 space-y-4">
            <LocationDataItem
                title={'Current ISS position: 🛰️'}
                latitude={satelliteLatitude}
                longitude={satelliteLongitude}
            />
            <LocationDataItem
                title={'Your position: 📍'}
                latitude={myLatitude}
                longitude={myLongitude}
            />
            <div>
                <h3 className="text-lg font-extrabold mb-4">
                    Relative to your position: 🧭
                </h3>
                <div>
                    <span className="font-bold">Distance (Km):</span>{' '}
                    {convertDistance(relativeDistance, 'km')}{' '}
                </div>
                <div>
                    <span className="font-bold">Direction:</span>{' '}
                    {directionToSatellite}{' '}
                </div>
            </div>
        </div>
    );
};

interface ILocationDataItem {
    title: string;
    latitude: number;
    longitude: number;
}

const LocationDataItem = ({
    title,
    longitude,
    latitude,
}: ILocationDataItem) => {
    return (
        <div>
            <h3 className="text-lg font-extrabold mb-4">{title}</h3>
            <div>
                <span className="font-bold">Latitude:</span> {longitude}{' '}
            </div>
            <div>
                <span className="font-bold">Longitude:</span> {latitude}{' '}
            </div>
        </div>
    );
};
