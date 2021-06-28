import { useQuery, gql } from '@apollo/client';

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

export const CurrentLocation = () => {
    return (
        <div>
            <div>Latitude: </div>
            <div>Longitude: </div>
        </div>
    );
};
