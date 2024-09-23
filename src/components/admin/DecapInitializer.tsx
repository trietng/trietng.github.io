import { useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import CMS from 'decap-cms-app';

export default function DecapInitializer() {
    useEffect(() => {
        CMS.init();
    }, []);
    return null;
}