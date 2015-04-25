angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $location) {
  $scope.menus = [  { name : "Informasi Pendaftaran", href : "#/app/informasi"},
                    { name : "Pendaftaran", href: "#/app/pendaftaran1"},
                    { name : "Cek Hasil", href : "#/app/hasil"},
                    { name : "Kontak Kami", href : "#/app/kontak"}];

  $scope.isActive = function(menu){
    if ('#'+$location.path() == menu.href){
      return true;
    }
  }
})

.controller('InformasiCtrl', function($scope){

})

.controller('PendaftaranCtrl', function($scope, $state){
  
  $scope.tanggals = [{name: "Pilih tanggal", value: null}];
  for(var x = 1; x <= 31; x++){
    var date = {name: x, value: x};
    $scope.tanggals.push(date);
  }

  $scope.bulans = [
                { name: "Pilih bulan", value: null},
                { name: "Jan", value: 1 },
                { name: "Feb", value: 2},
                { name: "Mar", value: 3},
                { name: "Apr", value: 4},
                { name: "Mei", value: 5},
                { name: "Jun", value: 6},
                { name: "Jul", value: 7},
                { name: "Agt", value: 8},
                { name: "Sep", value: 9},
                { name: "Okt", value: 10},
                { name: "Nov", value: 11},
                { name: "Des", value: 12},
  ];

  $scope.bloods = [ "A", "B", "O", "AB" ];
     
  $scope.gotoNextDaftar2 = function(){
    $state.go('app.pendaftaran2');
  };          
})

.controller('HasilCtrl', function($scope){

})
.controller('KontakCtrl', function(){

});

