import { CracoConfig } from '@craco/types';

function defineCraco(options: CracoConfig): CracoConfig {
    return options;
}

export default defineCraco({
    plugins: [],
    webpack: {
        alias: {
            '@': 'src',
        },
    },
    devServer: {
        client: {
            overlay: false,
        },
        proxy: {
            '/api': {
                target: 'https://yapi.loghub.com/mock/198/',
                changeOrigin: true,
            },
        },
        // headers: {
        //     'Access-Control-Allow-Origin': '*',
        // },
    },
});
