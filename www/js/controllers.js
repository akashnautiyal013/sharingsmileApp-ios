angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout,$ionicSlideBoxDelegate) {
  $scope.slideIndex = 0;

            // Called each time the slide changes
        $scope.slideChanged = function(index) {
            $scope.slideIndex = index;
            console.log("slide Change");

            if ($scope.slideIndex == 0){
                console.log("slide 1");
            }

            else if ($scope.slideIndex == 1){
                console.log("slide 2");
            }

            else if ($scope.slideIndex == 2){
                console.log("slide 3");
            }

        };

        $scope.activeSlide = function (index) {
            $ionicSlideBoxDelegate.slide(index);
        };
  $scope.fbLogin = function () {
        FB.login(function (response) {
            if (response.authResponse) {
                getUserInfo();
            } else {
                console.log('User cancelled login or did not fully authorize.');
            }
        }, {scope: 'email,user_photos,user_videos'});
 
        function getUserInfo() {
            // get basic info
            FB.api('/me', function (response) {
                console.log('Facebook Login RESPONSE: ' + angular.toJson(response));
                // get profile picture
                FB.api('/me/picture?type=normal', function (picResponse) {
                    console.log('Facebook Login RESPONSE: ' + picResponse.data.url);
                    response.imageUrl = picResponse.data.url;
                    // store data to DB - Call to API
                    // Todo
                    // After posting user data to server successfully store user data locally
                    var user = {};
                    user.name = response.name;
                    user.email = response.email;
                    if(response.gender) {
                        response.gender.toString().toLowerCase() === 'male' ? user.gender = 'M' : user.gender = 'F';
                    } else {
                        user.gender = '';
                    }
                    user.profilePic = picResponse.data.url;
                    $cookieStore.put('userInfo', user);
                    $state.go('dashboard');
 
                });
            });
        }
    };
    // END FB Login
 
    // Google Plus Login
    $scope.gplusLogin = function () {
        var myParams = {
            // Replace client id with yours
            'clientid': '18301237550-3vlqoed2en4lvq6uuhh88o2h1l9m70tr.apps.googleusercontent.com',
            'cookiepolicy': 'single_host_origin',
            'callback': loginCallback,
            'approvalprompt': 'force',
            'scope': 'https://www.googleapis.com/auth/plus.login https://www.googleapis.com/auth/plus.profile.emails.read'
        };
        gapi.auth.signIn(myParams);
 
        function loginCallback(result) {
            if (result['status']['signed_in']) {
                var request = gapi.client.plus.people.get({'userId': 'me'});
                request.execute(function (resp) {
                    console.log('Google+ Login RESPONSE: ' + angular.toJson(resp));
                    var userEmail;
                    if (resp['emails']) {
                        for (var i = 0; i < resp['emails'].length; i++) {
                            if (resp['emails'][i]['type'] == 'account') {
                                userEmail = resp['emails'][i]['value'];
                            }
                        }
                    }
                    // store data to DB
                    var user = {};
                    user.name = resp.displayName;
                    user.email = userEmail;
                    if(resp.gender) {
                        resp.gender.toString().toLowerCase() === 'male' ? user.gender = 'M' : user.gender = 'F';
                    } else {
                        user.gender = '';
                    }
                    user.profilePic = resp.image.url;
                    $cookieStore.put('userInfo', user);
                    $state.go('dashboard');
                });
            }
        }
    };
    // END Google Plus Login
 



var mySwiper = new Swiper('.swiper-container',{
    pagination: '.pagination',
    paginationClickable: true,
    mode: 'vertical'
  })

 
    window.$ = jQuery;

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

 
  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };
  
   

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

.controller('campainCtrl', function($scope){
   
  $(function(){
  var gallery = $('.swiper-container').swiper({
    slidesPerView:'auto',
    watchActiveIndex: true,
    centeredSlides: true,
    pagination:'.pagination',
    paginationClickable: true,
    resizeReInit: true,
    keyboardControl: true,
    grabCursor: true,
    onImagesReady: function(){
      changeSize()
    }
  })
  function changeSize() {
    //Unset Width
    $('.swiper-slide').css('width','')
    //Get Size
    var imgWidth = $('.swiper-slide img').width();
    if (imgWidth+40>$(window).width()) imgWidth = $(window).width()-40;
    //Set Width
    $('.swiper-slide').css('width', imgWidth+40);
  }
  
  changeSize()

  //Smart resize
  $(window).resize(function(){
    changeSize()
    gallery.resizeFix(true) 
  })
})

})

