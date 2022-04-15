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

//square
    square.addEventListener('dragstart', dragStart);
    square.addEventListener('dragend', dragEnd);
//cricle
    circle.addEventListener('dragstart', dragStart);
    circle.addEventListener('dragend', dragEnd);
//heart
    heart.addEventListener('dragstart', dragStart);
    heart.addEventListener('dragend', dragEnd);
//pentagon
    pentagon.addEventListener('dragstart', dragStart);
    pentagon.addEventListener('dragend', dragEnd);
//triangle
    triangle.addEventListener('dragstart', dragStart);
    triangle.addEventListener('dragend', dragEnd);
//star
    star.addEventListener('dragstart', dragStart);
    star.addEventListener('dragend', dragEnd);


//Colorblock Listeners

//heart
    heartOutline.addEventListener('dragover', dragOver);
    heartOutline.addEventListener('dragenter', dragEnter);
    heartOutline.addEventListener('dragleave', dragLeaveHeart);
    heartOutline.addEventListener('drop', dragDropHeart);
   
//circle
    circleOutline.addEventListener('dragover', dragOver);
    circleOutline.addEventListener('dragenter', dragEnter);
    circleOutline.addEventListener('dragleave', dragLeaveCircle);
    circleOutline.addEventListener('drop', dragDropCircle);
//square
    squareOutline.addEventListener('dragover', dragOver);
    squareOutline.addEventListener('dragenter', dragEnter);
    squareOutline.addEventListener('dragleave', dragLeaveSquare);
    squareOutline.addEventListener('drop', dragDropSquare);

//triangle
    triangleOutline.addEventListener('dragover', dragOver);
    triangleOutline.addEventListener('dragenter', dragEnter);
    triangleOutline.addEventListener('dragleave', dragLeaveTriangle);
    triangleOutline.addEventListener('drop', dragDropTriangle);
//Star
    starOutline.addEventListener('dragover', dragOver);
    starOutline.addEventListener('dragenter', dragEnter);
    starOutline.addEventListener('dragleave', dragLeaveStar);
    starOutline.addEventListener('drop', dragDropStar);
//Pentagon
    pentagonOutline.addEventListener('dragover', dragOver);
    pentagonOutline.addEventListener('dragenter', dragEnter);
    pentagonOutline.addEventListener('dragleave', dragLeavePentagon);
    pentagonOutline.addEventListener('drop', dragDropPentagon); 





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

//heart
function dragLeaveHeart(){
    this.elementName = 'heartOutline';
}

function dragDropHeart(e){
    if(mouseOver = "heartOutline"){
        var elementId = e.dataTransfer.getData("id");
        if(elementId === "heart"){
    this.elementId = 'heartOutline';
    this.append(heart);  
        }
    }  
}
//circle
function dragLeaveCircle(){
    this.elementID = 'circleOutline';
}

function dragDropCircle(e){
    if(mouseOver = "circleOutline"){
        var elementId = e.dataTransfer.getData("id");
        if(elementId === "circle"){
    this.elementId = 'circleOutline';
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

function dragDropTriangle(e){
    if(mouseOver = "triangleOutline"){
        var elementId = e.dataTransfer.getData("id");
        if(elementId === "pentagon"){
    this.className = 'ColorYellow';
    this.append(pentagon);  
        }
    }
}

//Star
function dragLeaveStar(){
    this.className = 'ColorStar';
}

function dragDropStar(e){
    if(mouseOver = "starOutline"){
        var elementId = e.dataTransfer.getData("id");
        if(elementId === "triangle"){
    this.className = 'ColorStar';
    this.append(triangle);  
        }
    }
}

//Pentagon
function dragLeavePentagon(){
    this.className = 'ColorPentagon';
}

function dragDropPentagon(e){
    if(mouseOver = "pentagonOutline"){
        var elementId = e.dataTransfer.getData("id");
        if(elementId === "star"){
    this.className = 'ColorPentagon';
    this.append(star);  
        }
    }
}