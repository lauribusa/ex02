var fs = require('fs');
console.log(process.argv);
fs.readFile(`${process.cwd()}/script/script.py`,"utf8", (err,data) => { 
    if (err) throw (err);
    console.log(data);
});