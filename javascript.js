const gridContainer = document.querySelector('#gridContainer');

const slider = document.querySelector('.slider');

let gridValue = slider.value;

const sliderText = document.querySelector('.sliderText');

sliderText.textContent = `${slider.value} X ${slider.value}`;

window.addEventListener('load', () => {
    gridValue = slider.value;
    makeGrid(gridValue);
    
})

slider.addEventListener('input', () => {
    sliderText.textContent = `${slider.value} X ${slider.value}`;
    
    
})

slider.addEventListener('change', () => {
    gridValue = slider.value;
    makeGrid(gridValue);
    
})



function makeGrid(gridValue) {    
    while (gridContainer.firstChild){
    gridContainer.removeChild(gridContainer.lastChild)
    }
    for (let n=0; n<gridValue; n++) {
        const gridRow = document.createElement('div');
        gridRow.classList.add('gridRow');
        for (let i = 0; i <gridValue; i++) {
            const gridSquare = document.createElement('div');
            gridSquare.classList.add('square');
            gridRow.appendChild(gridSquare);
        };
        gridContainer.appendChild(gridRow);

    }
    sketching();
}

function sketching() {
    console.log('Im getting squares');
    const squares = document.querySelectorAll('.square');
    squares.forEach((square) => {
        square.addEventListener('mouseenter', () => {
            square.classList.add('selected');
        })
    })

    const clear = document.querySelector('.reset');
    clear.addEventListener('click', () => {
        squares.forEach((square) => {
            square.classList.remove('selected');
    })
})
}


