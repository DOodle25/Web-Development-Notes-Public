function validateForm(event) {
    event.preventDefault(); // Prevent the form from submitting
  
    // Get the input value
    var nameInput = document.getElementById("name").value;
  
    // Check if the name is empty
    if (nameInput.trim() === '') {
      showError("Name cannot be empty");
      return;
    }
  
    // Check if the name contains numbers
    if (/\d/.test(nameInput)) {
      showError("Name cannot contain numbers");
      return;
    }
  
    // If everything is valid, you can proceed with form submission or any other action
    // For now, we'll just log the name
    console.log("Name:", nameInput);
  }
  
  function showError(message) {
    var errorMessage = document.getElementById("error-message");
    errorMessage.textContent = message;
  }
  