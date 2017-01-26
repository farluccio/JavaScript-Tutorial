var lang = "JavaScript";

function myfunction(lang) {
	this.lang = lang;
	alert("Hello, welcome to "+this.lang;
};

var lang = "JavaScript";

function myfunction(lang) {
	this.lang = lang;
	console.log("Hello, welcome to "+this.lang);
};

var Whatever = new myfunction(lang);