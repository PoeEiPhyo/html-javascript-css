var totalBudget=0;
var totalExp=0;
function TotalAmt(){
    var total=$("#budgettxt").val();
    totalBudget+=parseInt(total);
    $("#totalamt1").text(totalBudget);
    Balance();
}
    var i=0;
    var Exptitle=[];
    var Expvalue=[];
    var icondelete=[];
    var iconedit=[];
    
function TotalExpense(){
    var t1=$("#titletxt").val();  
    var t2=parseInt($("#valuetxt").val());   
    Exptitle[i]=t1;
    Expvalue[i]=t2;
    totalExp+=t2;
    iconedit[i]="<button><i class='fa fa-edit' style='font-size:13px;color:green;'></i></button>";
    icondelete[i]="<button onclick='deleteFunction("+i+")'><i class='fa fa-trash' style='font-size:13px;color:green;'></i></button>";
    
    $("#tb").append("<tr id='"+i+"'><td>"+Exptitle[i]+"</td><td>"+Expvalue[i]+"</td><td>"+iconedit[i]+""+icondelete[i]+"</td></tr>");
    $("#exp1").text(totalExp);
    i++;
    
    Balance();
}
function Balance(){
    var balance1=parseInt(totalBudget)-parseInt(totalExp);
    $("#balance").text(balance1);    
}

function deleteFunction(i){
    totalExp-=Expvalue[i];
    $("#"+i).remove();
    $("#exp1").text(totalExp);
    Balance();   
}
