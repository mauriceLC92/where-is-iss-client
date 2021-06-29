import { gql } from '@apollo/client';

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

export const ADD_LOCATION = gql`
    mutation CreateLocation {
        createLocation {
            id
            message
            timestamp
            latitude
            longitude
        }
    }
`;

export const LAST_HOUR_LOCATIONS = gql`
    query GetLastHourLocations {
        lastHourLocations {
            id
            location {
                timestamp
                issPosition {
                    longitude
                    latitude
                }
            }
        }
    }
`;
