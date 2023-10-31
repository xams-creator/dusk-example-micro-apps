import { defineConfig } from 'vite';

export default defineConfig(({ mode }) => {
    return {
        base: '/',
        publicDir: 'public',
        server: {
            port: 1342,
            proxy: {},
        },
        envPrefix: ['VITE_'],
    };
});



