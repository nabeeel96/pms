const CracoLessPlugin = require('craco-less');

// #02AA31
// #d32f2f

module.exports = {
    plugins: [
        {
            plugin: CracoLessPlugin,
            options: {
                lessLoaderOptions: {
                    lessOptions: {
                        math: 'always',
                        modifyVars: {},
                        javascriptEnabled: true,
                    },
                },
            },
        },
    ],
};