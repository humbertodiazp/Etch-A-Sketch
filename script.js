const cells = document.getElementsByClassName('cell');
const restartButton = document.getElementById('reset')


window.newGrid(16);

function newGrid(x) {
  let i=0, n=x;

  grid.innerHTML = 
  `<div class="row">${'<div class="cell"></div>'.repeat(n)}</div>`
  .repeat(n)
}



// for each div in grid change background on hover

Array.from(cells).forEach(v => v.addEventListener('mouseover', function() {                    
    v.style.backgroundColor = 'black';             
  }));

                    
Array.from(cells).forEach(v => v.addEventListener('mouseout', function() {
  v.style.backgroundColor = 'black';
}));


restartButton.addEventListener('click', reset)

// restartButton.addEventListener('click', clearBlock())
// removing the () from reset() prevents the function from being
//called at start of program. 

function reset(){
  for (const element of cells) {
    element.style.backgroundColor = 'gray';
  }}