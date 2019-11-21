var name = prompt ("What is your name?");
var age = prompt ("How old are you?");
var days = 365;

function setup() {
	createCanvas(2000, windowHeight);
	background(38, 5, 130);

}

function draw() {
	if (age>=0 && age<=1000){
		age = age * 365;
		fill(255, 178, 210);
		textSize(32);
		text('Wow,', 200, windowHeight*1/2);
		text(name, 300, windowHeight*1/2);
		text('did you know that you are', 500, windowHeight*1/2);
		text(age, 880, windowHeight*1/2);
		text('days old?!', 1000, windowHeight*1/2);
	}
}