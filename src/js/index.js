
document.getElementById('butt01').classList.toggle('active-work-btn');
for(var i=1;i<=7;i++){
    document.getElementById('img0' + i).style.display= 'none';
}

document.getElementById('img01').style.display = 'block';

if(window.innerWidth >= 700){
    document.getElementById('img01').style.display = 'none';
}

var openImg = function(num){
    var width = window.innerWidth;

    console.log(width);
    if(width <'700'){

        if(document.getElementById('img0'+num).style.display === 'none'){
            document.getElementById('img0'+num).style.display = 'block';
            document.getElementById('butt0'+num).classList.add('active-work-btn');
        }else{
            document.getElementById('img0'+num).style.display = 'none';
            document.getElementById('butt0'+num).classList.remove('active-work-btn');
        }
    }else{
            console.log(document.getElementById('img01').style.display)
            var parent = document.getElementById('large-img');
            parent.childNodes[1].src = '../assets/img' + num +'.png';
            for(var i=1;i<=7;i++){
                document.getElementById('butt0'+i).classList.remove('active-work-btn');
            }
            document.getElementById('butt0'+num).classList.add('active-work-btn');
            console.log(parent.childNodes[1]);
    }
    
}

var changeDoctor = function(num=0){

    for(var i=0;i<4;i++){
        document.getElementById('dot'+i).classList.remove('active-dot');
        document.getElementById('dot'+i).innerHTML = '&#9679';
    }
    document.getElementById('dot'+num).innerHTML = '&#9711;';
    document.getElementById('dot'+ num).classList.add('active-dot');
    var list = document.getElementsByClassName('doctor-card');
    for(var i=0;i<=7; i++){
        list[i].style.display = 'none';
    }
    for(i=num;i<=num+3;i++){
        list[i].style.display = 'block';
    }
    console.log(list);

}
changeDoctor();

var changeService = function(num = 0){
    console.log(document.getElementById('serv-dot1'));
    for(var i=0;i<3;i++){
        document.getElementById('serv-dot'+i).innerHTML = '&#9679;';
        document.getElementById('serv-dot'+i).classList.remove('active-dot');
        
    }

    document.getElementById('serv-dot'+num).innerHTML = '&#9711;';

    document.getElementById('serv-dot'+num).classList.add('active-dot');



}

changeService();


