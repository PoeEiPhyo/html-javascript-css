function CheckFunction(){
    var year=parseInt(document.getElementById("age").value);
    var date=new Date();
    var age=date.getFullYear()-year;
    if(age<=18){
        alert("Your age is under 18");
    }
    else{
        alert("Your age is over 18");
    }
}