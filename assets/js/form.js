// Defining a function to display error message
function printError(elemId, hintMsg) {
  document.getElementById(elemId).innerHTML = hintMsg;
}

// Defining a function to validate form
function validateForm() {
  // Retrieving the values of form elements
  var name = document.contactForm.name.value;
  var corporate = document.contactForm.corporate.value;
  var email = document.contactForm.email.value;
  var mobile = document.contactForm.mobile.value;
  var privacy = document.contactForm.privacy;


// Defining error variables with a default value
  var nameErr = corporateErr = emailErr = mobileErr = privacyErr = true;

  // Validate nome
  if(name == "") {
      printError("nameErr", "Inserisci il tuo nome");
  } else {
      var regex = /^[a-zA-Z\s]+$/;
      if(regex.test(name) === false) {
          printError("nameErr", "Inserisci un nome valido");
      } else {
          printError("nameErr", "");
          nameErr = false;
      }
  }

  // Validate ragione sociale
  if(corporate == "") {
      printError("corporateErr", "Inserisci la ragione sociale");
  } else {
      var regex = /^[a-zA-Z\s]+$/;
      if(regex.test(corporate) === false) {
          printError("corporateErr", "Inserisci la ragione sociale");
      } else {
          printError("corporateErr", "");
          corporateErr = false;
      }
  }

  // Validate email address
  if(email == "") {
      printError("emailErr", "Inserisci il tuo indirizzo email");
  } else {
      // Regular expression for basic email validation
      var regex = /^\S+@\S+\.\S+$/;
      if(regex.test(email) === false) {
          printError("emailErr", "Inserisci una mail valida");
      } else {
          printError("emailErr", "");
          emailErr = false;
      }
  }

  // Validate mobile number
  if(mobile == "") {
      printError("mobileErr", "Inserisci il numero di telefono");
  } else {
      var regex = /^[1-9]\d{9}$/;
      if(regex.test(mobile) === false) {
          printError("mobileErr", "Inserisci un numero di telefono valido");
      } else {
          printError("mobileErr", "");
          mobileErr = false;
      }
  }

  // Validate privacy
  if(!privacy.checked) {
      printError("privacyErr", "Devi accettare i termini e le condizioni");
  } else {
      printError("privacyErr", "");
      privacyErr = false;
  }

  // Prevent the form from being submitted if there are any errors
  if((nameErr || corporateErr || emailErr || mobileErr || privacyErr) == true) {
     return false;
  } else {
      // Creating a string from input data for preview
      var dataPreview = "Form: \n" +
                        "Nome: " + name + "\n" +
                        "Ragione Sociale: " + corporate + "\n" +
                        "Email Address: " + email + "\n" +
                        "Mobile Number: " + mobile + "\n" +
                        "Privacy: " + privacy + "\n";
      // Display input data in a dialog box before submitting the form
      alert(dataPreview);
  }
};


