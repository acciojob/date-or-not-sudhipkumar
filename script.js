var isDate = function (input) {
  //   write your code here
	
 // Check if the input is a Date object and is valid
	if (input instanceof Date && !isNaN(input.getTime())) {
    return true;
  }
};

// Do not change the code below.
// const input = prompt("Enter Date.");
// alert(isDate(input));
