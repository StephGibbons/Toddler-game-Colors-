const square = document.getElementById('Square');
const circle = document.getElementById('Circle');
const star = document.getElementById('Star');
const triangle = document.getElementById('Triangle');
const heart = document.getElementById('Heart');
const pentagon = document.getElementById('Pentagon');

const heartOutline = document.querySelector('HeartOutline');
const circleOutline = document.querySelector('CircleOutline');
const squareOutline = document.querySelector('SquareOutline');
const triangleOutline = document.querySelector('TriangleOutline');
const starOutline = document.querySelector('StarOutline');
const pentagonOutline = document.querySelector('PentagonOutline');





//Circle Listeners

//purple
    square.addEventListener('dragstart', dragStart);
    square.addEventListener('dragend', dragEnd);
//blue
    circle.addEventListener('dragstart', dragStart);
    circle.addEventListener('dragend', dragEnd);
//green
    heart.addEventListener('dragstart', dragStart);
    heart.addEventListener('dragend', dragEnd);
//yellow
    pentagon.addEventListener('dragstart', dragStart);
    pentagon.addEventListener('dragend', dragEnd);
//orange
    triangle.addEventListener('dragstart', dragStart);
    triangle.addEventListener('dragend', dragEnd);
//red
    star.addEventListener('dragstart', dragStart);
    star.addEventListener('dragend', dragEnd);


//Colorblock Listeners

//purple
    heartoutline.addEventListener('dragover', dragOver);
    heartoutline.addEventListener('dragenter', dragEnter);
    heartoutline.addEventListener('dragleave', dragLeave);
    heartoutline.addEventListener('drop', dragDrop);
   
//blue
    circleOutline.addEventListener('dragover', dragOver);
    circleOutline.addEventListener('dragenter', dragEnter);
    circleOutline.addEventListener('dragleave', dragLeaveBlue);
    circleOutline.addEventListener('drop', dragDropBlue);
//green
    squareOutline.addEventListener('dragover', dragOver);
    squareOutline.addEventListener('dragenter', dragEnter);
    squareOutline.addEventListener('dragleave', dragLeaveGreen);
    squareOutline.addEventListener('drop', dragDropGreen);

//yellow
    triangleOutline.addEventListener('dragover', dragOver);
    triangleOutline.addEventListener('dragenter', dragEnter);
    triangleOutline.addEventListener('dragleave', dragLeaveYellow);
    triangleOutline.addEventListener('drop', dragDropYellow);
//orange
    starOutline.addEventListener('dragover', dragOver);
    starOutline.addEventListener('dragenter', dragEnter);
    starOutline.addEventListener('dragleave', dragLeaveOrange);
    starOutline.addEventListener('drop', dragDropOrange);
//red
    pentagonOutline.addEventListener('dragover', dragOver);
    pentagonOutline.addEventListener('dragenter', dragEnter);
    pentagonOutline.addEventListener('dragleave', dragLeaveRed);
    pentagonOutline.addEventListener('drop', dragDropRed); 





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
    if(mouseOver = "heartoutline"){
        var elementId = e.dataTransfer.getData("id");
        if(elementId === "circlepurple"){
    this.className = 'ColorPurple';
    this.append(square);  
        }
    }  
}
//blue
function dragLeaveBlue(){
    this.className = 'ColorBlue';
}

function dragDropBlue(e){
    if(mouseOver = "circleOutline"){
        var elementId = e.dataTransfer.getData("id");
        if(elementId === "circle"){
    this.className = 'ColorBlue';
    this.append(circle);  
        }
    }
}

//green
function dragLeaveGreen(){
    this.className = 'ColorGreen';
}

function dragDropGreen(e){
    if(mouseOver = "squareOutline"){
        var elementId = e.dataTransfer.getData("id");
        if(elementId === "heart"){
    this.className = 'ColorGreen';
    this.append(heart);  
        }
    }
}

//yellow
function dragLeaveYellow(){
    this.className = 'ColorYellow';
}

function dragDropYellow(e){
    if(mouseOver = "triangleOutline"){
        var elementId = e.dataTransfer.getData("id");
        if(elementId === "pentagon"){
    this.className = 'ColorYellow';
    this.append(pentagon);  
        }
    }
}

//orange
function dragLeaveOrange(){
    this.className = 'ColorOrange';
}

function dragDropOrange(e){
    if(mouseOver = "starOutline"){
        var elementId = e.dataTransfer.getData("id");
        if(elementId === "triangle"){
    this.className = 'ColorOrange';
    this.append(triangle);  
        }
    }
}

//red
function dragLeaveRed(){
    this.className = 'ColorRed';
}

function dragDropRed(e){
    if(mouseOver = "pentagonOutline"){
        var elementId = e.dataTransfer.getData("id");
        if(elementId === "star"){
    this.className = 'ColorRed';
    this.append(star);  
        }
    }
}