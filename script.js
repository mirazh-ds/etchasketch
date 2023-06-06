const container = document.getElementById('container');
container.style.borderStyle = "solid";
container.style.borderColor = "black";

var cellH;
var size;
var sizeW;
var sizeH;

createGrid();

function sizePrompt () {       

        let sizePrompt = document.getElementById('size').value;
        size = parseInt(sizePrompt)*parseInt(sizePrompt);
        sizeH = 960/sizePrompt;
        sizeW = 960/sizePrompt;

        createGrid();

}

function createGrid() {

        container.replaceChildren();

        for (let y = 0; y < size; y++) {

                cellH = document.createElement('div');
                cellH.setAttribute('id', 'cellH');
                container.appendChild(cellH);
                cellH.style.backgroundColor = "white";
                cellH.style.height = sizeW+"px";
                cellH.style.width = sizeH+"px"; 
        
        }

}

function paint() {

        let color = document.getElementById('color').value;
        const cells = container.querySelectorAll('#cellH');
        cells.forEach(cellH => cellH.addEventListener("mouseover", () => {

                cellH.style.backgroundColor = `${color}`;

        })

        )

}

function erase() {

        const cells = container.querySelectorAll('#cellH');
        cells.forEach(cellH => cellH.addEventListener("mouseover", () => {
                cellH.style.backgroundColor = "white";
        }))
        
}

function reset() {

        const cells = container.querySelectorAll('#cellH');
        cells.forEach(cellH => cellH.style.backgroundColor = "white")

}






        



