
angular.module('app.routes',[
    'ui.router'
]);
angular.module('app.routes')
    .config(routesConfig);

routesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function routesConfig($stateProvider, $urlRouterProvider){
    $urlRouterProvider.otherwise('/welcome');
    $stateProvider
        .state('app', {
            url: '/app',
            views: {
                '': {
                    templateUrl: 'views/includes/base.html'
                }
            }
        })
        .state('app.home', {
            url: '/home',
            views: {
                'main@app':{
                    templateUrl:'views/pages/home.html'
                }
            }
        })
        .state('app.dataOrigin',{
            url:'/origin' ,
            views:{
                'main@app': {
                    templateUrl:'views/pages/dataOrigin.html'
                }
            }
        })
        .state('app.dataDispose',{
            url:'/dispose',
            views:{
                'main@app':{
                    templateUrl:'views/pages/dataDispose.html'
                }
            }
        })
        .state('app.analyze',{
            url:'/dispose',
            views:{
                'main@app':{
                    templateUrl:'views/pages/analyze.html'
                }
            }
        })
        .state('app.dashBoard',{
            url:'/dashBoard',
            views:{
                'main@app':{
                    templateUrl:'views/pages/dashBoard.html'
                }
            }
        });
}