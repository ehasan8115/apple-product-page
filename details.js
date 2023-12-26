// script.js

document.addEventListener("DOMContentLoaded", function () {
  // Fetch data from the JSON file
  fetch("iphone12.json")
    .then((response) => response.json())
    .then((data) => {
      // Call a function to populate the product details section
      populateProductDetails(data.product);
    })
    .catch((error) => console.error("Error fetching data:", error));
});

// Function to populate the product details section
function populateProductDetails(product) {
  const productDetailsSection = document.getElementById("product-details");

  // Create HTML elements to display product details
  const productTitle = document.createElement("h2");
  productTitle.textContent = `${product.brand} ${product.name}`;
  productDetailsSection.appendChild(productTitle);

  const releaseYear = document.createElement("p");
  releaseYear.textContent = `Release Year: ${product.releaseYear}`;
  productDetailsSection.appendChild(releaseYear);

  // Add more elements for other product details as needed
  // ...

  // Example: Displaying colors
  const colors = document.createElement("p");
  colors.textContent = `Colors: ${product.colors.join(", ")}`;
  productDetailsSection.appendChild(colors);

  // Example: Displaying storage options
  const storageOptions = document.createElement("p");
  storageOptions.textContent = `Storage Options: ${product.storageOptions.join(
    ", "
  )} GB`;
  productDetailsSection.appendChild(storageOptions);

  // Add more details based on your JSON structure

  // Example: Displaying display details
  const displayDetails = document.createElement("div");
  displayDetails.innerHTML = `
      <h3>Display:</h3>
      <p>Type: ${product.display.type}</p>
      <p>Size: ${product.display.size}</p>
      <p>Resolution: ${product.display.resolution}</p>
      <p>Features: ${product.display.features.join(", ")}</p>
    `;
  productDetailsSection.appendChild(displayDetails);

  // Add more details based on your JSON structure

  // Example: Displaying camera details
  const cameraDetails = document.createElement("div");
  cameraDetails.innerHTML = `
      <h3>Camera:</h3>
      <p>Main Camera:</p>
      <ul>
        <li>Type: ${product.camera.main.type}</li>
        <li>Lenses: ${product.camera.main.lenses.join(", ")}</li>
        <li>Features: ${product.camera.main.features.join(", ")}</li>
      </ul>
      <p>Front Camera:</p>
      <ul>
        <li>Type: ${product.camera.front.type}</li>
        <li>Lenses: ${product.camera.front.lenses.join(", ")}</li>
        <li>Features: ${product.camera.front.features.join(", ")}</li>
      </ul>
    `;
  productDetailsSection.appendChild(cameraDetails);

  // Add more details based on your JSON structure

  // Example: Displaying processor details
  const processorDetails = document.createElement("div");
  processorDetails.innerHTML = `
      <h3>Processor:</h3>
      <p>Name: ${product.processor.name}</p>
      <p>Cores: ${product.processor.cores}</p>
      <p>Architecture: ${product.processor.architecture}</p>
      <p>Speed: ${product.processor.speed}</p>
    `;
  productDetailsSection.appendChild(processorDetails);

  // Add more details based on your JSON structure

  // Example: Displaying battery details
  const batteryDetails = document.createElement("div");
  batteryDetails.innerHTML = `
      <h3>Battery:</h3>
      <p>Capacity: ${product.battery.capacity}</p>
      <p>Technology: ${product.battery.technology}</p>
      <p>Wireless Charging: ${
        product.battery.wirelessCharging ? "Yes" : "No"
      }</p>
      <p>Fast Charging: ${product.battery.fastCharging ? "Yes" : "No"}</p>
    `;
  productDetailsSection.appendChild(batteryDetails);

  // Add more details based on your JSON structure

  // Example: Displaying connectivity details
  const connectivityDetails = document.createElement("div");
  connectivityDetails.innerHTML = `
      <h3>Connectivity:</h3>
      <p>Network: ${product.connectivity.network.join(", ")}</p>
      <p>Wi-Fi: ${product.connectivity.wifi}</p>
      <p>Bluetooth: ${product.connectivity.bluetooth}</p>
      <p>NFC: ${product.connectivity.NFC ? "Yes" : "No"}</p>
      <p>Face ID: ${product.connectivity.faceID ? "Yes" : "No"}</p>
    `;
  productDetailsSection.appendChild(connectivityDetails);

  // Add more details based on your JSON structure

  // Example: Displaying other details
  const otherDetails = document.createElement("div");
  otherDetails.innerHTML = `
      <h3>Operating System:</h3>
      <p>${product.operatingSystem}</p>
      <h3>Dimensions:</h3>
      <p>Height: ${product.dimensions.height}</p>
      <p>Width: ${product.dimensions.width}</p>
      <p>Depth: ${product.dimensions.depth}</p>
      <p>Weight: ${product.dimensions.weight}</p>
      <h3>Water Resistance:</h3>
      <p>Rating: ${product.waterResistance.rating}</p>
      <p>Depth: ${product.waterResistance.depth}</p>
      <h3>Sensors:</h3>
      <ul>${product.sensors.map((sensor) => `<li>${sensor}</li>`).join("")}</ul>
      <h3>Price:</h3>
      <p>${product.price.currency} ${product.price.amount}</p>
    `;
  productDetailsSection.appendChild(otherDetails);

  // Add more details based on your JSON structure
}
