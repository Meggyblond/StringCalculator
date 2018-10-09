function add (numbers) {
    if(numbers == "") {
	return 0;
    }    

    if(numbers.includes(",") || numbers.includes("\n")) {
	var array = numbers.split(/,|\n/);
	return sum(array);
    }else {
	if(parseInt(numbers) < 0) {
	    throw new Error("Negatives not allowed: " + numbers);
	}
	return parseInt(numbers);
    }
}

function sum (array) {
    var sum = 0;
    for(var i = 0; i < array.length; i++) {
	if(parseInt(array[i]) < 0) {
	    catchNegatives(array);
	}
	sum += parseInt(array[i]);
    }
    return sum;
}

function catchNegatives(array) {
    var message = "Negatives not allowed: "
    for(var i = 0; i < array.length; i++) {
        if(array[i] < 0) {
            message += array[i] + ",";
        }
    }
    var newMsg = message.substring(0, message.length-1);
    throw new Error(newMsg);
}

module.exports = add;
