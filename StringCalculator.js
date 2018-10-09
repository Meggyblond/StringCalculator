function add (numbers) {
    if(numbers == "") {
	return 0;
    }    

    if(numbers.includes(",") || numbers.includes("\n")) {
	var array = numbers.split(/,|\n/);
	return sum(array);
    }else {
	return parseInt(numbers);
    }
}

function sum (array) {
    var sum = 0;
    for(var i = 0; i < array.length; i++) {
	sum += parseInt(array[i]);
    }
    return sum;
}
module.exports = add;
