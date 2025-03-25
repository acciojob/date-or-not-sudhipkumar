var isDate = function (input) {
  //   write your code here
	
 // Check if the input is a Date object and is valid
	if (input instanceof Date && !isNaN(input.getTime())) {
    return true;
  }

	 // Check if the input is a valid date string or timestamp
  if (typeof input === "string" || typeof input === "number") {
    const parsedDate = new Date(input);
    return !isNaN(parsedDate.getTime());
  }

	// If none of the above conditions are met, return false
  return false;
};


// Do not change the code below.
const input = prompt("Enter Date.");
alert(isDate(input));
