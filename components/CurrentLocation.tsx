import { getDistance, convertDistance, getCompassDirection } from 'geolib';

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
                <h3 className="text-lg font-extrabold mb-4 underline">
                    Relative to your position: 🧭
                </h3>
                <div>
                    <span className="font-bold">Distance (Km):</span>{' '}
                    {convertDistance(relativeDistance, 'km').toFixed(0)}{' '}
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
            <h3 className="text-lg font-extrabold mb-4 underline">{title}</h3>
            <div>
                <span className="font-bold">Latitude:</span>{' '}
                {longitude.toPrecision(4)}{' '}
            </div>
            <div>
                <span className="font-bold">Longitude:</span>{' '}
                {latitude.toPrecision(4)}{' '}
            </div>
        </div>
    );
};
