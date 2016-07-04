var separate_time=function(time){
  var sec=Math.floor((time/1000)%60);
  var min=Math.floor((time/1000/60)%60);
  var hours=Math.floor((time/1000/60/60)%24);
  var days=Math.floor(time/1000/60/60/24);
  return [sec,min,hours,days];
  }
  

  
  
  
  
  var update=function(){
     var now =new Date();
     target=new Date(2020,7,24,0,0,0,0);
     var diff=target.getTime()-now.getTime();
  var counter=separate_time(diff);
  
  document.getElementById('countdown').textContent=
  counter[0]+'秒';
  refresh();//タイマー起動
  }
  
  
  var refresh=function(){
  setTimeout(update,1000);//1000ミリ秒待ってからupdateを実行
  }
  update();//最初の更新
  
