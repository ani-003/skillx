function calculateBMI() {
  // This part gets the weight and height input values
  var weightInput = document.getElementById("weight");
  var heightInput = document.getElementById("height");
  
  var weight = parseFloat(weightInput.value);
  var height = parseFloat(heightInput.value);
  
  // This part checks if the input values are valid
  if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
    // Display an error message if the inputs are invalid
    document.getElementById("result").textContent = "Please enter valid weight and height.";
    return;
  }
  
  // This calculates the BMI
  var bmi = weight / ((height/100) ** 2);
  
  // This displays the result
  document.getElementById("result").textContent = "Your BMI is: " + bmi.toFixed(2);
}


