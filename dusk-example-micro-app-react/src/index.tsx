import { createApp } from '@xams-framework/dusk';

import './index.scss';
import App from '@/business/app';

const app = createApp({
    container: '#root',
    redux: {
        logger: {
            collapsed: true,
        },
    },
});

app.startup(<App />);
// app.use(createDuskAppInitializer())
//     .router(router)
//     .startup(<App />);

window.app1 = app;
// @ts-ignore
console.log(app1);
