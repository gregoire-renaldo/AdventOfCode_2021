/////////////////////////////////// Jour 3 //////////////////////
const fs = require('fs')
const text = fs.readFileSync("./input.txt").toString('utf-8');
const arr  = text.split("\n")

let arrNum = []
for (i=0; i < arr.length; i++) {
  const elem = arr[i].split('')
  arrNum.push(elem)
}

// let arrNum =   [ [
//     '0', '2', '3', '4',
//     '0', '1', '0', '0',
//     '1', '1', '1', '1'
//   ],
//   [
//     '0', '0', '0', '1',
//     '0', '1', '1', '0',
//     '0', '0', '0', '0'
//   ],
// [
//     '0', '0', '0', '1',
//     '0', '1', '1', '0',
//     '0', '0', '0', '0'
//   ]]

let values0 = [0,0,0,0,0,0,0,0,0,0,0,0]
let values1 = [0,0,0,0,0,0,0,0,0,0,0,0]

for (i=0; i < arrNum.length; i++) {
  arrNum[i].forEach((el,index) => {
    if(el =='0') {
      values0[index] += 1
    } else if (el =='1') {
      values1[index] += 1
    }
  })
}
console.log('values 0 1', values0, values1)

let gamma = []
let epsilon = []
for (z=0; z < values0.length; z++) {
  let val0 = (parseInt(values0[z]))
  let val1 = (parseInt(values1[z]))
  if (val0 > val1) {
    gamma.push('0')
    epsilon.push('1')
  } else if (val1 > val0) {
    gamma.push('1')
    epsilon.push('0')
  }
}

console.log(gamma,epsilon)
const solution = (parseInt(gamma.join(''),2) * parseInt(epsilon.join(''),2))
console.log('solution1',solution)

//  gamma[
//   '0', '0', '0', '1',
//   '0', '1', '1', '0',
//   '0', '0', '0', '0'
// ]
// epsilon[
//   '1', '1', '1', '0',
//   '1', '0', '0', '1',
//   '1', '1', '1', '1'
// ]
// const arr = ['010101110000', '010011000110', '110101000011']
let oxy = [];
let co2 = [];

let oxy_filter = arr.map(a=>1);
console.log('oxy_filter',oxy_filter)
let co2_filter = arr.map(a=>1);
console.log('co2_filter',co2_filter)

    for (let i = 0; i < arr[0].length; i++) {
        // oxy -> 0 , 1  , co2  -> 0,1
        let occurences = [[0,0],[0,0]];
        for (let j = 0; j < arr.length; j++) {
            let char = arr[j].charAt(i);
            if(char === "0"){
                if(oxy_filter[j] === 1){
                    occurences[0][0]++;
                }
                if(co2_filter[j] === 1){
                    occurences[1][0]++;
                }
            }else if(char === "1"){
                if(oxy_filter[j] === 1){
                    occurences[0][1]++;
                }
                if(co2_filter[j] === 1){
                    occurences[1][1]++;
                }
            }else{
                console.warn('Not recognized:', char);
            }
        }
        let oxy_criteria = (occurences[0][0] > occurences[0][1]? "0" : "1")
        let co2_criteria = (occurences[1][1] < occurences[1][0]? "1" : "0")

        //console.log(oxy_criteria, co2_criteria, i);

        for (let j = 0; j < arr.length; j++) {
            let char = arr[j].charAt(i);
            if(oxy_filter[j] === 1 && char !== oxy_criteria){
                oxy_filter[j] = 0;
            }

            if(co2_filter[j] === 1 && char !== co2_criteria){
                co2_filter[j] = 0;
            }

            let rest_oxy = arr.filter((a,index)=>oxy_filter[index]===1);
            let rest_co2 = arr.filter((a,index)=>co2_filter[index]===1);

            if(rest_oxy.length == 1){
                oxy.push(rest_oxy[0]);
                oxy_filter = oxy_filter.map(a=>0);
                //console.log(oxy);
            }
            if(rest_co2.length == 1){
                co2.push(rest_co2[0]);
                co2_filter = co2_filter.map(a=>0);
               // console.log(co2);
            }
        }
    }
    console.log(parseInt(oxy[0],2) * parseInt(co2[0],2)) ;

//sol  '2829354'