.controller('ngomicrositeCtrl', function($scope, $stateParams){

})
.controller('ngolistingCtrl', function($scope) {
  $scope.ngos = [
    { title: 'nav yuvak mangal dal', id: 1 },
    { title: 'sharing smiles', id: 2 },
    { title: 'smile foundation', id: 3 },
    { title: 'smile train', id: 4 },
    { title: 'redcode', id: 5 },
    { title: 'mahilya mangal', id: 6 }
  ];
})

.controller('settingCtrl', function($scope) {
  var image_array = new Array();
      image_array = [
        {image: 'http://www.shindiristudio.com/content_slider/content/our_team/1.jpg', link_url: 'content/our_team/1big.jpg'},
          // image for the first layer, goes with the text from id="sw0"
        {image: 'http://www.shindiristudio.com/content_slider/content/our_team/2.jpg', link_url: 'content/our_team/2big.jpg'},
          // image for the second layer, goes with the text from id="sw1"
        {image: 'http://www.shindiristudio.com/content_slider/content/our_team/3.jpg', link_url: 'content/our_team/3big.jpg'},
          // image for the third layer, goes with the text from id="sw2"
        {image: 'http://www.shindiristudio.com/content_slider/content/our_team/4.jpg', link_url: 'content/our_team/4big.jpg'},
          // ...
        {image: 'http://www.shindiristudio.com/content_slider/content/our_team/5.jpg', link_url: 'content/our_team/5big.jpg'},
        {image: 'http://www.shindiristudio.com/content_slider/content/our_team/6.jpg', link_url: 'content/our_team/6big.jpg' },
        {image: 'http://www.shindiristudio.com/content_slider/content/our_team/7.jpg', link_url: 'content/our_team/7big.jpg'}
      ];
      $(document).ready(function(){
        setTimeout(function() {
          $('#slider1').content_slider({    // bind plugin to div id="slider1"
            map : image_array,        // pointer to the image map
            max_shown_items: 5,       // number of visible circles
            hv_switch: 0,         // 0 = horizontal slider, 1 = vertical
            active_item: 0,         // layer that will be shown at start, 0=first, 1=second...
            wrapper_text_max_height: 200, // height of widget, displayed in pixels
            middle_click: 1,        // when main circle is clicked: 1 = slider will go to the previous layer/circle, 2 = to the next
            under_600_max_height: 400,   // if resolution is below 600 px, set max height of content
            border_radius:  -1,       // -1 = circle, 0 and other = radius
            automatic_height_resize: 1,
            border_on_off: 0,
            allow_shadow: 0,
            main_circle_position: 1,
            small_pic_width:      30,
    small_pic_height:     30,
    big_pic_width:        70,
    big_pic_height:       70,
    child_div_width:      50,
    child_div_height:50
            
          });
        }, 1000);
      });})
.controller('policiesCtrl', function($scope) {
  $scope.policies = [
    { title: 'child education', id: 1 },
    { title: 'women impowermwnt', id: 2 },
    { title: 'oldies goldies', id: 3 },
    { title: 'skill development', id: 4 },
    { title: 'helth care', id: 5 },
    { title: 'rular area development', id: 6 }
  ];
})
.controller('donateCtrl', function($scope) {
  $scope.categories = [
    { title: 'child education', id: 1 },
    { title: 'women impowermwnt', id: 2 },
    { title: 'oldies goldies', id: 3 },
    { title: 'skill development', id: 4 },
    { title: 'helth care', id: 5 },
    { title: 'rular area development', id: 6 }
  ];
})
.controller('volunteerCtrl', function($scope) {
  $scope.categories = [
    { title: 'child education', id: 1 },
    { title: 'women impowermwnt', id: 2 },
    { title: 'oldies goldies', id: 3 },
    { title: 'skill development', id: 4 },
    { title: 'helth care', id: 5 },
    { title: 'rular area development', id: 6 }
  ];
})
.controller('policieCtrl', function($scope, $stateParams) {
});
