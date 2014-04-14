module.exports = function(config) {
  config.set({
    files : [
      'app/lib/angular/angular.js',
      'app/lib/angular-route/angular-route.js',
      'app/lib/angular-animate/angular-animate.js',
      'app/lib/angular-mocks/angular-mocks.js',
      'app/scripts/myApp.js',
      'app/scripts/ytCore.js',
      'app/scripts/app.js',
      'test/unit/**/*.js'
    ],
    basePath: '../',
    frameworks: ['jasmine'],
    reporters: ['progress'],
    browsers: ['Chrome'],
    autoWatch: false,
    singleRun: true,
    colors: true
  });
};
