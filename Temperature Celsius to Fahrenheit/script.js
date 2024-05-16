function convertToFar() {
    var celsius = parseFloat(document.getElementById("celsius").value);
    if (!isNaN(celsius)) {
        var fahrenheit = (celsius * 9/5) + 32;
        document.getElementById("result").innerHTML = celsius + "°C = " + fahrenheit.toFixed(2) + "°F";
    } else {
        document.getElementById("result").innerHTML = "Please enter a valid number";
    }
}
