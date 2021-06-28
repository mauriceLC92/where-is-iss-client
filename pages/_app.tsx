import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { Header } from '../components/Header/Header';

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <Head>
                <title>Where is the ISS</title>
                <meta name="description" content="Track the ISS" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header />
            <Component {...pageProps} />
        </>
    );
}
export default MyApp;
