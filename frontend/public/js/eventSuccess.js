document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('backToHome').addEventListener('click', () => {
        window.location.href = '/?e=s';
    });

    let tickMark = document.getElementById('tickMark');
    let mainBoxHeading = document.getElementById('mainBoxHeading');
    let mainBox = document.getElementById('mainBox');
    let mainBoxText = document.getElementById('mainBoxText');
    let backToHome = document.getElementById('backToHome');

    setTimeout(() => {
        tickMark.classList.add('tickMarkAnimation');
    }, 2000);

    setTimeout(() => {
        tickMark.style.display = 'none';
        mainBox.style.display = 'flex';
        mainBoxHeading.style.display = 'flex';
        mainBoxText.style.display = 'flex';
        mainBoxHeading.classList.add('popup');
        mainBoxText.classList.add('popup');
        mainBoxHeading.style.opacity = '1';
        mainBoxText.style.opacity = '1';
    }, 2500);

    setTimeout(() => {
        mainBoxHeading.classList.add('popup');
        mainBoxText.classList.add('popup');
        mainBoxHeading.style.opacity = '1';
        mainBoxText.style.opacity = '1';
    }, 3500);

    setTimeout(() => {
        backToHome.classList.add('popup');
        backToHome.style.opacity = '1';
    }, 4500);

    setTimeout(() => {
        tickMark.style.display = 'none';
        mainBox.style.display = 'flex';
        mainBoxText.classList.add('popup');
        mainBoxHeading.style.opacity = '1';
        mainBoxText.style.opacity = '1';
    }, 5500);

    document.addEventListener('DOMContentLoaded', () => {
        // Your existing code

        // Function to display a notification
        function showNotification(message) {
            const notification = document.getElementById('notification');
            const notificationText = document.getElementById('notificationText');

            notificationText.textContent = message;
            notification.style.display = 'block';

            // Automatically hide the notification after 5 seconds (5000 milliseconds)
            setTimeout(() => {
                notification.style.display = 'none';
            }, 5000);
        }

        // Example usage of the notification function
        setTimeout(() => {
            showNotification("Welcome to our website!");
        }, 6000); // Display the notification after 6 seconds
    });
})