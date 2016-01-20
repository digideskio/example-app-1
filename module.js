define([
  'angular',
  'app/app'
], function(angular, app)  {

  var module = angular.module('nginx-app', []);
  app.useModule(module);

  module.config(function($routeProvider) {
    $routeProvider
      .when('/nginx/stream', {
        templateUrl: 'public/plugins/nginx-app/partials/stream.html',
      });
  });

  function configViewDirective() {
    console.log('app directive func');
    return {templateUrl: 'public/plugins/nginx-app/partials/config.html'};
  }

  return {
    configView: configViewDirective
  };

});