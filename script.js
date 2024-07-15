
    // Set the date of the event (July 22, 2024)
    const eventDate = new Date('July 29, 2024 00:00:00').getTime();

    // Update the countdown every second
    const countdown = setInterval(function() {
        // Get current date and time
        const now = new Date().getTime();

        // Calculate the remaining time
        const distance = eventDate - now;

        // Calculations for days, hours, minutes, and seconds
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Display the countdown
        document.getElementById('countdown-days').innerHTML = `${days}d`;
        document.getElementById('countdown-hours').innerHTML = `${hours}h`;
        document.getElementById('countdown-minutes').innerHTML = `${minutes}m`;
        document.getElementById('countdown-seconds').innerHTML = `${seconds}s`;

        // If the countdown is over, show a message
        if (distance < 0) {
            clearInterval(countdown);
            document.getElementById('countdown').innerHTML = 'Event has started!';
        }
    }, 1000); // Update every second
