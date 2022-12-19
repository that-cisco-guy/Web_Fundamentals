// like button logic

var likeCount1 = 0;
var likeCount2 = 0;
var likeCount3 = 0;
var likeCountElement1 = document.querySelector("#likes1");
var likeCountElement2 = document.querySelector("#likes2");
var likeCountElement3 = document.querySelector("#likes3");
// console.log(likeCountElement);

function addLike1(){
    likeCount1++;
    likeCountElement1.innerText = likeCount1 + " like(s)"
    // console.log(likeCount1);
}

function addLike2(){
    likeCount2++;
    likeCountElement2.innerText = likeCount2 + " like(s)"
    // console.log(likeCount2);
}

function addLike3(){
    likeCount3++;
    likeCountElement3.innerText = likeCount3 + " like(s)"
    // console.log(likeCount3);
}