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
}
//用坐标储存方块的初始位置和方向
function drawCube(cubeP,obj) {
  obj.style.gridColumn=cubeP.indexX;
  obj.style.gridRow=cubeP.indexY;
  obj.style.transform="rotate(" + cubeP.rotateReg + "deg)";
}
//根据坐标改变方块位置
function wall(num,wallNum) {
  if(num==wallNum) {
    alert("撞墙啦！");
    return false;
  }
  return true;
}
//判断是否撞墙的
function forward(cubeP) {
  switch(cubeP.rotateReg%360) {
    case 0:if(wall(cubeP.indexY,2)) cubeP.indexY--;break;
    case 90:if(wall(cubeP.indexX,11)) cubeP.indexX++;break;
    case 180:if(wall(cubeP.indexY,11)) cubeP.indexY++;break;
    case 270:if(wall(cubeP.indexX,2)) cubeP.indexX--;break;
                   }
}
//方块执行GO命令改变坐标
function operate (str,cubeP) {
  switch(str) {
    case "GO":forward(cubeP);break;
    case "TUN LEF":cubeP.rotateReg+=270;break;
    case "TUN RIG":cubeP.rotateReg+=90;break;
    case "TUN BAC":cubeP.rotateReg+=180;break;
    default: alert("错误的指令！");
          }
}
//执行其它命令改变坐标
ctrl.onclick=function() {
  operate(command.value,cubePosition);
  drawCube(cubePosition,cube);
}
//按钮点击事件
command.onkeypress=function(e) {
  e= e ||window.event;
  if (e.keyCode == 13) {
    operate(command.value,cubePosition);
    drawCube(cubePosition,cube);
  }
}
//增加回车事件
