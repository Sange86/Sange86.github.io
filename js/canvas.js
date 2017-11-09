
let can = document.getElementById('can');
can.style.width = window.innerWidth;
can.style.height = window.innerHeight;

let ctx = can.getContext('2d');
   
   window.requestAnimFrame = (function(){
       return window.requestAnimationFrame||
                  window.webkitRequestAnimationFrame||
                  window.mozRequesAnimationFrame||function(callback){
                          window.setTimeout(callback,1000/60);
                  }

   }) ();
   let lines = [
  " rgba(0,222,255, 0.2)",
   "rgba(0,222,0, 0.2)",
   "rgba(0,0,255, 0.2)"
   ];
   var step = 0;
   function loop(){
       ctx.clearRect(0,0,can.width,can.height);
       for(let i = lines.length-1;i>=0;i--){
        
            ctx.fillStyle = lines[i];
            //角度添加一度
        step++;
        //角度转换成弧度
        var angle = (step+i*45)*Math.PI/180;
        //矩形高度的变化量
        var deltaHeight   = Math.sin(angle) * 50;
        var deltaHeightRight   = Math.cos(angle) * 50;
        ctx.beginPath();
        //在矩形的左上与右上两个顶点加上高度变化量
        ctx.moveTo(0, can.height/2+deltaHeight);
        // ctx.lineTo(can.width, can.height/2+deltaHeightRight);
            ctx.bezierCurveTo(can.width /2, can.height/2+deltaHeight-50, 
            can.width / 2, can.height/2+deltaHeightRight-50, can.width, can.height/2+deltaHeightRight);
            ctx.lineTo(can.width, can.height);
            ctx.lineTo(0, can.height);
            ctx.lineTo(0, can.height/2+deltaHeight);
            ctx.closePath();
            ctx.fill();
     }
    requestAnimFrame(loop);
   }
   loop(); 