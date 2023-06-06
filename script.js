const container = document.getElementById('container');
container.style.borderStyle = "solid";
container.style.borderColor = "black";
var cellH;
var size;
var sizeW;
var sizeH;

function sizePrompt () {       

        let sizePrompt = prompt("Select grid height (must be a mutiple of 16, between 16 and 144):")
        size = parseInt(sizePrompt)*parseInt(sizePrompt);
        sizeH = 960/sizePrompt;
        sizeW = 960/sizePrompt;

        if (parseInt(sizePrompt) > 160) {

                alert("Size too high (must be a divider of 960, between 16 and 160)!");
                } else if (parseInt(sizePrompt) < 16) {
                alert("Size too small (must be a divider of 960, between 16 and 160)!");
                } else if (Number.isInteger(sizeW)) {
                createGrid();
                } else if (isNaN(sizePrompt)) {
                        alert("Not a number.")
                } else {
                        alert("Not a divider of 960.")
                }

}

function createGrid() {

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

        const cells = container.querySelectorAll('#cellH');

        cells.forEach(cellH => cellH.addEventListener("mouseover", () => {

                cellH.style.backgroundColor = "black";

        })
        )

}

function reset() {

        const cells = container.querySelectorAll('#cellH');
        cells.forEach(cellH => cellH.style.backgroundColor = "white")

}




        



