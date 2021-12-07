const fs = require('fs');
// const input = fs.readFileSync("./inputBingoExample.txt").toString('utf-8').split('\n').filter(x => x != "")
const input = fs.readFileSync("./inputBingo.txt").toString('utf-8').split('\n').filter(x => x != "")
const drawableNumber = input[0].split(",").map(Number);
input.shift();

let checker = (arr, target) => target.every(v => arr.includes(v));

const calculateScore = (grid,playedNumbers) => {
  console.log('score',grid.flat().filter(num => !playedNumbers.includes(num)).reduce((prev, curr) => prev+ curr,0) * playedNumbers[playedNumbers.length-1])
}


/**
 *return col of 2d array
 * @param {array} matrix
 * @param {number} col
 * @returns array
 */
function getCol(matrix, col){
       var column = [];
       for(var i=0; i<matrix.length; i++){
          column.push(matrix[i][col]);
       }
       return column;
    }

const boardList = [];
for (let currentLine = 0; currentLine < input.length / 5; currentLine++) {
  let board = [];
  for (let x = 0; x < 5; x++) {
    board.push(input[(currentLine * 5) + x].split(" ").filter(n => n != "").map(Number))
  }
  boardList.push(board);
}

const playedNumbers = []

////////////PPPPPPPPPPPPPAAAAAAAAAAAAARRRRRRRRRRTTTTTTTTTTT11111111////////

// let bingo = false

//  for(i=0; i < drawableNumber.length; i++) {
//    if (bingo) return
//    playedNumbers.push(drawableNumber[i])
//    for(j=0; j < boardList.length; j++) {
//     if (bingo) break
//     // cols
//     for(l=0; l<boardList[j].length; l++) {
//       if (checker(playedNumbers, getCol(boardList[j], l))){
//         console.log('Bingo ColumNS',boardList[j],playedNumbers )
//         bingo = true
//         calculateScore(boardList[j],playedNumbers)
//         break
//       }
//     }
//     //lines
//     for(k=0; k < boardList[j].length; k++) {
//       if (checker(playedNumbers, boardList[j][k])) {
//         console.log('Bingo Lines')
//         bingo = true
//         calculateScore(boardList[j],playedNumbers)
//         break
//       }
//      }
//    }
//  }


////////////PPPPPPPPPPPPPAAAAAAAAAAAAARRRRRRRRRRTTTTTTTTTTT222222222222////////
// stock winBoards
let winBoards = []

for(i=0; i < drawableNumber.length; i++) {
   playedNumbers.push(drawableNumber[i])
   for(j=0; j < boardList.length; j++) {
     // cols
     for(l=0; l<boardList[j].length; l++) {
       if (checker(playedNumbers, getCol(boardList[j], l))){
         // console.log('Bingo ColumNS',boardList[j],playedNumbers )
         if (!winBoards.includes(boardList[j])) {
           calculateScore(boardList[j],playedNumbers)
           console.log('pushing')
         winBoards.push(boardList[j])}
        break
      }
    }
    //lines
    for(k=0; k < boardList[j].length; k++) {
      if (checker(playedNumbers, boardList[j][k])) {
        // console.log('Bingo Lines')
        if (!winBoards.includes(boardList[j])) {
          calculateScore(boardList[j],playedNumbers)
          console.log('pushing')
         winBoards.push(boardList[j])}
        break
      }
    }
  }
 }

// tests
// Part 1 4512
// Part 2 1924


// solutions
// Part 1  16716
// Part 2  4880
