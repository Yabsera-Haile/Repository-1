function hub(){
var x = document.getElementById("hub").value;
if (x==='Bole'){
    document.getElementById('bl').style.backgroundColor='blue'
}
else if(x==='Bisrate Gebrail'){
    
}
else if(x==='Sarbet'){
 
}
let btn = document.getElementById('conf') 
    btn.addEventListener('click' , hub)
/*let foodarray = [];
function foods(title , disc , imageSrc ){
    this.title = title,
    this.disc = disc,
    this.imagesrc = imageSrc
}

let rest = document.getElementsByClassName('restS')
 for(let i =0 ; i<foods.length ; i++ ){ 
    var title = document.getElementsByClassName('rest-name')[i].innerText
    var disc = document.getElementsByClassName('rest-disc')[i].innerText
    var imageSrc = document.getElementsByClassName('rest-image')[i].src
    let a = new foods(title , disc , imageSrc )
    foodarray.push(a)
}


let m = document.getElementsByClassName('rests')[0];
 m.addEventListener('click' , ()=>{
    console.log(a[0])
 })*/