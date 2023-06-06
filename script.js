const container = document.getElementById('container');
container.style.borderStyle = "solid";
container.style.borderColor = "black";
var cellH;
var size;
var sizeW;
var sizeH;

createGrid();

function sizePrompt () {       

        let sizePrompt = prompt("Type grid width (must be a divisor of 960 (16, 20, 24, 30, 32, 40, 48, 60, 64, 80, 96, 120, 160), between 16 and 160:")
        size = parseInt(sizePrompt)*parseInt(sizePrompt);
        sizeH = 960/sizePrompt;
        sizeW = 960/sizePrompt;

        if (parseInt(sizePrompt) > 160) {

                alert("Size too high (must be between 16 and 160)!");
                } else if (parseInt(sizePrompt) < 16) {
                alert("Size too small (must be between 16 and 160)!");
                } else if (Number.isInteger(sizeW)) {
                createGrid();
                } else if (isNaN(sizePrompt)) {
                        alert("Not a number.")
                } else {
                        alert("Not a divisor of 960.")
                }

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

        let color = prompt('Type in your color (ex.: "black", "white", "red", "lightblue"...):')

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






        



