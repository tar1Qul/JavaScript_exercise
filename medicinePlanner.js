var lastDay = 11;
var output = "";

for (var day = 1; day <= lastDay; day++) {
    if (day % 3 === 0) {
        output += day + " - medicine\n";
    } else {
        output += day + " - rest\n";
    }
}

console.log(output.trim());