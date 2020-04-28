'use strict';

angular.module('myApp.main', ['ngRoute', 'ui.bootstrap'])
    .config(['$routeProvider', function($routeProvider) {
      $routeProvider.when('/main', {
        templateUrl: 'main/main.html',
        controller: 'ViewMainCtrl'
      });
    }])
    .factory('myFactory', function () {
        let items = [
            {id: '0', name: 'Марина', value: '1111111'},
            {id: '1', name: 'Ирина', value: '2222222'},
            {id: '2', name: 'Азар', value: '3333333'},
        ];
        return {
            getItems: function () {
                return items;
            },
            delete: function (user) {
                items = items.filter(item => item.id !== user.id);
                return items;
            }
        }
    })
    .controller('ViewMainCtrl', function ($scope, myFactory) {
        $scope.myFactory = myFactory;
    })
    .controller('CountComponentCtrl', function ($scope, myFactory) {
        $scope.myFactory = myFactory;
    })
    .controller('InputCtrl', function ($scope, myFactory) {
        $scope.showError = false;
        $scope.myFactory = myFactory;
        $scope.getError = function(error) {
            if (angular.isDefined(error)) {
                if (error.required) {
                    return "Поля не могут быть пустыми"
                } if(error.pattern) {
                    return 'Введенный номер должен состоять из 7 цифр'
                }
            }
        };
        $scope.addItem = function (newUser, myForm) {
            if(myForm.$valid) {
                myFactory.getItems().push({id: myFactory.getItems().length.toString(), name: newUser.name, value:newUser.number});
                console.log('Item is pushed');
                $scope.newUser = {};
                $scope.message = " ";
                $scope.showError = false;
                //на $scope.reset() выдает ошибку, что это не функция
            } else {
                $scope.showError = true;
            }

        }
    });
