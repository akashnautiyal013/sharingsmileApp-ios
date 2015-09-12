angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {
    window.$ = jQuery;
var image_array = new Array();
      image_array = [
        {image: 'http://www.shindiristudio.com/content_slider/content/our_team/1.jpg', link_url: 'content/our_team/1big.jpg', link_rel: 'prettyPhoto'},
          // image for the first layer, goes with the text from id="sw0"
        {image: 'http://www.shindiristudio.com/content_slider/content/our_team/2.jpg', link_url: 'content/our_team/2big.jpg', link_rel: 'prettyPhoto'},
          // image for the second layer, goes with the text from id="sw1"
        {image: 'http://www.shindiristudio.com/content_slider/content/our_team/3.jpg', link_url: 'content/our_team/3big.jpg', link_rel: 'prettyPhoto'},
          // image for the third layer, goes with the text from id="sw2"
        {image: 'http://www.shindiristudio.com/content_slider/content/our_team/4.jpg', link_url: 'content/our_team/4big.jpg', link_rel: 'prettyPhoto'},
          // ...
        {image: 'http://www.shindiristudio.com/content_slider/content/our_team/5.jpg', link_url: 'content/our_team/5big.jpg', link_rel: 'prettyPhoto'},
        {image: 'http://www.shindiristudio.com/content_slider/content/our_team/6.jpg', link_url: 'content/our_team/6big.jpg', link_rel: 'prettyPhoto'},
        {image: 'http://www.shindiristudio.com/content_slider/content/our_team/7.jpg', link_url: 'content/our_team/7big.jpg', link_rel: 'prettyPhoto'}
      ];
      $(document).ready(function(){
        setTimeout(function() {
          $('#slider1').content_slider({    // bind plugin to div id="slider1"
            map : image_array,        // pointer to the image map
            max_shown_items: 5,       // number of visible circles
            hv_switch: 0,         // 0 = horizontal slider, 1 = vertical
            active_item: 0,         // layer that will be shown at start, 0=first, 1=second...
            wrapper_text_max_height: 450, // height of widget, displayed in pixels
            middle_click: 1,        // when main circle is clicked: 1 = slider will go to the previous layer/circle, 2 = to the next
            under_600_max_height: 1200,   // if resolution is below 600 px, set max height of content
            border_radius:  -1,       // -1 = circle, 0 and other = radius
            automatic_height_resize: 1,
            border_on_off: 0,
            allow_shadow: 0,
            main_circle_position: 1
          });
        }, 1000);
      });
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
