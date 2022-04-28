const one = document.getElementById('one');
const two = document.getElementById('two');
const three = document.getElementById('three');
const four = document.getElementById('four');
const five = document.getElementById('five');
const six = document.getElementById('six');

const fiveOutline = document.getElementById('fiveOutline');
const twoOutline = document.getElementById('twoOutline');
const oneOutline = document.getElementById('oneOutline');
const fourOutline = document.getElementById('fourOutline');
const threeOutline = document.getElementById('threeOutline');
const sixOutline = document.getElementById('sixOutline');





//two Listeners

//one
    one.addEventListener('dragstart', dragthreet);
    one.addEventListener('dragend', dragEnd);
//cricle
    two.addEventListener('dragstart', dragthreet);
    two.addEventListener('dragend', dragEnd);
//five
    five.addEventListener('dragstart', dragthreet);
    five.addEventListener('dragend', dragEnd);
//six
    six.addEventListener('dragstart', dragthreet);
    six.addEventListener('dragend', dragEnd);
//four
    four.addEventListener('dragstart', dragthreet);
    four.addEventListener('dragend', dragEnd);
//three
    three.addEventListener('dragstart', dragthreet);
    three.addEventListener('dragend', dragEnd);


//Colorblock Listeners
   
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





//Drag Functions
function dragstart(e){
    this.className += ' hold';
    setTimeout(()=>(this.className = 'invisible'),0);
    e.dataTransfer.setData("id", e.target.id);
}

function dragEnd(){
    this.className = 'shape';
} 

function dragOver(e){
    e.preventDefault();
}

function dragEnter(e){
    e.preventDefault();
    this.className += ' hover';
}

//shapespecificfunctions

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

//three
function dragLeavethree(){
    this.className = 'Colorthree';
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
    sixOutline.classList.remove("shapeOutlines") 
    sixOutline.classList.add("invisible")
    
    
   
        }
    }
}