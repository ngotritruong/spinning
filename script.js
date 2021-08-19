const spiner = document.querySelector(".circle");
let roratecount = 0;
let startime = null;
let rAF;
function draw(timetamp) {
    if(!startime){
        startime = timetamp;
    }
    roratecount = (timetamp - startime) / 10 ;
    if(roratecount>360){
        roratecount%=360;
    }
    spiner.style.transform= 'rotate(' + roratecount + 'deg)';
    
    rAF = requestAnimationFrame(draw);
}
draw();