var myOutput = document.getElementById("btn_1");
myOutput.innerHTML = "This is <br>first <br>button";

var myButtons = document.getElementsByClassName("btn");
myButtons[1].innerHTML ="This is <br>second <br>button";

var myTags = document.getElementsByTagName("div");
myTags[3].innerHTML = "This is <br>third <br>button";

var changeBtn = document.getElementById("btn_4");
changeBtn.style.backgroundColor = "hotpink";

document.getElementById("output").innerHTML = document.title;
// document.getElementById("myImage").src = "https://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/article_thumbnails/other/cat_relaxing_on_patio_other/1800x1200_cat_relaxing_on_patio_other.jpg";

console.dir(document.getElementById("btn_1").style);
console.dir(document);

/* ------------------------------------------------ */
var btn1 = document.getElementById("btn_1");
var output = document.getElementById("output");
btn1.onclick = changeButton;

function changeButton(){
    output.innerHTML = "I WAS JUST CLICKED";
    btn1.style.backgroundColor = "deeppink";
}

var img = document.getElementById("myImage");
img.onmouseover = changeImage;
img.onmouseout = changeImage2;

function changeImage(e){
    this.style.border = "5px solid hotpink";
    this.src = "https://i.pinimg.com/736x/35/42/4f/35424f8351faade18f5be84d4c8b8838.jpg";
}

function changeImage2(e){
    this.style.border = "none";
    this.src = "https://picsum.photos/id/1/200/300";
}

/* ---------EVENT LISTENERS------------ */
var btn3 = document.getElementById("btn_3");
btn3.addEventListener("click", function(e){
    this.style.backgroundColor = "blue";
    this.style.color = "white";
    img.style.border = "5px dashed blue";
});

/* ----------- SELECT MULTIPLE ELEMENTS ---------- */

function changeAllButtons(){
    var mySelection, i;
    mySelection = document.querySelectorAll("div.btn");
    for(i = 0; i < mySelection.length; i++){
        mySelection[i].innerHTML = "I changed!";
    }
}

/* ---------------- Add Element ------------- */
var btn4 = document.getElementById("btn_4");
btn4.addEventListener("click", addText);

function addText(){
    var newEl = document.createElement("h2");
    var newContent = document.createTextNode("This is a new heading!");
    // show where to position content
    newEl.appendChild(newContent);
    output.appendChild(newEl);
    btn4.removeEventListener("click", addText);
}