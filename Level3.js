const one = document.getElementById('one');
const two = document.getElementById('two');
const three = document.getElementById('three');
const four = document.getElementById('four');
const five = document.getElementById('five');
const six = document.getElementById('six');
const seven = document.getElementById('seven');
const eight = document.getElementById('eight');
const nine = document.getElementById('nine');
const ten = document.getElementById('ten');


const twoOutline = document.getElementById('twoOutline');
const oneOutline = document.getElementById('oneOutline');
const threeOutline = document.getElementById('threeOutline');
const fourOutline = document.getElementById('fourOutline');
const fiveOutline = document.getElementById('fiveOutline');
const sixOutline = document.getElementById('sixOutline');
const sevenOutline = document.getElementById('sevenOutline');
const eightOutline = document.getElementById('eightOutline');
const nineOutline = document.getElementById('nineOutline');
const tenOutline = document.getElementById('tenOutline');




//number

//one
    one.addEventListener('dragstart', dragstart);
    one.addEventListener('dragend', dragEnd);
//two
    two.addEventListener('dragstart', dragstart);
    two.addEventListener('dragend', dragEnd);
//three
    three.addEventListener('dragstart', dragstart);
    three.addEventListener('dragend', dragEnd);
//four
    four.addEventListener('dragstart', dragstart);
    four.addEventListener('dragend', dragEnd);
//five
    five.addEventListener('dragstart', dragstart);
    five.addEventListener('dragend', dragEnd);
//six
    six.addEventListener('dragstart', dragstart);
    six.addEventListener('dragend', dragEnd);
//seven
    seven.addEventListener('dragstart', dragstart);
    seven.addEventListener('dragend', dragEnd);

//eight
    eight.addEventListener('dragstart', dragstart);
    eight.addEventListener('dragend', dragEnd);

//nine
    nine.addEventListener('dragstart', dragstart);
    nine.addEventListener('dragend', dragEnd);

//ten
    ten.addEventListener('dragstart', dragstart);
    ten.addEventListener('dragend', dragEnd);


//numberlisteners
   
//one
    oneOutline.addEventListener('dragover', dragOver);
    oneOutline.addEventListener('dragenter', dragEnter);
    oneOutline.addEventListener('dragleave', dragLeaveone);
    oneOutline.addEventListener('drop', dragDropone);

 //two
    twoOutline.addEventListener('dragover', dragOver);
    twoOutline.addEventListener('dragenter', dragEnter);
    twoOutline.addEventListener('dragleave', dragLeavetwo);
    twoOutline.addEventListener('drop', dragDroptwo);

//three
    threeOutline.addEventListener('dragover', dragOver);
    threeOutline.addEventListener('dragenter', dragEnter);
    threeOutline.addEventListener('dragleave', dragLeavethree);
    threeOutline.addEventListener('drop', dragDropthree);

//four
    fourOutline.addEventListener('dragover', dragOver);
    fourOutline.addEventListener('dragenter', dragEnter);
    fourOutline.addEventListener('dragleave', dragLeavefour);
    fourOutline.addEventListener('drop', dragDropfour);

//five
    fiveOutline.addEventListener('dragover', dragOver);
    fiveOutline.addEventListener('dragenter', dragEnter);
    fiveOutline.addEventListener('dragleave', dragLeavefive);
    fiveOutline.addEventListener('drop', dragDropfive);

//six
    sixOutline.addEventListener('dragover', dragOver);
    sixOutline.addEventListener('dragenter', dragEnter);
    sixOutline.addEventListener('dragleave', dragLeavesix);
    sixOutline.addEventListener('drop', dragDropsix); 

//seven
    sevenOutline.addEventListener('dragover', dragOver);
    sevenOutline.addEventListener('dragenter', dragEnter);
    sevenOutline.addEventListener('dragleave', dragLeaveseven);
    sevenOutline.addEventListener('drop', dragDropseven); 

//eight
    eightOutline.addEventListener('dragover', dragOver);
    eightOutline.addEventListener('dragenter', dragEnter);
    eightOutline.addEventListener('dragleave', dragLeaveeight);
    eightOutline.addEventListener('drop', dragDropeight); 

