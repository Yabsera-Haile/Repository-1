
/*function loadme()
{
    var c = String(localStorage.getItem("currentuser"));
    var n = c[c.length-1];
    var personc = JSON.parse(localStorage.getItem("person"+n));
    
    
   
}*/

function change1()
{
    var c = String(localStorage.getItem("currentuser"));
    var n = c[c.length-1];
    var personc = JSON.parse(localStorage.getItem("person"+n));
    var cemail = personc[n][3];
    window.alert(cemail);
    var nemail = document.getElementById("email").value;
    if(nemail == "")
    {
        window.alert("please fill out the field");
    }

    var reg =  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if(reg.test(nemail) == true)
    {
        personc[n][3] = nemail;
        localStorage.setItem("currentuser","user"+(n));
        localStorage.setItem("person" +n, JSON.stringify(personc));
        window.alert("changed");


    }
    
      
    

    
    

   

}

function change2()
{
    var c = String(localStorage.getItem("currentuser"));
    var n = c[c.length-1];
    var personc = JSON.parse(localStorage.getItem("person"+n));
    var cphone = personc[n][4];
    window.alert(cphone);
    var nphone = document.getElementById("tel").value;
    if(nphone == "")
    {
        window.alert("please fill out the field");
    }

    

    var reg1 =  /^\d{10}$/;

    if(reg1.test(nphone) == true)
    {
        personc[n][4] = nphone;
        localStorage.setItem("currentuser","user"+(n));
        localStorage.setItem("person" +n, JSON.stringify(personc));
        window.alert("changed");

    }

    
      

    

    
    

   

}