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
    smasmk : "",
    negriSwasta : "",
    jurusanSekolah : ""
  };
  return data;
})

.directive('dateInput', function(dateFilter){
  return {
    require: 'ng-model',
    template: '<input type="date"></input>',
    replace: true,
    link: function(scope,elm,attrs, ngModelCtrl){
      ngModelCtrl.$formatters.unshift(function(modelValue){
        return dateFilter(modelValue, 'yyyy-MM-dd');
      });
      ngModelCtrl.$parsers.unshift(function(viewValue){
        return new Date(viewValue);
      });
    }
  };

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

.controller('Pendaftaran1Ctrl', function($scope, $state, DataPendaftar, $http, $ionicPopup, $timeout, $ionicLoading){
  
  $ionicLoading.show({
    template: 'Loading data...'
  });

  $scope.kelamins = ['Laki-laki', 'Perempuan'];

  $scope.statusPernikahans = ["Belum-menikah", "Menikah"];

  $scope.agamas = ['Kristen', 'Katholik', 'Islam', 'Buddha', 'Hindu', 'Lain-lain'];

  $scope.bloods = [ "A", "B", "O", "AB" ];

  $scope.wargas = ['WNI', 'WNA'];

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
  $scope.dates = {};
  //load prodi first then load date
  $timeout(function(){

    var pilihan = $http({
      url: 'http://www.andibaskoro.com/iphe/api/prodis',
      method: 'get',
      dataType: 'json'
    }).success(function(dataProdi){
      //$ionicLoading.hide();
      $scope.dates = dataProdi.data;

      //load data tanggal test
      var date = $http({
        url: 'http://www.andibaskoro.com/iphe/api/dates',
        method: 'get',
        dataType: 'json'
      }).success(function(dataTanggal){
        //$ionicLoading.hide();
        $scope.pilihans = dataTanggal.data;
      }).error(function(e){
        var alertErrorTanggal = $ionicPopup.alert({
          title: 'Error',
          template: 'Gagal mengambil data pilihan tanggal test. Silakan cek koneksi internet Anda atau kemungkinan terjadi masalah dengan server. Ulangi setelah beberapa saat.'
        });
        alertErrorTanggal.then(function(res){
          //$ionicLoading.hide();
          console.log('');
        });
      });
      
    }).error(function(e){
      var alertErrorProdi = $ionicPopup.alert({
        title: 'Error',
        template: 'Gagal mengambil data prodi. Silakan cek koneksi internet Anda atau kemungkinan terjadi masalah dengan server. Ulangi setelah beberapa saat.'
      });
      alertErrorProdi.then(function(res){
        $ionicLoading.hide();
        console.log('');
        
      });
    });

  }, 1);

})

.controller('Pendaftaran2Ctrl', function($scope, $state, DataPendaftar, $http){
  
  $scope.pekerjaans = ['PNS', 'Wiraswasta', 'Pegawai-swasta', 'Guru', 'TNI/POLRI', 'Petani', 'Pensiunan', 'Lain-lain'];

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

  $scope.sekolahs = ['Negri', 'Swasta'];

  $scope.jurusans = ['IPA-Setara', 'IPS-Setara', 'Bahasa-Setara', 'Lain-lain'];

  $scope.dataPendaftar3 = {
    namaSekolah: "",
    alamatSekolah: "",
    teleponSekolah : "",
    tahunLulus : "",
    smasmk : "",
    negriSwasta : "",
    jurusanSekolah : ""
  };

  $scope.daftar = function(){
    //console.log($scope.dataPendaftar3);
    angular.forEach($scope.dataPendaftar3, function(value,key){
      DataPendaftar[key] = value;
    });
    // var daftar = $http.post('http://www.andibaskoro.com/iphe/api/daftar', DataPendaftar)
    // .success(function(data){
    //   console.log(data);
    //   alert('data');
    // })
    // .error(function(data){
    //   console.log("ERROR");
    //   alert('error');
    // });
    //console.log(DataPendaftar);
    console.log(angular.toJson(DataPendaftar));

    var daftar = $http({
      url: 'http://andibaskoro.com/iphe/api/daftars', 
      data: angular.toJson(DataPendaftar),
      method: 'POST',
      dataType: 'json',
      headers:{'Content-Type':'application/json'},
      transformRequest: function(obj) {
              var str = [];
              for(var p in obj)
              str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
              return str.join("&");
          }
    }).success(function(data){
      alert(data);
    }).error(function(e){
      alert("ERROR");
    });

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

