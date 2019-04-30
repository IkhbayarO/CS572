//1. Filter by map in es6
String.prototype.filterWords = function (input) {
    let str = this;
    input.forEach(s=>str=str.replace(s, "***"));
    return str;

}

console.log("This house is nice!".filterWords(["house", "nice"]));
