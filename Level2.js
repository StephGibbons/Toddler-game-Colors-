const circlepurple = document.getElementById('Square');
const circleblue = document.getElementById('Circle');
const circlered = document.getElementById('Star');
const circleorange = document.getElementById('Triangle');
const circlegreen = document.getElementById('Heart');
const circleyellow = document.getElementById('Pentagon');

const purpleBlock = document.querySelector('HeartOutline');
const blueBlock = document.querySelector('CircleOutline');
const greenBlock = document.querySelector('SquareOutline');
const yellowBlock = document.querySelector('TriangleOutline');
const orangeBlock = document.querySelector('StarOutline');
const redBlock = document.querySelector('PentagonOutline');





//Circle Listeners

//purple
    circlepurple.addEventListener('dragstart', dragStart);
    circlepurple.addEventListener('dragend', dragEnd);
//blue
    circleblue.addEventListener('dragstart', dragStart);
    circleblue.addEventListener('dragend', dragEnd);
//green
    circlegreen.addEventListener('dragstart', dragStart);
    circlegreen.addEventListener('dragend', dragEnd);
//yellow
    circleyellow.addEventListener('dragstart', dragStart);
    circleyellow.addEventListener('dragend', dragEnd);
//orange
    circleorange.addEventListener('dragstart', dragStart);
    circleorange.addEventListener('dragend', dragEnd);
//red
    circlered.addEventListener('dragstart', dragStart);
    circlered.addEventListener('dragend', dragEnd);


//Colorblock Listeners

//purple
    purpleBlock.addEventListener('dragover', dragOver);
    purpleBlock.addEventListener('dragenter', dragEnter);
    purpleBlock.addEventListener('dragleave', dragLeave);
    purpleBlock.addEventListener('drop', dragDrop);
   
//blue
    blueBlock.addEventListener('dragover', dragOver);
    blueBlock.addEventListener('dragenter', dragEnter);
    blueBlock.addEventListener('dragleave', dragLeaveBlue);
    blueBlock.addEventListener('drop', dragDropBlue);
//green
    greenBlock.addEventListener('dragover', dragOver);
    greenBlock.addEventListener('dragenter', dragEnter);
    greenBlock.addEventListener('dragleave', dragLeaveGreen);
    greenBlock.addEventListener('drop', dragDropGreen);

//yellow
    yellowBlock.addEventListener('dragover', dragOver);
    yellowBlock.addEventListener('dragenter', dragEnter);
    yellowBlock.addEventListener('dragleave', dragLeaveYellow);
    yellowBlock.addEventListener('drop', dragDropYellow);
//orange
    orangeBlock.addEventListener('dragover', dragOver);
    orangeBlock.addEventListener('dragenter', dragEnter);
    orangeBlock.addEventListener('dragleave', dragLeaveOrange);
    orangeBlock.addEventListener('drop', dragDropOrange);
//red
    redBlock.addEventListener('dragover', dragOver);
    redBlock.addEventListener('dragenter', dragEnter);
    redBlock.addEventListener('dragleave', dragLeaveRed);
    redBlock.addEventListener('drop', dragDropRed); 





//Drag Functions
function dragStart(e){
    this.className += ' hold';
    setTimeout(()=>(this.className = 'invisible'),0);
    e.dataTransfer.setData("id", e.target.id);
}

function dragEnd(){
    this.className = 'circle';
} 

function dragOver(e){
    e.preventDefault();
}

function dragEnter(e){
    e.preventDefault();
    this.className += ' hover';
}

//colorspecificfunctions

//purple



function dragLeave(){
    this.className = 'ColorPurple';
}

function dragDrop(e){
    if(mouseOver = "purpleBlock"){
        var elementId = e.dataTransfer.getData("id");
        if(elementId === "circlepurple"){
    this.className = 'ColorPurple';
    this.append(circlepurple);  
        }
    }  
}
//blue
function dragLeaveBlue(){
    this.className = 'ColorBlue';
}

function dragDropBlue(e){
    if(mouseOver = "blueBlock"){
        var elementId = e.dataTransfer.getData("id");
        if(elementId === "circleblue"){
    this.className = 'ColorBlue';
    this.append(circleblue);  
        }
    }
}

//green
function dragLeaveGreen(){
    this.className = 'ColorGreen';
}

function dragDropGreen(e){
    if(mouseOver = "greenBlock"){
        var elementId = e.dataTransfer.getData("id");
        if(elementId === "circlegreen"){
    this.className = 'ColorGreen';
    this.append(circlegreen);  
        }
    }
}

//yellow
function dragLeaveYellow(){
    this.className = 'ColorYellow';
}

function dragDropYellow(e){
    if(mouseOver = "yellowBlock"){
        var elementId = e.dataTransfer.getData("id");
        if(elementId === "circleyellow"){
    this.className = 'ColorYellow';
    this.append(circleyellow);  
        }
    }
}

//orange
function dragLeaveOrange(){
    this.className = 'ColorOrange';
}

function dragDropOrange(e){
    if(mouseOver = "orangeBlock"){
        var elementId = e.dataTransfer.getData("id");
        if(elementId === "circleorange"){
    this.className = 'ColorOrange';
    this.append(circleorange);  
        }
    }
}

//red
function dragLeaveRed(){
    this.className = 'ColorRed';
}

function dragDropRed(e){
    if(mouseOver = "redBlock"){
        var elementId = e.dataTransfer.getData("id");
        if(elementId === "circlered"){
    this.className = 'ColorRed';
    this.append(circlered);  
        }
    }
}