let myLinks = [];
const inputLinks = document.getElementById("saveInput");
const saveLink = document.getElementById("saveBtn");
const link = document.getElementById("linkList");
const deleteLinks = document.getElementById("deleteBtn");
const saveTab = document.getElementById("saveTabBtn");
const savedLinksInStorage = JSON.parse(localStorage.getItem("myLinks"))
 
 

if(savedLinksInStorage){
  myLinks = savedLinksInStorage;
  renderLinks();
}

function linkLength (){
  return inputLinks.value.length;
}


function saveItem (){  
    myLinks.push(inputLinks.value);
    inputLinks.value = ""
    localStorage.setItem("myLinks", JSON.stringify(myLinks));
    renderLinks();
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
 
function deleteOnclick(){
  localStorage.clear();
  myLinks = [];
  renderLinks();
};


function saveTabOnclick(arr){
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {

    // since only one tab should be active and in the current window at once
    // the return variable should only have one entry
    var activeTab = tabs[0];
    var activeTabId = activeTab.id; // or do whatever you need

 });
  myLinks.push(arr[0].url);  
  localStorage.setItem("myLinks", JSON.stringify(myLinks));
  renderLinks();  
}


inputLinks.addEventListener("keypress", saveOnEnter);
saveLink.addEventListener("click", saveOnClicking);
deleteLinks.addEventListener("click", deleteOnclick);
saveTab.addEventListener("click", saveTabOnclick);


function renderLinks(){
  let savedLinks = "";
for(let i = 0; i < myLinks.length; i++){
   savedLinks += `<li><a target='_blank' href='${myLinks[i]}'> ${myLinks[i]} </a></li>`
}
link.innerHTML = savedLinks;
}
