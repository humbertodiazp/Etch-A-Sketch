let i=0, n=16;

 grid.innerHTML = 
    `<div class="row">${'<div class="cell"></div>'.repeat(n)}</div>`
    .repeat(n)

// for each div in grid change background on hover

cells = document.getElementsByClassName('cell');
Array.from(cells).forEach(v => v.addEventListener('click', function() {
    v.style.backgroundColor = 'red';
  }));

