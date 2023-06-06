const container = document.getElementById('container');
container.style.borderStyle = "solid";
container.style.borderColor = "black";
var cellH;


function createGrid() {

for (let y = 0; y < 256; y++) {

    
        cellH = document.createElement('div');
        cellH.setAttribute('id', 'cellH');
        container.appendChild(cellH);
        cellH.style.backgroundColor = "white";
        cellH.style.height = "60px";
        cellH.style.width = "60px";
        
        
    
   
    
}}

createGrid();

const cells = container.querySelectorAll('#cellH');

function paint() {

        cells.forEach(cellH => cellH.addEventListener("mouseover", () => {
                cellH.style.backgroundColor = "black";
}))


}

function reset() {
        cells.forEach(cellH => cellH.style.backgroundColor = "white")
}




        



