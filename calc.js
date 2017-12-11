//alert("CONNECTED!");
$(document).ready(function(){
	testNumLength = function(number) {
		if (number.length > 9) {
			totaldiv.text(number.substr(number.length-9,9));
			if (number.length > 15) {
				number = "";
				totaldiv.text("Err");
			}
		}
	}
});
var testNumLength;
var number = "";
var newnumber = "";
var operator = "";
var totaldiv = $("#totalDisplay");
totaldiv.text("0");

$("#numbers button").not("#clear, #clearAll").click(function(){
	number += $(this).text();
	totaldiv.text(number);
	testNumLength(number);
	//console.log(number);
});

$("#operators button").click(function(){
	operator = $(this).text();
	newnumber = number;
	number = "";
	//change this to make operator highlighted until next number is clicked (toggle)
	totaldiv.text("0");
	//console.log(newnumber);
	//console.log(number);
});

$("#clear, #clearAll").click(function(){
	number = "";
	totaldiv.text("0");
	//if clear All button is clicked also clear stored number
	if ($(this).attr("id") === "clearAll") {
		newnumber = "";
	}
	console.log(number);
	console.log(newnumber);
});

$("#equals").click(function(){
	if (operator === "+"){
		number = (parseInt(newnumber,10) + parseInt(number,10)).toString(10);
	}
	else if (operator === "-"){
		number = (parseInt(newnumber,10) - parseInt(number,10)).toString(10);
	}
	else if (operator === "*"){
		number = (parseInt(newnumber,10) * parseInt(number,10)).toString(10);
	}
	else if (operator === "/"){
		number = (parseInt(newnumber,10) / parseInt(number,10)).toString(10);
	}

	totaldiv.text(number);
	//testNumLength(number);
	number = "";
	newnumber = "";
});
