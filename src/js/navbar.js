
let navBtn = document.querySelector('#bars-button');
let mobileView = document.querySelector('#mobile-view');


if(window.innerWidth < 1024){
    mobileView.style.display = 'none';
}
var burger = function(){
    if(mobileView.style.display=== 'none'){
        mobileView.style.display = 'block';
    }else{
        mobileView.style.display = "none";
        navBtn.style.backgroundColor = 'white';
    }
}