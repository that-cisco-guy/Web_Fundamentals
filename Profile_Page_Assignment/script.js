
var reqCount = document.querySelector('#reqBadge');
var connCount = document.querySelector('#connBadge');
var username = document.querySelector('#username');

function accept(id) {
    var element = document.querySelector(id);
    element.remove();
    reqCount.innerText --;
    connCount.innerText ++;
}

function ignore(id) {
    var element = document.querySelector(id);
    element.remove();
    reqCount.innerText --;
}

function edit() {
    username.innerText = "Marisa G";
}