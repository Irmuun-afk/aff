//  let-> ashgal ,const 
var ol = document.getElementsByTagName('ol')[0];
const input = document.getElementsByTagName('input')[0];
const addBtn = document.getElementsByTagName('button')[0];
const chkBtn = document.getElementsByTagName('button')[0];
// addEventListener - click, scroll...
// () =>{} -> arrow function/shugaman func
addBtn.addEventListener('click', ()=>{
//   alert("aa");
if(input.value==""){
    alert("Cannot be empty");
}else{
let li = document.createElement('li');
li.innerText=input.value;
console.log(li);
ol.append(li);
// create delete button
let delBtn = document.createElement('button');
delBtn.innerHTML = '<i class="bi bi-trash"></i>';
li.append(delBtn);
delBtn.className="del";
let chkBtn = document.createElement('button');
chkBtn.innerHTML = '<i class="bi bi-bookmark-check"></i>'
li.append(chkBtn);
input.value="";
}
saveData();
});
// ol click event 
ol.addEventListener('click',(e)=>{
   console.log(e.target);
   let liEl = (e.target) .parentElement.parentElement;
   if(e.target.className=='bi bi-trash'){
     // .remove() -> tuhain tag-iig ustgana
     liEl.remove();
   }else if(e.target.className=='bi bi-bookmark-check'){
    liEl.classList.toggle('checked');
}
saveData();
});
function saveData(){
    localStorage.setItem('todo',ol.innerHTML);
}
function getData(){
    let getTodo = localStorage.getItem('todo');
    ol.innerHTML= getTodo;
}
getData();
// localStorage -> setItem() ->hadgalah, getItem() -> avah
localStorage.setItem('name',"Irmuun");
let get = localStorage.getItem('name');
console.log(get);