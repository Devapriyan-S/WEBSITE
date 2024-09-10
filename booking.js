
document.getElementById('bookingForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const carType = document.getElementById('carType').value;
    const pickupLocation = document.getElementById('pickupLocation').value;
    const pickupDate = document.getElementById('pickupDate').value;
    const dropoffDate = document.getElementById('dropoffDate').value;

    if (carType && pickupLocation && pickupDate && dropoffDate) {
        alert(`Booking Successful!\n\nCar Type: ${carType}\nPick-Up Location: ${pickupLocation}\nPick-Up Date: ${pickupDate}\nDrop-Off Date: ${dropoffDate}`);
    } else {
        alert('Please fill in all fields.');
    }
});


