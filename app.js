function getSensorData() {
  document.getElementById("output").innerText = "Sensor data: 23.5°C";
}

function toggleDevice() {
  document.getElementById("output").innerText = "Device toggled!";
}

// Register service worker
if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("service-worker.js").then(() => {
    console.log("✅ Service Worker Registered");
  });
}
