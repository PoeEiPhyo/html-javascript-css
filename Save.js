var ans="<tr><th>NAME</th><th>PHONE</th><th>EMAIL</th><th>ADDRESS</th><th>GENDER</th><th>MAJOR</th></tr>";
function SaveFunction(){
    var name=document.getElementById("name").value;
    var phone=document.getElementById("phone").value;
    var email=document.getElementById("email").value;
    var area=document.getElementById("area").value;
    var radio=document.getElementsByName("gender");
    var gen="";
    for(i=0;i<radio.length;i++){
        if(radio[i].checked){
            gen=radio[i].value;break;
        }
    }
    var check=document.getElementsByName("subject");
    var sub="";
    for(i=0;i<check.length;i++){
        if(check[i].checked){
            sub+=check[i].value+"<br>";
        }
    }
    ans+="<tr><td>"+name+"</td><td>"+phone+"</td><td>"+email+"</td><td>"+area+"</td><td>"+gen+"</td><td>"+sub+"</td></tr>";
    document.getElementById("result").innerHTML=ans;
}