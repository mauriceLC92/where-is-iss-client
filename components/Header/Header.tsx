export const Header = () => {
    return (
        <header>
            <div className="bg-blue-100 flex justify-center flex-col items-center pt-4">
                <div>
                    <h1 className="text-6xl text-center">
                        Where Is ISS{' '}
                        <span
                            className="text-6xl"
                            role="img"
                            aria-label="satellite"
                        >
                            🛰️
                        </span>
                    </h1>
                </div>
                <div className="w-8/12 text-center mt-6">
                    <p className="text-xl leading-tight tracking-wide mb-4">
                        Check the <span className="font-bold">direction</span>{' '}
                        and <span className="font-bold">distance</span> of the
                        ISS from your current location.{' '}
                    </p>
                </div>
            </div>
        </header>
    );
};