//nine
    nineOutline.addEventListener('dragover', dragOver);
    nineOutline.addEventListener('dragenter', dragEnter);
    nineOutline.addEventListener('dragleave', dragLeavenine);
    nineOutline.addEventListener('drop', dragDropnine); 

//ten
    tenOutline.addEventListener('dragover', dragOver);
    tenOutline.addEventListener('dragenter', dragEnter);
    tenOutline.addEventListener('dragleave', dragLeaveten);
    tenOutline.addEventListener('drop', dragDropten); 





//Drag Functions
function dragstart(e){
    this.className += ' hold';
    setTimeout(()=>(this.className = 'invisible'),0);
    e.dataTransfer.setData("id", e.target.id);
}

function dragEnd(){
    this.className = 'numbers';
} 

function dragOver(e){
    e.preventDefault();
}

function dragEnter(e){
    e.preventDefault();
}

//numberspecificfunctions

//one
function dragLeaveone(){
    this.elementId = 'oneOutline';
}

function dragDropone(e){
    if(mouseOver = "oneOutline"){
        var elementId = e.dataTransfer.getData("id");
        if(elementId === "one"){
    this.elementId = 'oneOutline';
    this.append(one);  
        }
    }
}

//two
function dragLeavetwo(){
    this.elementId = 'twoOutline';
}

function dragDroptwo(e){
    if(mouseOver = "twoOutline"){
        var elementId = e.dataTransfer.getData("id");
        if(elementId === "two"){
    this.elementId = 'twoOutline';
    this.append(two);  
        }
    }
}

//three
function dragLeavethree(){
    this.elementID = 'three';
}

function dragDropthree(e){
    if(mouseOver = "threeOutline"){
        var elementId = e.dataTransfer.getData("id");
        if(elementId === "three"){
    this.elementId = 'threeOutline';
    this.append(three);  
        }
    }
}

//four
function dragLeavefour(){
    this.elementId = 'fourOutline';
}

function dragDropfour(e){
    if(mouseOver = "fourOutline"){
        var elementId = e.dataTransfer.getData("id");
        if(elementId === "four"){
    this.elementId = 'fourOutline';
    this.append(four);  
        }
    }
}
//five
function dragLeavefive(){
    this.elementId = 'fiveOutline';
}

function dragDropfive(e){
    if(mouseOver = "fiveOutline"){
        var elementId = e.dataTransfer.getData("id");
        if(elementId === "five"){
    this.elementId = 'fiveOutline';
    this.append(five);  
        }
    }  
}

//six
function dragLeavesix(){
    this.elementId = 'sixOutline';
}

function dragDropsix(e){
    if(mouseOver = "sixOutline"){
        var elementId = e.dataTransfer.getData("id");
        if(elementId === "six"){
    this.elementId = 'sixOutline';
    this.append(six); 

        }
    }
}

//seven
function dragLeaveseven(){
    this.elementID = 'seven';
}

function dragDropseven(e){
    if(mouseOver = "sevenOutline"){
        var elementId = e.dataTransfer.getData("id");
        if(elementId === "seven"){
    this.elementId = 'sevenOutline';
    this.append(seven);  
        }
    }
}

//eigth
function dragLeaveeight(){
    this.elementID = 'eight';
}

function dragDropeight(e){
    if(mouseOver = "eightOutline"){
        var elementId = e.dataTransfer.getData("id");
        if(elementId === "eight"){
    this.elementId = 'eightOutline';
    this.append(eight);  
        }
    }
}
//nine
function dragLeavenine(){
    this.elementID = 'nine';
}

function dragDropnine(e){
    if(mouseOver = "nineOutline"){
        var elementId = e.dataTransfer.getData("id");
        if(elementId === "nine"){
    this.elementId = 'nineOutline';
    this.append(nine);  
        }
    }
}
//ten
function dragLeaveten(){
    this.elementID = 'ten';
}

function dragDropten(e){
    if(mouseOver = "tenOutline"){
        var elementId = e.dataTransfer.getData("id");
        if(elementId === "ten"){
    this.elementId = 'ten';
    this.append(ten);  
        }
    }
}