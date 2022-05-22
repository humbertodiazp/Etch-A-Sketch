const cells = document.getElementsByClassName('cell');
const restartButton = document.getElementById('reset')
const firstChoice = document.getElementById('firstChoice');
const secondChoice = document.getElementById('secondChoice');
const thirdChoice = document.getElementById('thirdChoice');



function newGrid(x) {
  let i=0, n=x;

  grid.innerHTML = 
  `<div class="row">${'<div class="cell"></div>'.repeat(n)}</div>`
  .repeat(n)
  //running this inside the function lends the hover effect
  // to all instances of newGrid
  Array.from(cells).forEach(v => v.addEventListener('mouseover', function() {                    
    v.style.backgroundColor = 'black';             
  }));
  
                    
  Array.from(cells).forEach(v => v.addEventListener('mouseout', function() {
  v.style.backgroundColor = 'black';
  }));
  
}

newGrid(25);


//add event listeners to call newBoard function that will change cell size
firstChoice.addEventListener('click', ()=> newBoard(25));
secondChoice.addEventListener('click', ()=>newBoard(50) );
thirdChoice.addEventListener('click', ()=>newBoard(75) );

//add event listener to all cells to create hover effect
Array.from(cells).forEach(v => v.addEventListener('mouseover', function() {                    
  v.style.backgroundColor = 'black';             
}));

Array.from(cells).forEach(v => v.addEventListener('mouseout', function() {
v.style.backgroundColor = 'black';
}));

//creates new grid based on event listener input with the correct cell size 
//based on conditional relationships

function newBoard(x){
  

  newGrid(x);
  for (const element of cells) {
    element.style.backgroundColor = '#b1acaa';
    if (x == 50){
      element.style.width = '19.2px'; 
      element.style.height = '19.2px'; 
    }else if(x == 75){
      element.style.width = '12.8px'; 
      element.style.height = '12.8px'; 
    }else{
      element.style.width = '38.4px'; 
      element.style.height = '38.4px'; 
      }
    }
}
    


// for each div in grid change background on hover



restartButton.addEventListener('click', reset)

// restartButton.addEventListener('click', clearBlock())
// removing the () from reset() prevents the function from being
//called at start of program. 

function reset(){
  for (const element of cells) {
    element.style.backgroundColor = '#b1acaa';
  }}