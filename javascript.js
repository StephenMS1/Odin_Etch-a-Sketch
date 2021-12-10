const gridContainer = document.querySelector('#gridContainer');
console.log(gridContainer)

for (let i = 0; i <64; i++) {
    const gridSquare = document.createElement('div');
    gridSquare.classList.add('square');
    gridContainer.appendChild(gridSquare);
};