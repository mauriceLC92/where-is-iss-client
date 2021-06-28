import { Map } from '../components/Map/Map';

export default function Home() {
    return (
        <div className="bg-blue-100 h-screen">
            <main className="flex justify-center">
                <Map zoom={12} lng={30.337844} lat={59.955413} />
            </main>
        </div>
    );
}
