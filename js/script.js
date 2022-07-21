let myLinks = [];
const inputLinks = document.getElementById("saveInput");
const saveLink = document.getElementById("saveBtn");
const link = document.getElementById("linkList");

function linkLength (){
  return inputLinks.value.length;
}


function saveItem (){  
    myLinks.push(inputLinks.value);
    renderLinks();
    inputLinks.value = ""
  }

function saveOnClicking (){
    if(linkLength() > 1){
      saveItem();
  }
 };

function saveOnEnter (event) {
  if (linkLength() > 1 && event.key === "Enter") {
  saveItem();
  event.preventDefault();
}
} 

inputLinks.addEventListener("keypress", saveOnEnter);
saveLink.addEventListener("click", saveOnClicking);


function renderLinks(){
  let savedLinks = "";
for(let i = 0; i < myLinks.length; i++){
   savedLinks += `<li><a target='_blank' href='${myLinks[i]}'> ${myLinks[i]} </a></li>`
}
link.innerHTML = savedLinks;
}
