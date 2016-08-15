(function () {
  'use strict';

  angular
    .module('core')
    .directive('proxy', directiveProxy);

  directiveProxy.$inject = ['directiveProxyService'];

  function directiveProxy(directiveProxyService) {

    return {
      restrict: 'E',
      terminal: true,
      priority: 1000000,
      replace: true,
      template: '<span></span>',
      link: function (scope, element, attrs) {
        directiveProxyService(attrs.target, scope, element, attrs, ['target']);
      }
    };
  }

}());
