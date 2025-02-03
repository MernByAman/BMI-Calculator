const calculate = document.getElementById("calculate");

calculate.onclick = function () {
    const weight = parseFloat(document.getElementById("weight").value);  // Get weight from input
    const ft = parseFloat(document.getElementById("ft").value);          // Get feet from input
    const inch = parseFloat(document.getElementById("inch").value);      // Get inches from input
    let result = document.getElementById("result"); // The element to display result

    // Check if all inputs are valid numbers
    if (isNaN(weight) || isNaN(ft) || isNaN(inch)) {
        result.textContent = "Please enter valid values for weight, feet, and inches.";
        return;
    }

    const totalInch = (ft * 12) + inch;  // Convert feet and inches to total inches
    const height = totalInch * 0.0254;   // Convert total inches to meters
    const bmi = weight / (height ** 2);   // Calculate BMI

    result.textContent = "BMI: " + bmi.toFixed(2);  // Display BMI with 2 decimal places
}
