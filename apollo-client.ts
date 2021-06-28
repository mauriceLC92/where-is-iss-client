import { ApolloClient, gql, NormalizedCacheObject } from '@apollo/client';

import { cache } from './cache';

const isProd = process.env.NODE_ENV === 'production';
const client: ApolloClient<NormalizedCacheObject> = new ApolloClient({
    cache,
    uri: isProd
        ? process.env.NEXT_PUBLIC_PROD_URL
        : 'http://localhost:4000/graphql',
});

export default client;
