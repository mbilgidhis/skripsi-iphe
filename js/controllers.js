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
                    { name : "Informasi PMB", href : "#/app/informasi"},
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

.controller('Pendaftaran1Ctrl', function($scope, $state, DataPendaftar, $http, $ionicPopup){
  
  $scope.kelamins = ['Laki-laki', 'Perempuan'];
  //$scope.kelamins = [
  //              { name: "Pilih salah satu", value: null},
  //              { name: "Laki-laki", value: 1 },
  //              { name: "Perempuan", value: 2},
  //];

  $scope.statuss = ['Belum menikah', 'Menikah'];
  //$scope.statuss = [
  //              { name: "Pilih salah satu", value: null},
  //              { name: "Belum menikah", value: 1 },
  //              { name: "Menikah", value: 2},
  //];

  $scope.agamas = ['Kristen', 'Katholik', 'Islam', 'Buddha', 'Hindu', 'Lain-lain'];
  //$scope.agamas = [
  //              { name: "Pilih salah satu", value: null},
  //              { name: "Kristen", value: 1 },
  //              { name: "Katholik", value: 2},
  //              { name: "Islam", value: 3},
  //              { name: "Buddha", value: 4},
  //              { name: "Hindu", value: 5},
  //              { name: "Lain-lain", value: 6},
  //];

  $scope.bloods = [ "A", "B", "O", "AB" ];

  $scope.wargas = ['WNI', 'WNA'];
  //$scope.wargas = [
  //              { name: "Pilih salah satu", value: null},
  //              { name: "WNI", value: 1 },
  //              { name: "WNA", value: 2},
  //];

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
  }).error(function(e){
    var alertErrorPilihan = $ionicPopup.alert({
      title: 'Error',
      template: 'Gagal mengambil data pilihan prodi. Silakan cek koneksi internet Anda atau kemungkinan terjadi masalah dengan server. Ulangi setelah beberapa saat.'
    });
    alertErrorPilihan.then(function(res){
      console.log('');
    });
  });

  $scope.dates = {};

  var date = $http({
    url: 'http://www.andibaskoro.com/iphe/api/dates',
    method: 'get',
    dataType: 'json'
  }).success(function(data){
    $scope.dates = data.data;
  }).error(function(e){
    var alertErrorTanggal = $ionicPopup.alert({
      title: 'Error',
      template: 'Gagal mengambil data tanggal tes. Silakan cek koneksi internet Anda atau kemungkinan terjadi masalah dengan server. Ulangi setelah beberapa saat.'
    });
    alertErrorTanggal.then(function(res){
      console.log('');
    });
  });



})

.controller('Pendaftaran2Ctrl', function($scope, $state, DataPendaftar, $http){
  
  $scope.pekerjaans = ['PNS', 'Wiraswasta', 'Pegawai swasta', 'Guru', 'TNI/POLRI', 'Petani', 'Pensiunan', 'Lain-lain'];
  //$scope.pekerjaans = [
  //              { name: "Pilih salah satu", value: null},
  //              { name: "PNS", value: 1 },
  //              { name: "Wiraswasta", value: 2},
  //              { name: "Pegawai swasta", value: 3},
  //              { name: "Guru", value: 4},
  //              { name: "TNI/POLRI", value: 5},
  //              { name: "Petani", value: 6},
  //              { name: "Pensiunan", value: 7},
  //              { name: "Lain-lain", value: 8},
  //];

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

  $scope.sekolahs = ['Negri', 'Swasta'];
  //$scope.sekolahs = [
  //              { name: "Pilih salah satu", value: null},
  //              { name: "Negri", value: 1 },
  //              { name: "Swasta", value: 2},
  //];

  $scope.jurusans = ['IPA/Setara', 'IPS/Setara', 'Bahasa/Setara', 'Lain-lain'];
  //$scope.jurusans = [
  //              { name: "Pilih salah satu", value: null},
  //              { name: "IPA/Setara", value: 1 },
  //              { name: "IPS/Setara", value: 2},
  //              { name: "Bahasa/Setara", value: 3},
  //              { name: "Lain-lain", value: 4},
  //];

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

.controller('HasilCtrl', function($scope, $http, $ionicLoading, $ionicPopup){
  $scope.id;
  $scope.getStatus = function(id){
    //console.log(id);
    if(!angular.isUndefined(id)){
      $ionicLoading.show({
        template: 'Loading...'
      });
      $http({
        url: 'http://www.andibaskoro.com/iphe/api/status/'+id,
        method: 'get',
        dataType: 'json'
      }).success(function(data){
        if(data.status != 1){
          $scope.flagZero = true;
          $scope.flagShow = false;
          $scope.statusZero = data.data;
        }else{
          $scope.flagZero = false;
          $scope.flagShow = true;
          $scope.status = data.data;
        }
        $ionicLoading.hide();
      }).error(function(e){
        $ionicLoading.hide();
        var alertError = $ionicPopup.alert({
          title: 'Error',
          template: 'Gagal mengambil data. Silakan cek koneksi internet Anda atau kemungkinan terjadi masalah dengan server. Ulangi setelah beberapa saat.'
        });
        alertError.then(function(res){
          console.log('');
        });
      });
    }else{
      //alert("hello");
      var alertPopup = $ionicPopup.alert({
           title: 'Error',
           template: 'Nomor Pendaftaran harus diisi.'
         });
         alertPopup.then(function(res) {
           console.log('');
         });
    }

  }
})

.controller('KontakCtrl', function(){

});

