let displayArea = document.querySelector("#displayArea");

// Starts with onload so display and price shows up at start
window.onload = function () {
  displayArea.textContent = "Enter number to display!.";

  let priceNumber;

  setTimeout(function () {
    while (true) {
      price = prompt("Enter the price:");

      priceNumber = parseFloat(price);

      if (!isNaN(priceNumber) && priceNumber > 0) {
        break;
      } else {
        alert("Please enter a valid number!!.");200
      }
    }

    
    let newPrice = priceNumber * 0.9;

    console.log("New price: $" + newPrice.toFixed(2));

    displayArea.textContent = "New price: $" + newPrice.toFixed(2);
  }, 100); // setTimeout at 100 milliseconds
};
