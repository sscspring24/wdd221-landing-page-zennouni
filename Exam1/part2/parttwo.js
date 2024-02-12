// Function to convert Fahrenheit to Celsius
function convertToFahrenheit() {
    // Get the input Fahrenheit value
    var fahrenheit = parseFloat(document.getElementById('fahrenheit').value);
    // Log the input Fahrenheit value to the console
    console.log('Input Fahrenheit:', fahrenheit); 
    // Convert Fahrenheit to Celsius
    var celsius = (fahrenheit - 32) * 5 / 9;
    // Log the converted Celsius value to the console
    console.log('Converted Celsius:', celsius); 
    // Display the converted Celsius value
    document.getElementById('celsius').textContent = celsius.toFixed(2) + ' °C';
}
