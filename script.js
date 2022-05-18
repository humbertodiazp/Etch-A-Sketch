const cells = document.getElementsByClassName('cell');
const restartButton = document.getElementById('reset')
const arrayElements = [cells] 



function newGrid(x) {
  let i=0, n=x;

  grid.innerHTML = 
  `<div class="row">${'<div class="cell"></div>'.repeat(n)}</div>`
  .repeat(n)
}
newGrid(16);



// for each div in grid change background on hover

Array.from(cells).forEach(v => v.addEventListener('mouseover', function() {                    
    v.style.backgroundColor = 'black';             
  }));

                    
Array.from(cells).forEach(v => v.addEventListener('mouseout', function() {
  v.style.backgroundColor = 'black';
}));


restartButton.addEventListener('click', reset)

// restartButton.addEventListener('click', clearBlock())

function reset(){
  forEach(arrayElements => {
    arrayElements.style.backgroundColor ='gray';
  })}


                                                                                                                                                                                                                                                                                                                                                                                                                                                             