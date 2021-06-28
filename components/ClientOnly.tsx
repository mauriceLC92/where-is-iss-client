import { useEffect, useState } from 'react';

export const ClientOnly = ({
    children,
    ...delegated
}: {
    children: React.ReactNode;
    delegated?: any;
}) => {
    const [hasMounted, setHasMounted] = useState(false);

    useEffect(() => {
        setHasMounted(true);
    }, []);

    if (!hasMounted) {
        return null;
    }

    return <div {...delegated}>{children}</div>;
};
