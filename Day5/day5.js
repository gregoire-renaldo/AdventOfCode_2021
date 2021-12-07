const fs = require('fs');

const input = fs.readFileSync("./sample.txt").toString('utf-8').split('\n').filter(x => x != "")

const parsed = input.map((a) => a.split('->')
                      .map((b) => b.split(',')
                        .map((c) => parseInt(c)
                        )
                      )
                    )
// console.log(parsed)

let xs = []
let ys = []
for (i = 0; i< parsed.length; i++) {
  xs.push(parsed[i][0][0], parsed[i][1][0])
  ys.push(parsed[i][0][1], parsed[i][1][1])
}

// map of point
// [[0][0] * [maxX, maxY]]
const maxX = Math.max(...xs) + 1;
const maxY = Math.max(...ys) + 1;

const boardOfPoints = []
for (l = 0; l < maxX; l ++) {
  let line = []
  for (c =0; c <maxY; c ++) {
    line.push(parseInt(0))
  }
  boardOfPoints.push(line)
}
// boardOfPoints[0][0] +=16468
// console.log(boardOfPoints)
// console.log(parsed[0][0][0],parsed[0][1][0] )
// console.log()
for (z = 0; z < parsed.length; z++) {
  // y first line y equals x1 < x2 , go left
  //      9                      9                   0                 5
  if ((parsed[z][0][1] = parsed[z][1][1]) & (parsed[z][0][0] < parsed[z][1][0] )  ) {
      // add 1 to x y on board
      // loop until x1 = x2
      for (t = 0; t <= parsed[z][1][0]; t++ ) {
       console.log(boardOfPoints[parsed[z][0][0]][parsed[z][0][1]] +=1)

      }
  }
}
console.log(boardOfPoints)
// let n = 0;

// while (n < 3) {
//   n++;
// }

// [
//   '0,9 -> 5,9', '8,0 -> 0,8',
//   '9,4 -> 3,4', '2,2 -> 2,1',
//   '7,0 -> 7,4', '6,4 -> 2,0',
//   '0,9 -> 2,9', '3,4 -> 1,4',
//   '0,0 -> 8,8', '5,5 -> 8,2'
// ]

// [
//   [[0,9], [5,9]],
//   [[8.0], [0.8]],
//   [[9.4], [3.4]],
// ]

// [x1,y1 -> x2,y2]
// x1 = x2 or y1 = y2

// .......1..
// ..1....1..
// ..1....1..
// .......1..
// .112111211
// ..........
// ..........
// ..........
// ..........
// 222111....



// top left [0][0]

// '0,9 -> 5,9  [0][9] -> [5][9]
// go down [x1,y1] [x2,y2] y1=y2 and x2 > x1, add1 to points [4][9] [3][9] ..[0][9],


// go up [x1,y1] [x2,y2] y1=y2 and x1 > x2

// go left [x1,y1] [x2,y2] x1=x2 and y2>y1
// go right [x1,y1] [x2,y2] x1=x2 and y1>y2


// [
// [0,0,0,0,0,0,0,0,0,0],
// [0,0,0,0,0,0,0,0,0,0],
// [0,0,0,0,0,0,0,0,0,0],
// [0,0,0,0,0,0,0,0,0,0],
// [0,0,0,0,0,0,0,0,0,0],
// [0,0,0,0,0,0,0,0,0,0],
// [0,0,0,0,0,0,0,0,0,0],
// [0,0,0,0,0,0,0,0,0,0],
// [0,0,0,0,0,0,0,0,0,0],
// [0,0,0,0,0,0,0,0,0,0]
// ]
