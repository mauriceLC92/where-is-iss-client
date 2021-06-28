export const MapContainer = ({ children }: { children: React.ReactNode }) => {
    return (
        <div
            style={{ height: '70vh', width: '60%' }}
            className="border-gray-700 border-solid border-4 shadow-lg rounded-lg flex items-center justify-center"
        >
            {children}
        </div>
    );
};
