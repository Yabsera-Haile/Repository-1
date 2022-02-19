function loadme()
{
    var sum = 0;
    var count = 0;
    var x = Number(localStorage.getItem("foodcount"));
    
    var l = localStorage.length;
   
    const food = JSON.parse(localStorage.getItem("food"))

    for(let i = 0 ; i < x;i++)
    {
        
        
        //window.alert(food[x1][1]);
       
       
        var p = document.getElementById("main");
      
      
        var child = document.createElement("p");
        child.textContent = food[i][1];
        child.id = "price"+(i);

        var tp1 =  String(food[i][1]);
        var tp2 = Number(tp1.slice(6,8));
        
        sum = sum + tp2;
       
        var child2 = document.createElement("h3");
        child2.textContent = food[i][0];
          child2.id = "header"+(i)
        var child3 = document.createElement("hr");
        child3.color = "aqua";
        child3.style.width = "100%";
        child3.id = "line"+(i)
      
       

        var child4 = document.createElement("button");
        child4.textContent = "remove";
        child4.id = "button" +(i);
     
       
        
       

        child4.style.backgroundColor = "red";

        p.appendChild(child2);
        p.appendChild(child);
        p.appendChild(child4);
        p.appendChild(child3);
        count++;

        if(count > x-1)
        {
            var total = document.createElement("h3");
            total.textContent = "Total" + ":"+ sum;
            total.id = "total"
            p.appendChild(total);
            var newline = document.createElement("hr");
            newline.color = "blue";
            newline.style.width= "100%";
            newline.id = "t1"
            p.appendChild(newline);
           
            var sbutton = document.createElement("button");
            sbutton.textContent = "order";
            sbutton.backgroundColor = "green";
            sbutton.width = "170px";
            sbutton.id = "t2";
            p.appendChild(sbutton);

        }

        
         
   /*    */
        

        document.getElementById("button" +(i)).addEventListener("click",removechild);
        function removechild()
        {
            var p = document.getElementById("main");
            document.getElementById("header" +(i)).style.display = "none";
            document.getElementById("line" + (i)).style.display = "none";
            document.getElementById("price" + (i)).style.display = "none";
            document.getElementById("button" + (i)).style.display = "none";
            

            

            

        
            localStorage.setItem("food",JSON.stringify(food));
            

        sbutton.addEventListener("click",pay());
        function pay()
        {
           document.getElementById("main").action = "pay.html";

        }
            
           // p.remove(child);
            //p.remove(child2);
            //p.remove(child3);
            //p.remove(child4);
        }
           
           

    }
  
   

    
        
      




    

        

    //var p = document.getElementById("main");
    //var child1 = document.createElement("p");
    //child1.textContent = x;
    //p.appendChild(child1);
    
    
}