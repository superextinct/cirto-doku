module.exports = {
    exportTrailingSlash: true,
    async rewrites() {
        return [
            {
                source: '/:pageId*',
                destination: '/:pageId*.html',
            }
        ]
    }
}