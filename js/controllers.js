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

.controller('HomeCtrl', function(){
  
})

.controller('InformasiCtrl', function($scope){

})

.controller('PendaftaranCtrl', function($scope, $state){
  
  $scope.tanggals = [{name: "Pilih tanggal", value: null}];
  for(var x = 1; x <= 31; x++){
    var date = {name: x, value: x};
    $scope.tanggals.push(date);
  }

  $scope.kelamins = [
                { name: "Pilih salah satu", value: null},
                { name: "Laki-laki", value: 1 },
                { name: "Perempuan", value: 2},
  ];

  $scope.statuss = [
                { name: "Pilih salah satu", value: null},
                { name: "Belum menikah", value: 1 },
                { name: "Menikah", value: 2},
  ];

  $scope.agamas = [
                { name: "Pilih salah satu", value: null},
                { name: "Kristen", value: 1 },
                { name: "Katholik", value: 2},
                { name: "Islam", value: 3},
                { name: "Buddha", value: 4},
                { name: "Hindu", value: 5},
                { name: "Lain-lain", value: 6},
  ];

  $scope.bloods = [ "A", "B", "O", "AB" ];

  $scope.wargas = [
                { name: "Pilih salah satu", value: null},
                { name: "WNI", value: 1 },
                { name: "WNA", value: 2},
  ];

  $scope.jurusans = [
                { name: "Pilih salah satu", value: null},
                { name: "IPA/Setara", value: 1 },
                { name: "IPS/Setara", value: 2},
                { name: "Bahasa/Setara", value: 3},
                { name: "Lain-lain", value: 4},
  ];

  $scope.pekerjaans = [
                { name: "Pilih salah satu", value: null},
                { name: "PNS", value: 1 },
                { name: "Wiraswasta", value: 2},
                { name: "Pegawai swasta", value: 3},
                { name: "Guru", value: 4},
                { name: "TNI/POLRI", value: 5},
                { name: "Petani", value: 6},
                { name: "Pensiunan", value: 7},
                { name: "Lain-lain", value: 8},
  ];

  $scope.smasmks = [
                { name: "Pilih salah satu", value: null},
                { name: "SMA", value: 1 },
                { name: "SMK", value: 2},
  ];

  $scope.sekolahs = [
                { name: "Pilih salah satu", value: null},
                { name: "Negri", value: 1 },
                { name: "Swasta", value: 2},
  ];


  $scope.gotoNextDaftar2 = function(){
    $state.go('app.pendaftaran2');
  };       

  $scope.gotoNextDaftar3 = function(){
    $state.go('app.pendaftaran3')
  }

  $scope.pilihan1s = [
                { name: "Prodi", value: null},
                { name: "Pendidikan Dokter", value: 1 },
                { name: "Teologi", value: 2},
                { name: "Manajemen", value: 3},
                { name: "Akuntansi", value: 4},
                { name: "Teknik Arsitektur", value: 5},
                { name: "Desain Produk", value: 6},
                { name: "Teknik Informatika", value: 7},
                { name: "Sistem Informasi", value: 8},
                { name: "Biologi", value: 9},
  ];

  $scope.pilihan2s = [
                { name: "Prodi", value: null},
                { name: "Pendidikan Dokter", value: 1 },
                { name: "Teologi", value: 2},
                { name: "Manajemen", value: 3},
                { name: "Akuntansi", value: 4},
                { name: "Teknik Arsitektur", value: 5},
                { name: "Desain Produk", value: 6},
                { name: "Teknik Informatika", value: 7},
                { name: "Sistem Informasi", value: 8},
                { name: "Biologi", value: 9},
  ];

})

.controller('ProdiCtrl', function($scope){

})

.controller('JadwalCtrl', function($scope){
  
})

.controller('BiayaCtrl', function($scope){
  
})

.controller('HasilCtrl', function($scope){
  $scope.getStatus = function(){
    $scope.status = "Hello";
  }
})

.controller('KontakCtrl', function(){

});

