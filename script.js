const inputText = document.getElementById('input-box'),
listContainer = document.getElementById('list-container'),
inputBtn = document.getElementById('button'),
popup = document.getElementById('popup');


function appendText(){
console.log(inputText.value);
if(inputText.value === ''){
    showPopup()
}
else{
    let li = document.createElement('li');
    popup.innerHTML = "";
    li.innerHTML =inputText.value;
    listContainer.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span)

}
inputText.value = "";
saveData();
}

listContainer.addEventListener('click',function(e){
    if(e.target.tagName === 'LI'){
        e.target.classList.toggle('checked');
        saveData();
    }else if(e.target.tagName === 'SPAN'){
        e.target.parentElement.remove();
        saveData();
    }
}, false)

inputBtn.addEventListener('click',appendText)

function showPopup() {
    popup.innerHTML = "You must Write Something"
    document.getElementById('popup').style.color ="#4e085f";
    document.getElementById('popup').style.fontSize =".8em";
}

function saveData(){
    localStorage.setItem('data', listContainer.innerHTML);
}
function showTask(){
    listContainer.innerHTML =  localStorage.getItem('data')
}
showTask()