fs = require('fs');
console.log(process.argv);
let file = 'script/script.txt';
let mnger = require('./fileManager.js');
const [action, value] = [process.argv[2], process.argv[3]]
const possibleActions = ['add', 'remove']


const checkActions = (action) =>{
    return possibleActions.filter(item => item === action).length>0
}

const checkValue = (value) => (value) ? true : false

mnger.init(file, action, value);