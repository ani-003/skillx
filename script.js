function calculateBMI() {
  // Get the weight and height input values
  var weightInput = document.getElementById("weight");
  var heightInput = document.getElementById("height");
  
  var weight = parseFloat(weightInput.value);
  var height = parseFloat(heightInput.value);
  
  // Check if the input values are valid
  if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
    // Display an error message if the inputs are invalid
    document.getElementById("result").textContent = "Please enter valid weight and height.";
    return;
  }
  
  // Calculate the BMI
  var bmi = weight / ((height/100) ** 2);
  
  // Display the result
  document.getElementById("result").textContent = "Your BMI is: " + bmi.toFixed(2);
}


window.addEventListener('DOMContentLoaded', function () {
  var tipsList = document.getElementById('healthTipsList');
  var tips = tipsList.getElementsByTagName('li');
  var currentTipIndex = 0;

  if (tips.length > 0) {
    showTip(currentTipIndex);
    setInterval(function () {
      currentTipIndex = (currentTipIndex + 1) % tips.length;
      showTip(currentTipIndex);
    }, 3000);
  }

  function showTip(index) {
    for (var i = 0; i < tips.length; i++) {
      tips[i].classList.remove('active');
    }
    tips[index].classList.add('active');
  }
});