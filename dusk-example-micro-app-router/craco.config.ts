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
        headers: {
            'Access-Control-Allow-Origin': '*',
        },
    },
});
