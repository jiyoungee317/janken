$(function(){


   $("#goo").on("click", function(){
       var iGoo = 1;
       var comp = Math.floor(Math.random()*3+1 );
    
      

   if(comp == 1 ){
       $("#pc").html('<img src="img/サザエさんグー.jpg">');
       $("#result").text('引き分け！');
       $("#pc").css('textAlign','center');
     

   }else if(comp == 2 ){
       $("#pc").html('<img src="img/サザエさんチョキ.jpg">');
       $("#result").text('あなたの勝ち！');   
       $("#pc").css('textAlign','center'); 
     
   }else if(comp == 3 ){
       $("#pc").html('<img src="img/サザエさんパー.jpg">');
       $("#result").text('あなたの負け！');    
       $("#pc").css('textAlign','center');
     
   }
});

   $("#choki").on("click", function(){
       var iCho = 2;
       var comp = Math.floor(Math.random()*3+1 );

   if( comp == 1 ){
       $("#pc").html('<img src="img/サザエさんグー.jpg">');Z
       $("#result").text('あなたの負け！'); 
       $("#pc").css('textAlign','center');
   }else if( comp == 2 ){
       $("#pc").html('<img src="img/サザエさんチョキ.jpg">');
       $("#result").text('引き分け！');
       $("#pc").css('textAlign','center');
   }else if( comp == 3 ){
       $("#pc").html('<img src="img/サザエさんパー.jpg">');
       $("#result").text('あなたの勝ち！');   
       $("#pc").css('textAlign','center');
   }
});
   $("#pa").on("click", function(){
       var iPa = 3;
       var comp = Math.floor(Math.random()*3+1 );
   if(comp==1){
       $("#pc").html('<img src="img/サザエさんグー.jpg">');
       $("#result").text('あなたの勝ち！');   
       $("#pc").css('textAlign','center');
   }else if(comp==2){
       $("#pc").html('<img src="img/サザエさんチョキ.jpg">');
       $("#result").text('あなたの負け！'); 
       $("#pc").css('textAlign','center');
   }else if(comp==3){
       $("#pc").html('<img src="img/サザエさんパー.jpg">');
       $("#result").text('引き分け！');
       $("#pc").css('textAlign','center');
   }
});
    $("#result").css({'fontSize':'50px','fontWeight':'bold','textAlign':'center','color':'red'});
});
