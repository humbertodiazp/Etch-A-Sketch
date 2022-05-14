let i=0, n=16;

grid.innerHTML = 
    `<div class="row">${'<div class="cell"></div>'.repeat(n)}</div>`
    .repeat(n)


cell = document.querySelector('.cell')


cell.addEventListener('hover', () =>{
    cell.style.backgroundColor = 'black';
})


                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             




















// window.addEventListener("load", () => {
//     // (B1) DATA ARRAY
//     var data = [
//       ["A", "B", "C"],
//       ["D", "E", "F"]
//     ];
   
//     // (B2) LOOP + ADD CELLS
//     let container = document.getElementById("grid");
//     for (let i of data) { for (let j of i) {
//       let cell = document.createElement("div");
//       cell.innerHTML = j;
//       cell.className = "cell";
//       container.appendChild(cell);
//     }}
//   });

//   // Function that builds a grid in the "container"
// function createGrid(x) {
//     for (var rows = 0; rows < x; rows++) {
//         for (var columns = 0; columns < x; columns++) {
//             $("#container").append("<div class='grid'></div>");
//         };
//     };
//     $(".grid").width(960/x);
//     $(".grid").height(960/x);
// };