var data;
data = "Something";
console.log(data);
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
;
var color = Color.Blue;
console.log(color);
var employee;
employee = [1, "Steve"];
console.log(employee);
