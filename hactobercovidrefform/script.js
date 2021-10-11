function check()
{
document.getElementById("d1").innerHTML="Full Name :";   
document.getElementById("f1").innerHTML=document.myform.name.value;
document.getElementById("d2").innerHTML="Age :";  
document.getElementById("f2").innerHTML=document.myform.age.value;
document.getElementById("d3").innerHTML="Gender :";  
document.getElementById("f3").innerHTML=document.myform.Gender.value;
document.getElementById("d4").innerHTML="Symptoms :";  
 symp();
 document.getElementById("d5").innerHTML="Address :";  
 document.getElementById("f5").innerHTML=document.myform.Address.value;
 document.getElementById("d6").innerHTML="Pincode :";  
 document.getElementById("f6").innerHTML=document.myform.Pincode.value;
 document.getElementById("d7").innerHTML="District :";  
 document.getElementById("f7").innerHTML=document.myform.district.value;
 }
 function symp() 
 {
    var checkboxes = document.getElementsByName("Symptoms");
    var checkboxesChecked = [];
    for (var i=0; i<checkboxes.length; i++) {
       if (checkboxes[i].checked) {
          checkboxesChecked.push(checkboxes[i].value);
       }
    }
    document.getElementById("f4").innerHTML=checkboxesChecked;
    return;
  }