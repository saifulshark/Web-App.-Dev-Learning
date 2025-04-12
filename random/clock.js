function updateClock() {
    // Get current time
    const now = new Date();
    
    // 24-hour format (HH:MM::SS)
    const hours24 = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    const time24 = `${hours24}:${minutes}::${seconds}`;

    // 12-hour format with AM/PM
    let hours12 = now.getHours() % 12 || 12; // Convert 0 to 12 for 12 AM
    hours12 = hours12.toString().padStart(2, '0');
    const period = now.getHours() >= 12 ? 'PM' : 'AM';
    const time12 = `${hours12}:${minutes}::${seconds} ${period}`;

    // Clear console and display both formats
     console.clear();
    console.log('24-hour format:', time24);
    console.log('12-hour format:', time12);
}

// Update immediately and then every second
updateClock();
setInterval(updateClock, 1000);