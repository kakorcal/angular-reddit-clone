function Post(title, author, image, description){
  this.title = title;
  this.author = author;
  this.image = image;
  this.description = description;
  this.votes = 0;
  this.commentsOpen = false;
  this.commentFormOpen = false;
  this.comments = [];
}

function Comment(author, description){
  this.author = author;
  this.description = description;
}

function findPostById(arr, post_id){
  // return the array index
  return arr.reduce((acc, cur, idx)=>{
    if(cur.id === post_id) acc = idx;
    return acc;
  }, -1);
}