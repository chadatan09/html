let myColor = document.querySelector('#myColor');
myColor.addEventListener('input',()=>{
    document.body.style.backgroundColor = myColor.value;

});
function changeColor(){
    let r =document.getElementById('r').value;
    let g =document.getElementById('g').value;
    let b =document.getElementById('b').value;
    document.body.style.backgroundColor =  `rgb(${r},${g},${b}`;
    
}