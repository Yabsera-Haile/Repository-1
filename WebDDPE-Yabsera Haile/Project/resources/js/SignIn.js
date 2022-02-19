function openModel(){
   const model = document.getElementById('container')
   const overlay = document.getElementById('overlay')
     model.classList.add('active')
     overlay.classList.add('active')
 
}
function closeModel(){
   const model = document.getElementById('container')
   const overlay = document.getElementById('overlay')
     model.classList.remove('active')
     overlay.classList.remove('active')
 
}
function closeouter(){
 const model = document.querySelectorAll('.container.active')
 model.forEach(model => {
     closeModel();
 })
}
var state = true;

function validate1()
{
 var regName1 = /^[a-zA-Z0-9_\.]+(@)+(hes.com)/;
 var user = document.getElementById("username").value;


 if(regName1.test(user) == false)
 {
   //window.alert("incorrect format");
   state = false;
 }
 var count = 0;
 var l = localStorage.length;

 

 for(let i = 0; i< l;i++)
 {
   
  if(user == localStorage.getItem(localStorage.key(i)))
  {
    var x = localStorage.getItem(localStorage.key(i));
    var k = localStorage.key(i);
    localStorage.setItem("currentuser",k);
    state = true;
    //window.alert(x);
    break;
  }
   if(user != localStorage.getItem(localStorage.key(i)))
   {
     count++;
     if(count >= l-1)
     {
       window.alert("not found");
       state = false;
       break;
     }
     
   }

  
   
 }


}




function validate2()
{
  if(state == true)
  {
    var c = String(localStorage.getItem("currentuser"));
    var p = c[c.length-1];
    var personc = JSON.parse(localStorage.getItem("person"+p));
    
    
    var passwordc = personc[p][5];
    var password = document.getElementById("password").value;

    //window.alert(passwordc);
    if(password != passwordc)
    {
      window.alert("incorrect password");
      state = false;
    }

  }
 
}

function validate3()
{
  if(state == true)
  {
    window.alert("welcome back");
    document.getElementById("form2").action = "n.html";

  }
  
   
  
}