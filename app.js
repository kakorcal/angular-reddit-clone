const app = angular.module('reddit', ['angularMoment', 'ngMessages']);

app.controller('site', function($scope){

  $scope.vm = {};
  $scope.vm.posts = seed();
  $scope.vm.filter = '-votes';
  $scope.vm.nav = 'Votes';
  $scope.vm.search = '';
  $scope.vm.postFormOpen = false;
  $scope.vm.commentsOpen = false;
  $scope.vm.newPost = new Post();

  $scope.vm.togglePostForm = function(val){
    if(val === 'open'){
      $scope.vm.postFormOpen = true;
    }else{
      $scope.vm.postFormOpen = false;      
    }
  };

  $scope.vm.addPost = function(form){
    if($scope.vm.postFormOpen && !form.$invalid){
      $scope.vm.newPost.id = $scope.vm.posts.length + 1;
      $scope.vm.newPost.date = new Date();
      $scope.vm.posts.push($scope.vm.newPost);
      $scope.vm.newPost = new Post();
      $scope.vm.postFormOpen = false;      
      form.$setUntouched();      
    }
  }
});


app.controller('nav', function($scope){

  $scope.vm.sortPosts = function(filter){
    $scope.vm.adjustDisplay(filter);
    switch(filter){
      case '-votes':
        $scope.vm.filter = '-votes';
        break;
      case '-dates':
        $scope.vm.filter = '-date';
        break;
      case 'title': 
        $scope.vm.filter = 'title';
        break;
    };
  }

  $scope.vm.adjustDisplay = function(filter){
    let navDisplay = filter;
    if(navDisplay[0] === '-') navDisplay = navDisplay.substr(1);
    navDisplay = navDisplay[0].toUpperCase() + navDisplay.substr(1);
    $scope.vm.nav = navDisplay;
  };
});

app.controller('posts', function($scope){

  $scope.vm.newComment = new Comment();
  
  $scope.vm.addVote = function(direction, id){
    let idx = findPostById($scope.vm.posts, id);
    if(direction === 'up'){
      $scope.vm.posts[idx].votes++;
    }else{
      $scope.vm.posts[idx].votes--;      
    }
  };

  $scope.vm.toggleComments = function(id){
    let idx = findPostById($scope.vm.posts, id);
    if(!$scope.vm.posts[idx].commentsOpen && $scope.vm.posts[idx].comments.length){
      $scope.vm.posts[idx].commentsOpen = true;
    }else{
      $scope.vm.posts[idx].commentsOpen = false;      
    }
  };

  $scope.vm.toggleCommentForm = function(id){
    let idx = findPostById($scope.vm.posts, id);
    if(!$scope.vm.posts[idx].commentFormOpen){
      $scope.vm.posts[idx].commentFormOpen = true;
    }else{
      $scope.vm.posts[idx].commentFormOpen = false;      
    }
  }

  $scope.vm.addComment = function(form, id){
    let idx = findPostById($scope.vm.posts, id);
    if($scope.vm.posts[idx].commentFormOpen && !form.$invalid){
      $scope.vm.newComment.id = $scope.vm.posts[idx].comments.length + 1;
      $scope.vm.posts[idx].comments.push($scope.vm.newComment);
      $scope.vm.newComment = new Comment();
      $scope.vm.posts[idx].commentFormOpen = false;    
      form.$setUntouched();  
    }
  }
});