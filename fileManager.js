const fs = require('fs');
let values = [];
module.exports = {
	init: (file, action, value) => {
		fs.readFile(file, (err, data) => {
			values = (data.toString().split('\n'));
			if (action === 'add'){
				add(value,file);
			} else if(action === 'save') {
				save(file);
			} else{
				remove(value, file);
			}
			console.log(values);
		});
	}
};

const add = (value, file) => {
	if(!checkValueInList(value)){
		values.push(value);
		save(file);
		console.log(values);
	} else {
        console.log("Value already exists");
    }
  
};

const remove = (value, file) =>{
	if(checkValueInList(value)){
		values.splice(values.findIndex(item => item === value),1);
		save(file);
	} else {
		console.log('Value doesn\'t exist');
	}
};

const save = (file) =>{
	let tempStr = values.reduce((prev, current) => {
		return `${prev}\n${current}`;
	});
	fs.writeFile(file, tempStr, (err) => {
		if (err) console.log(err);
	});
};

const checkValueInList = (value) =>{
    return values.filter(item => item===value).length >0
}