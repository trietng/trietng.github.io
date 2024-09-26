import { useEffect } from 'react';
// import CMS from 'decap-cms-app';
import jsYaml from 'js-yaml';


/**
 * @deprecated Due to Decap have some serious issues in i18n, this component is not used anymore.
 */
export default function DecapInitializer() {
    async function localConfig() {
        const response = await fetch('/admin/config-test.yml');
        const data = await response.text();
        const config: any = jsYaml.load(data);
        // CMS.init({ config: config });
    }
    
    useEffect(() => {
        if (import.meta.env.DEV) {
            localConfig();
        }
        else {
           // CMS.init();
        }
    }, []);

    return null;
}