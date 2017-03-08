var net=document.getElementById("net");
var cube=document.getElementById("cube");
window.onload=function() {
  for(var i=0;i<10;i++) {
    for(var j=0;j<10;j++) {
      var a=document.createElement("div");
      a.className="drawLine";
      a.style.gridColumn=i+2;
      a.style.gridRow=j+2;
      net.appendChild(a);
    }
  }
  //绘制网格线
  cube.style.gridColumn=6;
  cube.style.gridRow=6;
  //初始化方块位置
}

var ctrl=document.getElementById("ctrl");
var command=document.getElementById("command");
var cubePosition= {
  indexX:6,
  indexY:6,
  rotateReg:0
}//储存方块的初始位置和方向
function drawCube(cubeP,obj) {
  obj.style.gridColumn=cubeP.indexX;
  obj.style.gridRow=cubeP.indexY;
  obj.style.transform="rotate(" + cubeP.rotateReg + "deg)";
}
function forward(cubeP) {
  switch(cubeP.rotateReg%360) {
    case 0:cubeP.indexY--;break;
    case 90:cubeP.indexX++;break;
    case 180:cubeP.indexY++;break;
    case 270:cubeP.indexX--;break;
                   }
}
function operate (str,cubeP) {
  switch(str) {
    case "GO":forward(cubeP);break;
    case "TUN LEF":cubeP.rotateReg-=90;break;
    case "TUN RIG":cubeP.rotateReg+=90;break;
    case "TUN BAC":cubeP.rotateReg+=180;break;
    default: alert("错误的指令！");
          }
}

ctrl.onclick=function() {
  operate(command.value,cubePosition);
  drawCube(cubePosition,cube);
}