// Function to calculate the total cost
function calculateCost() {
    // Get the values entered by the user
    const pricePerLiter = parseFloat(document.getElementById("price").value);
    const litersPurchased = parseFloat(document.getElementById("liters").value);
  
    // Validate the input to ensure it's valid
    if (isNaN(pricePerLiter) || isNaN(litersPurchased) || pricePerLiter <= 0 || litersPurchased <= 0) {
      // Display an alert if the input is invalid
      alert("Please enter valid positive values for price and liters.");
      return;
    }
  
    // Calculate the total cost
    const totalCost = pricePerLiter * litersPurchased;
  
    // Update the output to show the total cost
    document.getElementById("output").textContent = `Total Cost: €${totalCost.toFixed(2)}`;
  }
  
  // Ensure the DOM is fully loaded before attaching the event listener
  document.addEventListener("DOMContentLoaded", () => {
    // Attach the calculateCost function to the button's click event
    const calculateButton = document.querySelector("button");
    if (calculateButton) {
      calculateButton.addEventListener("click", calculateCost);
    }
  });
