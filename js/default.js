var separate_time=function(time){
  var sec=Math.floor((time/1000)%60);
  var min=Math.floor((time/1000/60)%60);
  var hours=Math.floor((time/1000/60/60)%24);
  var days=Math.floor(time/1000/60/60/24);
  
  var sec=time.getSeconds();
  
  
  return [sec,min,hours,days];
  }
  
  var now =new Date();
  var counter=separare_time(now);
  document.getElementById('countdown').textContent=
  counter[0]+'秒';
  
  
  
  
  var update=function(){
  refresh();//タイマー起動
  }
  
  
  var refresh=function(){
  setTimeout(update,1000);//1000ミリ秒待ってからupdateを実行
  }
  update();//最初の更新
  
