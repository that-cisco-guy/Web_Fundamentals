// like button logic

var likeCount = 0;
var likeCountElement = document.querySelector("#likes");

// console.log(likeCountElement);

function addLike(){
    likeCount++;
    likeCountElement.innerText = likeCount + "like(s)"
    // console.log(likeCount);
}