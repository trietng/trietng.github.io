import { useEffect } from 'react';
import CMS from 'decap-cms-app';
import jsYaml from 'js-yaml';

export default function DecapInitializer() {
    async function localConfig() {
        const response = await fetch('/admin/config.yml');
        const data = await response.text();
        const config: any = jsYaml.load(data);
        CMS.init({ config: config });
    }
    
    useEffect(() => {
        if (import.meta.env.DEV) {
            localConfig();
        }
        else {
            CMS.init();
        }
    }, []);

    return null;
}