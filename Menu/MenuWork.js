
var categoriesArr=[];
var categoriesObj;
var categoryList=["Juice","Coffee","IceCream","SeaFood"];
var str="";
var s="";

var fname,fprice,fcategories,fimage,fdesc;

if(typeof(Storage)!=null){
  if(localStorage.getItem("category")!=null){
    categoriesArr=JSON.parse(localStorage.getItem("category"));
  }
  if(localStorage.getItem("foodtotal")!=null){
    totalArr=JSON.parse(localStorage.getItem("foodtotal"));
  }
}
else{
}

function AddFunction(){
  fname=$("#name").val();
  fprice=$("#price").val();
  fcategories=$("#categories").val();
  fimage=$("#image").val();
  fdesc=$("#desc").val();

  categoriesObj={name:fname,price:fprice,categories:fcategories,image:fimage,desc:fdesc};
  categoriesArr.push(categoriesObj);
  localStorage.setItem("category",JSON.stringify(categoriesArr));
  
  if(fcategories=="Juice"){
    showFunction();
  }
  else if(fcategories=="Coffee"){
    showFunction();
  } 
  else if(fcategories=="IceCream"){
    showFunction();
  }  
  else if(fcategories=="SeaFood"){
    showFunction();
  }  
}

function showFunction(){ 
  categoriesArr=JSON.parse(localStorage.getItem("category"));
  var i=1;
  $("#tb").empty();
  categoriesArr.forEach(function(value,key){
    $("#tb").append("<tr><td>"+i+"</td><td>"+value.name+"</td><td>"+value.price+"</td><td>"+value.categories+"</td><td><i class='fa fa-trash-o' style='font-size:20px' onclick='deleteFunction("+key+",this)'>&nbsp;&nbsp;</i><i class='fa fa-edit' style='font-size:20px' onclick='editFunction("+key+")'></i></td></tr>");
    i++;
  });
  
}

function viewItem(){
  $("#viewMenu").empty();
  categoryList.forEach(function(value,key){
      $("#viewMenu").append("<li onclick='relevantView("+key+")'><a href='#'><i class='fas fa-caret-right'></i>"+categoryList[key]+"</a></li>");  
  });  
}


var str1="";
var str2="";

function viewItemList(){ 
  categoriesArr=JSON.parse(localStorage.getItem("category")); 
  categoriesArr.forEach(function(value,key){
    str2+="<div class='itemView'><div class='images'><img src='"+value.image+"' style='width:150px;height:150px;box-shadow: 5px 10px 20px plum inset;'></div><div><lable style='font-size:20px;'><b>"+value.name+"</b></lable><br><br><lable style='background-color:plum;color:purple;padding:5px;'>$"+value.price+"</lable><br><br><p>"+value.desc+"</p></div><div style='padding-top:40px;'><button style='background-color:purple;color:white;padding:10px;width:100px;' onclick='totalFunction(\""+value.name+"\")' style='background-color:purple;color:white;'>Order</button></div></div>";        
  });
  $("#view").append(str2);
}


function relevantView(k){
  var categoryfilter=categoriesArr.filter(function(c){
    return c.categories==categoryList[k];
  });
  
  $("#view").empty();
  categoryfilter.forEach(function(value,key){
    $("#view").append("<div class='itemView'><div><img src='"+value.image+"' style='width:100px;height:100px;border:1px solid;'></div><div style='margin-left:100px;margin-right:5%;'><lable style='font-size:20px;'><b>"+value.name+"</b></lable><br><lable style='background-color:plum;color:white;'>$"+value.price+"</lable><br><br><lable>"+value.desc+"</lable><br><br><button style='margin-right:1px;background-color:purple;color:white;' onclick='totalFunction(\""+value.name+"\")' style='background-color:purple;color:white;'>Order</button></div></div><hr>");
  });
  
}

var totalArr=[];
var totalAmt=0;
function  totalFunction(n){
  console.log(n);
  var orderfilter=categoriesArr.filter(function(o,k){
    return o.name==n;
  });

  totalArr.push(orderfilter);
  
  localStorage.setItem("foodtotal",JSON.stringify(totalArr));
  console.log(orderfilter);
}
var a;
function tableFunction(){
  totalArr=JSON.parse(localStorage.getItem("foodtotal"));
  console.log(totalArr);
  totalArr.forEach(function(value,key){
    a=0;
    totalAmt+=parseInt(value[a].price);
    $("#viewTable").append("<tr><td>"+value[a].name+"</td><td>1</td><td>"+value[a].price+"</td></tr>");
    $("#tot").html("<td colspan='3' style='padding-left:60%;'>Total Amount:"+totalAmt+"</td>");
    ++a;
  });  
}

function deleteFunction(k,t){
  $(t).parent().parent().remove();
  categoriesArr.splice(k,1);
  localStorage.setItem("category",JSON.stringify(categoriesArr));
}

function editFunction(k){
  $("#name").val(categoriesArr[k].name);
  $("#price").val(categoriesArr[k].price);
  $("#categories").val(categoriesArr[k].categories);
  $("#image").val(categoriesArr[k].image);
  $("#desc").val(categoriesArr[k].desc);

  document.getElementById("update").addEventListener("click",function(){
    UpdateFunction(k);
    
  });
  
}


function UpdateFunction(k){
  alert(k);
  categoriesArr[k].name=$("#name").val();
  categoriesArr[k].price=$("#price").val();
  categoriesArr[k].categories=$("#categories").val();
  categoriesArr[k].image=$("#image").val();
  categoriesArr[k].desc=$("#desc").val();

  localStorage.setItem("category",JSON.stringify(categoriesArr));

  showFunction();
}
