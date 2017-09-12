angular
  .module('app')
  .controller('mainCtrl', function($scope, mainSrvc) {

    $scope.searchMusic = function(searchStr){
      if(searchStr){
        mainSrvc.searchMusic(searchStr).then(function(response){
          console.log(response);

          
          $scope.artists = response;
        })

      }
      else {
        $scope.artists = '';
      }
    }

  });
