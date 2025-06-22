var coordinates = document.getElementById('coordinates');

/**
 * Function to get the user's location and display it.
 */

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.watchPosition(showPosition);
  } else {
    coordinates.innerHTML = "geolocation is not supported in your broswer";
  }
}

/**
 * Display the user's location.
 * @param {GeolocationPosition} position - The user's geolocation position.
 */

function showPosition(position) {
  coordinates.innerHTML = "Latitude: " + position.coords.latitude +
    "<br>Longitude: " + position.coords.longitude;
}

/**
 * Event listener for the "Get My Location" button.
 */
document.getElementById('getLocationButton').addEventListener('click', () => {
  getLocation();
});

function hidetaskbar(position) {
  if (navigator.doNotTrack.includes("Hide taskbar")) {
    console.log("Task bar hidden");
  }
}

const imageUpload = document.getElementById("imageUpload");
const imagePreview = document.querySelector(".image-preview");

imageUpload.addEventListener("change", () => {
  const file = imageUpload.files[0];

  if (file) {
    const reader = new FileReader();

    reader.onload = () => {
      imagePreview.style.backgroundImage = `url('${reader.result}')`;
      imagePreview.classList.add("active");
    };

    reader.readAsDataURL(file);
  } else {
    imagePreview.style.backgroundImage = "";
    imagePreview.classList.remove("active");
  }
});


document.getElementById('myForm').addEventListener('submit', function (event) {
  event.preventDefault(); // Prevent the form from submitting normally

  const formData = new FormData(this); // Create a new FormData object from the form

  // Send the form data to the backend
  fetch('/user/login', {
    method: 'POST', // Use the appropriate HTTP method
    body: formData // Pass the form data as the request body
  })
    .then(response => {
      // Handle the response
      localStorage.setItem('jwtToken', response.token);
      console.log(response);
    })
    .catch(error => {
      // Handle any errors
      console.error(error);
    });
});


// Assuming you have received the JWT token as a JSON object called 'response' from the server

// Store the token securely in the browser's local storage
localStorage.setItem('jwtToken', response.token);

// Retrieve the token from local storage
const jwtToken = localStorage.getItem('jwtToken');

// Include the token in subsequent requests
fetch('https://api.example.com/data', {
  method: 'GET',
  headers: {
    'Authorization': `${jwtToken}`
  }
})
  .then(response => {
    // Process the response
  })
  .catch(error => {
    // Handle the error
  });


document.getElementById('myForm').addEventListener('fetch', function (event) {
  event.preventDefault(); // Prevent the form from submitting normally

  const formData = new FormData(this); // Create a new FormData object from the form
  // fetch the form data to the backend
  fetch('/user/login', {
    method: 'GET',
    body: formData
  })
});