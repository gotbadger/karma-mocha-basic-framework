// Karma configuration
// Generated on Tue Jul 09 2013 13:11:14 GMT+0100 (BST)

module.exports = function(karma) {
  karma.set({

    // base path, that will be used to resolve files and exclude
    basePath: './',


    // frameworks to use
    frameworks: ['mocha'],


    // list of files / patterns to load in the browser
    files: [
      {pattern: 'node_modules/chai/chai.js',include: true},
      'src/*.js',
      'test/*.js'
    ],


    // list of files to exclude
    exclude: [
      'karma.conf.js'
    ],


    // test results reporter to use
    // possible values: 'dots', 'progress', 'junit', 'growl', 'coverage'
    reporters: ['progress','coverage'],
    
    preprocessors : {
        'src/*.js': 'coverage'
    },

    //Code Coverage options. report type available:
    //- html (default)
    //- lcov (lcov and html)
    //- lcovonly
    //- text (standard output)
    //- text-summary (standard output)
    //- cobertura (xml format supported by Jenkins)
    coverageReporter : {
        // cf. http://gotwarlost.github.com/istanbul/public/apidocs/
        type : 'html',
        dir : 'coverage/'
    },
    // web server port
    port: 9876,


    // cli runner port
    runnerPort: 9100,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: karma.LOG_DISABLE || karma.LOG_ERROR || karma.LOG_WARN || karma.LOG_INFO || karma.LOG_DEBUG
    logLevel: karma.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // Start these browsers, currently available:
    // - Chrome
    // - ChromeCanary
    // - Firefox
    // - Opera
    // - Safari (only Mac)
    // - PhantomJS
    // - IE (only Windows)
    browsers: ['PhantomJS'],


    // If browser does not capture in given timeout [ms], kill it
    captureTimeout: 60000,


    // Continuous Integration mode
    // if true, it capture browsers, run tests and exit
    singleRun: false,

    plugins : [
    'karma-mocha',
    'karma-phantomjs-launcher',
    'karma-coverage'
    ],
  });
};
