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
      const tb=document.getElementById("ta");
      const head=document.createTextNode("New Form Added \n");
      const element1=document.createTextNode("Full Name: "+this.fname);
      const element2=document.createTextNode("Age: "+this.age);
      const element3=document.createTextNode("Phone.: "+this.phone);
      child.appendChild(head);
      child.appendChild(element1);
      child.appendChild(element2);
      child.appendChild(element3);
      parent.replaceChild(child,tb)
}