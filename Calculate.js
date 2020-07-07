function FindNumber(){
    var n1=parseInt(document.getElementById("t1").value);
    var n2=parseInt(document.getElementById("t2").value);
    var valid="<br>VALID<br>";
    var invalid="<br>INVALID<br>";
    for(var i=n1;i<=n2;i++){
            if(i%2==0 && i%5==0){
                valid+=i+"<br>";
            }
            else{
                invalid+=i+"<br>";
            }
    }      
          
    document.getElementById("result").innerHTML=valid+"&nbsp;"+invalid;
}