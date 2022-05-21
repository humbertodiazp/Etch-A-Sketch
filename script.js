const cells = document.getElementsByClassName('cell');
const restartButton = document.getElementById('reset')
const firstChoice = document.getElementById('firstChoice');
const secondChoice = document.getElementById('secondChoice');
const thirdChoice = document.getElementById('thirdChoice');


newGrid(25);

function newGrid(x) {
  let i=0, n=x;

  grid.innerHTML = 
  `<div class="row">${'<div class="cell"></div>'.repeat(n)}</div>`
  .repeat(n)
}


// firstChoice.addEventListener('click', newBoard(25))
// secondChoice.addEventListener('click', newBoard(50))
// thirdChoice.addEventListener('click', newBoard(75))


firstChoice.addEventListener('click', ()=> newGrid(25));


secondChoice.addEventListener('click', ()=>newBoard(50) );

thirdChoice.addEventListener('click', ()=>newGrid(75) );



// }
// secondChoice.addEventListener('click', () => {
//   newBoard = newGrid(50)
//   for (const element of cells) {
//     element.style.backgroundColor = '#b1acaa';
//     element.style.width = '19.2px'; 
//     element.style.height = '19.2px'; 
// }

// Choice.addEventListener('click', () => {
//   newBoard = newGrid(50)
//   for (const element of cells) {
//     element.style.backgroundColor = '#b1acaa';
//     element.style.width = '19.2px'; 
//     element.style.height = '19.2px'; 
// }


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
    element.style.backgroundColor = '#b1acaa';
  }}