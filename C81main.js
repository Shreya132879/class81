canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
colour="pink";
widthh=2;
//Start drawing the circle//
ctx.beginPath();
ctx.strokeStyle=colour;
ctx.lineWidth=widthh;
ctx.arc( 200,100,50,0,2*Math.PI);
ctx.stroke();

canvas.addEventListener("mousedown",my_mousedown);
function my_mousedown(e){
    mouse_x=e.clientX-canvas.offsetLeft;
    mouse_y=e.clientY-canvas.offsetTop;
    console.log(mouse_x+" "+mouse_y);
    circle(mouse_x,mouse_y);
}
function circle(mouse_x,mouse_y){
    ctx.beginPath();
ctx.strokeStyle=colour;
ctx.lineWidth=widthh;
ctx.arc( mouse_x,mouse_y,50,0,2*Math.PI);
ctx.stroke();
}
function clear(){
    ctx.clearRect(0,0, canvas.width, canvas.height);
}