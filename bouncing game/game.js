var canvas = document.getElementById("game");
var context = canvas.getContext("2d");
var x = 20; y = 20;
var dx = 4; dy = 2;
var radius = 10;
var score = 0;
var bar = {
    width: 70,
    height: 10,
    x: 200,
    y: 450,
    speed: 20
};

//ve hinh tron
function drawBall() {
    context.beginPath();
    context.arc(x,y,radius,0,2 * Math.PI);
    context.fillStyle = "red";
    context.fill();
    context.closePath();
}
//ve thanh chan
function drawBar(){
    context.beginPath();
    context.rect(bar.x, bar.y, bar.width, bar.height);
    context.fillStyle = "blue";
    context.fill();
    context.closePath();
}
//di chuyen thanh chan
document.addEventListener('keydown',function(evt){
    if(evt.keyCode == 37){
        if ( bar.x > 0) {
            bar.x = bar.x - bar.speed
        }
    }else if(evt.keyCode == 39){
        if ( bar.x + bar.width < canvas.width) {
            bar.x = bar.x + bar.speed
        }
    }
});

//xu li va cham cua qua bong
function xuLiVaCham(){
    if(x < radius || x > canvas.width - radius){
        dx = -dx;
    }
    if(y < radius || y > canvas.height - radius){
        dy = -dy;
    }
    if( y + radius  === bar.y){
        if( x > bar.x && x < bar.x + bar.width){
            score ++;
            dy = -dy;

        }
    }else if(y + radius > canvas.height){
        clearInterval(a);
        console.log("Game over")
    }
}
//toa do
function toaDo(){
    x += dx;
    y += dy;
}
//xu li tong the
function draw(){
        context.clearRect(0, 0, canvas.width, canvas.height);
        drawBall();
        drawBar();
        xuLiVaCham();
        toaDo();
    document.getElementById("diem").innerHTML = score;
}
var a = setInterval(draw,10);

