
module.exports = function ( karma ) {
    karma.set({
        /**
         * From where to look for files, starting with the location of this file.
         */
        basePath: '../',
        browserNoActivityTimeout: 60000,
        /**
         * This is the list of file patterns to load into the browser during testing.
         */
        files: [
            'node_modules/jquery/dist/jquery.min.js',
            'node_modules/angular/angular.min.js',
            'node_modules/angular-route/angular-route.min.js',
            'node_modules/bootstrap/dist/js/bootstrap.min.js',
            'node_modules/angular-translate/dist/angular-translate.min.js',
            'node_modules/proj4/dist/proj4.js',
            'external/pouchdb.js',
            'node_modules/elm-pep/dist/elm-pep.js',
            'node_modules/ol/dist/ol.js',
            'node_modules/blob-util/dist/blob-util.min.js',
            'node_modules/maplib/dist/maplib-min.js',
            'node_modules/xml-to-json/xml.min.js',
            'node_modules/xml-to-json/json2xml.min.js',
            'node_modules/angular-utils-pagination/dirPagination.js',
            'node_modules/featherlight/release/featherlight.min.js',
            'node_modules/angular-sanitize/angular-sanitize.min.js',
            'build/templates-app.js',
            'node_modules/angular-mocks/angular-mocks.js',
            
        'src/**/*.js',
    ],
    exclude: [
        'src/assets/**/*.js',
        '**/testMap.js'
    ],
        frameworks: [ 'jasmine' ],
        plugins: [
        'karma-jasmine',
        'karma-ng-html2js-preprocessor',
        'karma-teamcity-reporter',
        'karma-firefox-launcher',
        'karma-chrome-launcher',
        'karma-phantomjs-launcher',
        'karma-ie-launcher',
        'karma-htmlfile-reporter',
        'karma-coverage' ],


    preprocessors: {
        'src/**/*.js': ['coverage']
    },

    /**
     * How to report, by default.
     */
    reporters: 'teamcity',

    htmlReporter: {
        outputFile: '../test/test_report.html'
    },

    /**
     * On which port should the browser connect, on which port is the test runner
     * operating, and what is the URL path for the browser to use.
     */
        port: 9018,
        runnerPort: 9100,
        // urlRoot: '/',

    /**
     * Disable file watching by default.
     */
        autoWatch: true,

    /**
     * The list of browsers to launch to test on. This includes only "Firefox" by
     * default, but other browser names include:
     * Chrome, ChromeCanary, Firefox, Opera, Safari, PhantomJS
     *
     * Note that you can also use the executable name of the browser, like "chromium"
     * or "firefox", but that these vary based on your operating system.
     *
     * You may also leave this blank and manually navigate your browser to
     * http://localhost:9018/ when you're running tests. The window/tab can be left
     * open and the tests will automatically occur there during the build. This has
     * the aesthetic advantage of not launching a browser every time you save.
     */
        browsers: [
        /* 'Firefox',*/
        /* 'Chrome', */
        /*'IE',*/
        'PhantomJS'
       ],

    /**
     * Continuous Integration mode
     */
     singleRun: true

});
};

