(function () {
  'use strict';

  angular
    .module('core')
    .directive('pagination', pagination);

  pagination.$inject = ['directiveProxyService'];

  function pagination(directiveProxyService) {
    return {
      restrict: 'E',
      terminal: true,
      priority: 1000000,
      replace: true,
      template: '<span></span>',
      link: function (scope, element, attrs) {
        directiveProxyService(attrs.target, scope, element, attrs, ['uib-pagination']);
      }
    };
  }

}());
