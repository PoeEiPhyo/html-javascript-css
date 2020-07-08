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
    iconedit[i]="<i class='fa fa-edit' style='font-size:13px;color:green;'></i>";
    icondelete[i]="<i class='fa fa-trash' style='font-size:13px;color:green;'></i>";
    
    $("#tb").append("<tr><td>"+Exptitle[i]+"</td><td>"+Expvalue[i]+"</td><td>"+iconedit[i]+""+icondelete[i]+"</td></tr>");
    $("#exp1").text(totalExp);
    i++;
    
    Balance();
}
function Balance(){
    var balance1=parseInt(totalBudget)-parseInt(totalExp);
    $("#balance").text(balance1);    
}
