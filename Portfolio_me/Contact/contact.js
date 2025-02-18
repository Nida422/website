
document.getElementById("registrationForm").reset();
document.getElementById('registrationForm').addEventListener('submit', function (e) {
  let isValid = true;

  // Username validation
  const username = document.getElementById('username');
  const usernameError = document.getElementById('usernameError');
  if (username.value.length < 3 || username.value.length > 15) {
    usernameError.textContents = "Username must be between 3 and 15 characters.";
    isValid = false;
  } else {
    usernameError.textContent = "";
  }

  // Email validation
  const email = document.getElementById('email');
  const emailError = document.getElementById('emailError');
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!emailPattern.test(email.value)) {
    emailError.textContent = "Enter a valid email address.";
    isValid = false;
  } else {
    emailError.textContent = "";
  }

  // Password validation
  const password = document.getElementById('password');
  const passwordError = document.getElementById('passwordError');
  if (password.value.length < 6) {
    passwordError.textContent = "Password must be at least 6 characters long.";
    isValid = false;
  } else {
    passwordError.textContent = "";
  }

  if (!isValid) {
    e.preventDefault();
  }
});

document.addEventListener("DOMContentLoaded", function() {
  emailjs.init("jvnU-zJ-w1U-Y_V9l");  // 🔹 Replace with your EmailJS Public Key
});

document.getElementById("registrationForm").addEventListener("submit", function(event) {
  event.preventDefault();
  var params = {
      from_name: document.getElementById("username").value,
      email: document.getElementById("email").value,
      number: document.getElementById("number").value,
      message: document.getElementById("message").value
  };

  // Ensure you replace with your actual Service ID and Template ID
  const serviceID = "service_omw8v9v";
  const templateID = "template_zuwcnwd";

  emailjs.send(serviceID, templateID, params)
  .then(response => {
      console.log("SUCCESS!", response.status, response.text);
      alert("Message sent successfully!");
      document.getElementById("registrationForm").reset(); // Clear form after sending

  })
  .catch(error => {
      console.error("FAILED...", error);
      alert("Failed to send the message. Please try again.");
  });
})
  



// document.getElementById("registrationForm").addEventListener("submit", async function (e) {
//   e.preventDefault();
//   const formData = {
//     name: document.getElementById("username").value,
//     email: document.getElementById("email").value,
//     message: document.getElementById("message").value,
//   };

//   try {
//     const response = await fetch("http://localhost:3000/send-sms", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify(formData),
//     });
//     const result = await response.json();
//     alert(result.message);
//   } catch (error) {
//     alert("Failed to send message. Please try again.");
//   }
// });
 
