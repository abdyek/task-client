module.exports = {
    devServer: {
        proxy: {
            '/api': {
                target: 'http://127.0.0.1:43307/api',
                changeOrigin: true
            }
        }
    }
}
