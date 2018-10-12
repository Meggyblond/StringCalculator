function add (numbers) {
    if(numbers == "") {
	return 0;
    }    
    var del = [",", "\n"];
    if(numbers.includes("//")){
	del.push(catchRegex(numbers));
	numbers = numbers.substring(4, numbers.length);
    }

    if(numbers.includes(del[0]) || numbers.includes(del[1]) || numbers.includes(del[2])) {
	var string = "";
	for(var i = 0; i < del.length; i++) {
	    string += del[i] + "|";
	}
	string = string.substring(0, string.length-1);
	var reg = new RegExp(string);
 	console.log(numbers);
        var array = numbers.split(reg);
	console.log(array);
	return sum(array);
    }else {
	if(parseInt(numbers) < 0) {
	    catchNegatives(numbers);
	}
	return parseInt(numbers) > 1000 ? 0 : parseInt(numbers);    
    }
}

function sum (array) {
    var sum = 0;
    for(var i = 0; i < array.length; i++) {
	if(parseInt(array[i]) < 0) {
	    catchNegatives(array);
	}else if(parseInt(array[i]) > 1000) {
	    
	}else {
            sum += parseInt(array[i]);	
	}
    }
    return sum;
}

function catchNegatives(array) {
    var message = "Negatives not allowed: "
    
    if(!Array.isArray(array)) {
	message += array;
    }else {
    for(var i = 0; i < array.length; i++) {
        if(array[i] < 0) {
            message += array[i] + ",";
        }
    }
    message = message.substring(0, message.length-1);
    }
    throw new Error(message);
}

function catchRegex(numbers) {
    var counter = 0;
    var del = numbers[2];
    return del;
}

module.exports = add;
