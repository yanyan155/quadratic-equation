module.exports = function solveEquation(equation) {
  // your implementation
  	var aIndex = equation.indexOf('x^2');
  	var a = +equation.slice(0, aIndex-2);
  	equation = equation.slice(aIndex+4);
  	var bIndex = equation.indexOf('x');
  	var b = equation.slice(0, bIndex-2);
  	b = +(b.slice(0,1)+b.slice(2));
  	equation = equation.slice(bIndex+2);
  	var c = +(equation.slice(0,1)+equation.slice(2));
  	var D = Math.pow(b,2)-4*a*c;
	if(D > 0) {
		var x1 = (-b - Math.pow(D,0.5))/2/a;
		var x2 = (-b + Math.pow(D,0.5))/2/a;
		var res =  [Math.round(x1), Math.round(x2)];
		return res.sort((a, b) => a-b);
	}
	return null;
}
