function add (numbers) {
    if(numbers == "") {
	return 0;
    }    

    var array = numbers.split(",");
    var sum = 0;
    for(var i = 0; i < array.length; i++) {
	sum += parseInt(array[i]);
     }
     return sum;
}

module.exports = add;
