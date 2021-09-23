const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
    app.use(
        '/3/movie',
        createProxyMiddleware({
            target: 'https://api.themoviedb.org',
            changeOrigin: true,
        })
    );
    app.use(
        '/3/search',
        createProxyMiddleware({
            target:'https://api.themoviedb.org',
            changeOrigin:true,
        })
    );
    app.use(
        '/api',
        createProxyMiddleware({
            target:'http://localhost:5000',
            changeOrigin:true,
        })
    );

   
};