
let navBtn = document.querySelector('#bars-button');
let mobileView = document.querySelector('#mobile-view');

var val = 0;
navBtn.addEventListener('click', () =>{
    if(val === 0){
        mobileView.style.display= 'block';
        navBtn.style.backgroundColor = 'lightgrey';    
        val+=1;
        val%=2;
    }
    else{
        mobileView.style.display = 'none';
        navBtn.style.backgroundColor = 'white';
        val+=1;
        val%=2;
    }
});