module.exports = {
    apps: [
        {
            name: 'app',
            script: './node_modules/bin/next',
            env_production: {
                NODE_ENV: 'production'
            }
        }
    ]
};
