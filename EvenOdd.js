function Find(){
    var n1=parseInt(document.getElementById("t1").value);
    var n2=parseInt(document.getElementById("t2").value);
    
    var even="<br>EVEN<br>";
    var odd="<br>ODD<br>";
    if(n1<n2){        
        for(var i=n1;i<=n2;i++){
            if(i%2==0){
                even+=i+"<br>";
            }
            else{
                odd+=i+"<br>";
            }
        }      
    }
    else{
        for(var j=n2;j<=n1;j++){
            if(j%2==0){
                even+=j+"<br>";
            }
            else{
                odd+=j+"<br>";
            }
        }
 
    }
       
    document.getElementById("result").innerHTML=even+"&nbsp;"+odd;
}