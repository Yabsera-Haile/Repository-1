let rform=function(name,phone,age){
      this.fname=name;
      this.phone=phone;
      this.age=age;
}
function createF()
   {   var fname=document.getElementById("fname").value;
      var phone=document.getElementById("phone").value;
      var age=document.getElementById("age").value;
      const rform1=new rform(fname,phone,age);
      rform1.display();
   }
rform.prototype.display=function(){
      const parent = document.getElementById('main');
      const child = document.createElement('div');
      const tb=document.getElementById("bottomofthepage");
      const head=document.createElement('div');
      const headt=document.createTextNode("New Form Added \n");
      const element1=document.createElement('div');
      const element1t=document.createTextNode("Full Name: "+this.fname);
      const element2=document.createElement('div');
      const element2t=document.createTextNode("Age: "+this.age);
      const element3=document.createElement('div');
      const element3t=document.createTextNode("Phone.: "+this.phone);
      head.appendChild(headt);
      element1.appendChild(element1t);
      element2.appendChild(element2t);
      element3.appendChild(element3t);
      child.appendChild(head);
      child.appendChild(element1);
      child.appendChild(element2);
      child.appendChild(element3);
      child.style.backgroundColor="brown";
      child.style.width="600px";
      child.style.height="300px";
      child.style.margin="50px";
      child.style.padding="20px";
      child.style.fontSize="50px";
      child.style.color="white";
      child.style.fontStyle="bold";
      child.style.borderRadius="15px";
        parent.insertBefore(child,tb);
}