let bullets = document.getElementById('bullets');
let bullets_bg = document.getElementById('bullets_bg');

document.onmousemove=function(e){
    let xPos = e.clientX;
    let yPos = e.clientY;
    
    let xFactor = (window.innerWidth/2 - xPos) / (window.innerWidth/10);
    let yFactor = (window.innerHeight/2 - yPos) / (window.innerHeight/5);

    bullets.style.left = -xFactor*2 + 'px';
    bullets.style.bottom = -yFactor*2 + 'px';
};