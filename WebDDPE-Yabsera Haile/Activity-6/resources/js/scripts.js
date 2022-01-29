let v=document.getElementById("video1");
let a=document.getElementById("audio1");
let i= document.getElementById("img");
let vid= document.getElementById("vid");
let ip=document.getElementById("imgp");
let vp=document.getElementById("vidp");
function end()
        {
          let z="The Audio has Ended\n Click 'Ok' to Replay and 'Cancel' to End";
          if(confirm(z) == true)
            a.play();
        }
function playpause()
        {
          if(v.paused)
          {
            v.play();
            document.getElementById("button1").innerHTML="Pause";
          }
          else
          {
            v.pause();
            document.getElementById("button1").innerHTML = "Play";
          }
          
        }
function custumize()
        {
          let b=prompt("Enter the width: ");
          size(b);
        }
function size(b)
        {
          if(b>100&&b<2000)
          v.width=b;
          else
          alert("Size isn't possible")
          
            
        }
function small()
        {
          v.width=200;
        }
function normal() {
            v.width = 800;
          }
function large() {
              v.width = 2000;
            }
function swap()
{ 
    vp.replaceChild(i,vid);
    ip.appendChild(vid); 
    let c=i;
    i=vid;
    vid=c;
}
function remove()
{
    let a=document.getElementById("audio1");
    a.remove();
}
function add()
{
    let a=document.createElement("img");
    a.src="resources/images/logo_gold.PNG";
    a.id="l";
    let b=document.getElementById("l");
    let c=document.getElementById("add");
    if(c.contains(b))
    {
        b.remove();
        document.getElementById("logo").innerText="Show Logo";
    }
    else{
        c.appendChild(a);
        document.getElementById("logo").innerText="Hide Logo";
    }  
}