export const InformationBarContainer = ({
    children,
}: {
    children: React.ReactNode;
}) => {
    return (
        <div
            style={{ height: '70vh', width: '15%' }}
            className="border-gray-700 border-solid border-4 shadow-lg rounded-lg flex flex-col items-center ml-4"
        >
            {children}
        </div>
    );
};
