const withPlugins = require('next-compose-plugins');
const withTypescript = require('@zeit/next-typescript');
const withImages = require('next-images');
const withCSS = require('@zeit/next-css');
const withSass = require('@zeit/next-sass');
const withTM = require('next-plugin-transpile-modules');

const nextConfig = {
    target: 'serverless',
    webpack(config, options) {
        config.module.rules.push({
            test: /\.(eot|woff|woff2|ttf)$/,
            use: {
                loader: 'url-loader',
                options: {
                    limit: 100000,
                    name: '[name].[ext]'
                }
            }
        });

        return config;
    }
};

module.exports = withPlugins(
    [
      withImages,
      withTypescript,
      withSass,
      withCSS,
      [withTM, { transpileModules: ['react-flippy'] }]
    ],
    nextConfig
);
