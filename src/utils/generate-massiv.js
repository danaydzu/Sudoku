
function true_in_cub(element, massiv) {
  for (let _ of massiv) {
    if (_.includes(element)) return true;
  }
  return false;
}

 function true_in_horizontal(element, arr_y, y) {
  for (let _ of arr_y) {
    if (_[y].includes(element)) return true;
  }
  return false;
}
export function true_in_horizontal_2(element, arr_y, indexBig, y) {
  let count = -1

  for (let _ of arr_y) {
    count++
    if (_[y].includes(element)) return {indexBig: indexBig,indexMiddle: count, indexCells: y, index: _[y].indexOf(element)};
  }
  return false;
}
export function true_in_vertical_2(element, arr_x, x_x, x) {
  let count_big = -1
  let count_cells = -1

  for (let _ of arr_x) {
    count_big++

    for (let i of _[x_x]) {
      count_cells++
      if (i[x] === element) {
        console.log({indexBig: count_big, indexMiddle: x_x, indexCells: count_cells, index: x})
        return {indexBig: count_big, indexMiddle: x_x, indexCells: count_cells, index: x};
      }
    }
    count_cells = -1
  }
  return false;
}


 function true_in_vertical(element, arr_x, x_x, x, y) {
  for (let _ of arr_x) {
    for (let i of _[x_x]) {
      if (i[x] === element) {
        return true;
      }
    }
  }
  return false;
}

function func(massiv, arr_y, arr_x, x_x) {
  for (let y = 0; y < massiv.length; y++) {
    for (let x = 0; x < massiv[y].length; x++) {
      let element = Math.floor(Math.random() * 9) + 1;
      let count = 0;
      while (true_in_cub(element, massiv) || true_in_horizontal(element, arr_y, y) || true_in_vertical(element, arr_x, x_x, x, y)) {
        element = Math.floor(Math.random() * 9) + 1;
        count += 1;
        if (count >= 100) {
          return false;
        }
      }
      massiv[y][x] = element;
    }
  }
  return massiv;
}

function _good(massiv) {
  for (let x_3cub = 0; x_3cub < massiv.length; x_3cub++) {
    for (let cub = 0; cub < massiv[x_3cub].length; cub++) {
      let get = func(massiv[x_3cub][cub], massiv[x_3cub], massiv, cub);
      if (get === false) return false;
      massiv[x_3cub][cub] = get;
    }
  }
  return massiv;
}


function print_sudoku(massiv) {
  let output = '';
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      output += massiv[Math.floor(i / 3)][Math.floor(j / 3)][i % 3][j % 3] + '. ';
    }
    output += '\n';
  }
  console.log(output);
}
export default function sudokuStart() {
  let array_2 = Array(3).fill().map(() => Array(3).fill().map(() => Array(3).fill().map(() => Array(3).fill(0))));

  let irr = _good(JSON.parse(JSON.stringify(array_2)));
  while (!irr) {
    irr = _good(JSON.parse(JSON.stringify(array_2)));
  }
  return irr
}


