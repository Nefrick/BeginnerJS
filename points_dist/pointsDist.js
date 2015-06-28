var points = [
{"x": 1, "y": 3},
{"x": 5, "y": 4}
];

points.dist = function() {
 var p1 = this[0];
 var p2 = this[1];
 var a = p2.x - p1.x;
 var b = p2.y - p1.y;
 return Math.sqrt(a * a + b * b);
}
alert(points.dist());