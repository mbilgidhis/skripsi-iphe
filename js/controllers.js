angular.module('starter.controllers', [])

.factory('DataPendaftar', function(){
  var data = {
    namaPendaftar : "",
    tempatLahir : "",
    tanggalLahir : "",
    jenisKelamin : "",
    statusPernikahan : "",
    agama : "",
    golonganDarah : "",
    kewarganegaraan : "",
    alamatAsal : "",
    noTelepon : "",
    email : "",
    pilihan1 : "",
    pilihan2 : "",
    tanggalTes : "",
    alamatHasil: "",
    namaOrtu: "",
    alamatOrtu: "",
    teleponOrtu : "",
    pekerjaanOrtu : "",
    namaSekolah: "",
    alamatSekolah: "",
    teleponSekolah : "",
    tahunLulus : "",
    sasmk : "",
    negriSwasta : "",
    jurusanSekolah : ""
  };
  return data;
})

.controller('AppCtrl', function($scope, $location) {
  $scope.menus = [  { name : "Home", href : "#/app/home"},
                    { name : "Informasi Pendaftaran", href : "#/app/informasi"},
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

.controller('Pendaftaran1Ctrl', function($scope, $state, DataPendaftar, $http){
  
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

  $scope.dataPendaftar1 = {
    namaPendaftar : "",
    tempatLahir : "",
    tanggalLahir : "",
    jenisKelamin : "",
    statusPernikahan : "",
    agama : "",
    golonganDarah : "",
    kewarganegaraan : "",
    alamatAsal : "",
    noTelepon : "",
    email : "",
    pilihan1 : "",
    pilihan2 : "",
    tanggalTes : "",
    alamatHasil: ""
  };


  $scope.gotoNextDaftar2 = function(){
    $state.go('app.pendaftaran2');
    console.log($scope.dataPendaftar1);
    angular.forEach($scope.dataPendaftar1, function(value, key){
      DataPendaftar[key] = value;
    });
    console.log(DataPendaftar);
  };       

  $scope.pilihans = {};

  var pilihan = $http({
    url: 'http://www.andibaskoro.com/iphe/api/prodis',
    method: 'get',
    dataType: 'json'
  }).success(function(data){
    $scope.pilihans = data.data;
  });

  $scope.dates = {};

  var date = $http({
    url: 'http://www.andibaskoro.com/iphe/api/dates',
    method: 'get',
    dataType: 'json'
  }).success(function(data){
    $scope.dates = data.data;
  });



})

.controller('Pendaftaran2Ctrl', function($scope, $state, DataPendaftar, $http){
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

  $scope.dataPendaftar2 = {
    namaOrtu: "",
    alamatOrtu: "",
    teleponOrtu : "",
    pekerjaanOrtu : ""
  };

  $scope.gotoNextDaftar3 = function(){
    $state.go('app.pendaftaran3');
    console.log($scope.pendaftaran2);
    angular.forEach($scope.dataPendaftar2, function(value, key){
      DataPendaftar[key] = value;
    });
    console.log(DataPendaftar);
  };

})

.controller('Pendaftaran3Ctrl', function($scope, $state, DataPendaftar, $http){

  $scope.smasmks = ['SMA', 'SMK'];
  // $scope.smasmks = [
  //               { name: "Pilih salah satu", value: null},
  //               { name: "SMA", value: 1 },
  //               { name: "SMK", value: 2},
  // ];

  $scope.sekolahs = [
                { name: "Pilih salah satu", value: null},
                { name: "Negri", value: 1 },
                { name: "Swasta", value: 2},
  ];

  $scope.jurusans = [
                { name: "Pilih salah satu", value: null},
                { name: "IPA/Setara", value: 1 },
                { name: "IPS/Setara", value: 2},
                { name: "Bahasa/Setara", value: 3},
                { name: "Lain-lain", value: 4},
  ];

  $scope.dataPendaftar3 = {
    namaSekolah: "",
    alamatSekolah: "",
    teleponSekolah : "",
    tahunLulus : "",
    sasmk : "",
    negriSwasta : "",
    jurusanSekolah : ""
  };

  $scope.daftar = function(){
    console.log($scope.dataPendaftar3);
    angular.forEach($scope.dataPendaftar3, function(value,key){
      DataPendaftar[key] = value;
    });
    console.log(DataPendaftar);
  };

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

