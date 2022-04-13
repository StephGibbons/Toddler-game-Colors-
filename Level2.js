const square = document.getElementById('square');
const circle = document.getElementById('circle');
const star = document.getElementById('star');
const triangle = document.getElementById('triangle');
const heart = document.getElementById('heart');
const pentagon = document.getElementById('pentagon');

const heartOutline = document.getElementById('heartOutline');
const circleOutline = document.getElementById('circleOutline');
const squareOutline = document.getElementById('squareOutline');
const triangleOutline = document.getElementById('triangleOutline');
const starOutline = document.getElementById('starOutline');
const pentagonOutline = document.getElementById('pentagonOutline');





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
    heartOutline.addEventListener('dragover', dragOver);
    heartOutline.addEventListener('dragenter', dragEnter);
    heartOutline.addEventListener('dragleave', dragLeave);
    heartOutline.addEventListener('drop', dragDrop);
   
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
    this.className = 'shape';
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
    this.elementName = 'heartOutline';
}

function dragDrop(e){
    if(mouseOver = "heartOutline"){
        var elementId = e.dataTransfer.getData("id");
        if(elementId === "heart"){
    this.className = 'heartOutline';
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