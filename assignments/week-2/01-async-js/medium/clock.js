function updateClock() {
  const now = new Date();

  // Get hours, minutes, and seconds
  let hours = now.getHours();
  const minutes = String(now.getMinutes()).padStart(2, "0");
  const seconds = String(now.getSeconds()).padStart(2, "0");

  // Format 24-hour time (HH:MM:SS)
  const time24 = `${String(hours).padStart(2, "0")}:${minutes}:${seconds}`;

  // Format 12-hour time with AM/PM (HH:MM:SS AM/PM)
  const ampm = hours >= 12 ? "PM" : "AM";
  hours = hours % 12 || 12; // Convert to 12-hour format
  const time12 = `${String(hours).padStart(
    2,
    "0"
  )}:${minutes}:${seconds} ${ampm}`;

  // Display the time in the console
  console.log(`24-Hour Format: ${time24}`);
  console.log(`12-Hour Format: ${time12}`);
}

// Update the clock every second using setInterval
setInterval(updateClock, 1000);

// ****************************************************
// ****************************************************
// ****************************************************
// ********************************timer*******************
let secondsElapsed = 0; // Initialize the elapsed time in seconds

function updateTimer() {
  // Calculate hours, minutes, and seconds from the elapsed time
  const hours = Math.floor(secondsElapsed / 3600);
  const minutes = Math.floor((secondsElapsed % 3600) / 60);
  const seconds = secondsElapsed % 60;

  // Format the time
  const formattedHours = String(hours).padStart(2, "0");
  const formattedMinutes = String(minutes).padStart(2, "0");
  const formattedSeconds = String(seconds).padStart(2, "0");

  // 24-hour format (HH:MM:SS)
  const time24 = `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;

  // 12-hour format with AM/PM (HH:MM:SS AM/PM)
  const ampm = hours >= 12 ? "PM" : "AM";
  const displayHours = hours % 12 || 12; // Convert to 12-hour format
  //   const time12 = `${String(displayHours).padStart(
  //     2,
  //     "0"
  //   )}:${formattedMinutes}:${formattedSeconds} ${ampm}`;

  // Display the timer in the console
  console.log(`24-Hour Format: ${time24}`);
  //   console.log(`12-Hour Format: ${time12}`);
  secondsElapsed++;
}

setInterval(updateTimer, 1000);
