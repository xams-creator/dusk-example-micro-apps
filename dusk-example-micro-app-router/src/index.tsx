import { createApp } from '@xams-framework/dusk';

import './index.scss';
import App from '@/business/app';
import router from './configuration/router';
import createDuskMicroApp from '@/configuration/plugins/dusk-plugin-micro-app';

const app = createApp({
    container: '#root',
    redux: {
        logger: {
            collapsed: true,
        },
    },
});

app
    .use(createDuskMicroApp())
    .router(router)
    .startup(<App />)
;

