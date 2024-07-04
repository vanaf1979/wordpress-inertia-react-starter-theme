import {createRoot} from 'react-dom/client';
import {createInertiaApp} from '@inertiajs/react';
import {InertiaProgress} from '@inertiajs/progress'
import Layout from './shared/Layout.jsx'

InertiaProgress.init()

createInertiaApp({
    resolve: (name) => {
        const page = require(`./Pages/${name}.jsx`).default
        page.layout = page.layout || (page => <Layout children={page}/>);
        return page
    },
    setup({el, App, props}) {
        const root = createRoot(el);
        root.render(
            <App {...props} />
        );
    },
})
