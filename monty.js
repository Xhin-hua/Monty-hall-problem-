
        
        var cards =["c1","c2","c3" ],got,goat, luckyCard, muge, mug=0, monty, mont=0, wins=0, loss = 0 ,total=0, dele;
            function change(f1,f2) {
                cards.forEach( function(card){
                    document.getElementById(card).addEventListener("click", f1);
                    if(f2) 
                    document.getElementById(card).removeEventListener("click",f2);
                }  );
            }      
                function writeOn(id,text){   
                                  document.getElementById(id).innerText = text ;  }
                    function first(event) {   change(second, first);
                    dele = false, got = event.id ;  luckyCard = "c"+Math.floor(Number(Math.Random*3) );
                    function reDo(n){  writeOn(goat,"");  } reDo(dele);
                        cards.some(function(card) {
                          if(data != got && data != luckyCard) {return true; goat = card;  } 
                        }  );
                          if(got == luckyCard) 
                                    mug++;
                                    mont++;
                    }
        
                    function second(event){
                        change(first, second);
                        monty =mont; mug = muge;
                        if(event.id = luckyCard)
                            {wins++; alert("you won");  }
                        else 
                        { loss++; alert("you lost")  }
                        dele = true;
                    }
            
            [muge,monty,loss,wins ].forEach( function(data){writeOn(data, data);  });
              change(first);
              
//clock
              

window.onload=function(){getTime();}  
function getTime(){  
var today=new Date();  
var h=today.getHours();  
var m=today.getMinutes();  
var s=today.getSeconds();  
// add a zero in front of numbers<10  
m=checkTime(m);  
s=checkTime(s);  
document.getElementById('txt').innerHTML=h+":"+m+":"+s;  
setTimeout(function(){getTime()},1000);  
}  
//setInterval("getTime()",1000);//another way  
function checkTime(i){  
if (i<10){  
  i="0" + i;  
 }  
return i;  
}  var go = document.getElementById('txt');
 