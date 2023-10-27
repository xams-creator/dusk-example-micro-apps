import { definePlugin } from '@xams-framework/dusk';
import microApp from '@micro-zoe/micro-app';
import cookie from 'js-cookie';

export default function createDuskMicroApp() {
    return definePlugin({
        name: 'dusk-plugin-micro-app',
        setup(app: any) {
            microApp.start();

            app.$cookie = cookie;
            app.$cookie.remove('Bearer');
            app.$cookie.set(
                'Bearer',
                'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ6eXgiLCJleHAiOjE2OTgzMjUxMzg2MjEsImlkIjoiZWU3MDEwNTYtNDg2Zi00OGJhLWFlODQtNTA1ZDRmOTYyMDc3In0.5mzojXBlXOqKIM2GLPWoLspdH8JQrWkVEhq44UevtxE',
            );
        },
    });
}
