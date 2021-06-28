import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { ApolloProvider } from '@apollo/client';
import Head from 'next/head';

import client from '../apollo-client';

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <ApolloProvider client={client}>
            <Head>
                <title>Where is the ISS</title>
                <meta name="description" content="Track the ISS" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Component {...pageProps} />
        </ApolloProvider>
    );
}
export default MyApp;
