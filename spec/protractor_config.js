exports.config = {
    capabilities: {
        browserName: 'phantomjs',
        'phantomjs.binary.path': require('phantomjs').path
    },
    specs: ['specs/**/*_spec.js']
}
