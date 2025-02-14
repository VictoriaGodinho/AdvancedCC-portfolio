window.addEventListener('load', () => {
    const colors = ['#E4507E', '#6142F4', '#FFB900', '#DE6C00', '#FF85CF', '#DE6C00'];
    const container = document.querySelector('.gradient-container');

    colors.forEach((color, index) => {
        const circle = document.createElement('div');
        circle.classList.add('circle');
        circle.style.backgroundColor = color;

        // Define different starting positions for each circle
        const positions = [
            { top: '60%', left: '30%' },   // Circle 1 - hot pink
            { top: '70%', left: '1%' },  // Circle 2 - purple
            { top: '5%', left: '50%' },  // Circle 3 - yellow
            { top: '50%', left: '75%' },  // Circle 4 - orange
            { top: '0%', left: '80%' },   // Circle 5 - pastel pink
            { top: '10%', left: '30%' }  // Circle 4 - new orange
        ];

        let size = Math.random() * 300 + 300; // Bigger circles (300px - 600px)
        circle.style.width = `${size}px`;
        circle.style.height = `${size}px`;
        circle.style.top = positions[index].top;
        circle.style.left = positions[index].left;

        // Create random values for the movement
        const randomX = (Math.random() - 0.5) * 200;  // Random horizontal translation between -100px and 100px
        const randomY = (Math.random() - 0.5) * 200;  // Random vertical translation between -100px and 100px

        // Apply animation with random movement
        const animationDuration = Math.random() * 10 + 15;  // Random duration between 15s and 25s
        circle.style.animation = `moveCircles ${animationDuration}s infinite ease-in-out`;

        // Append the circle to the container
        container.appendChild(circle);

        // Add the random movement to the inline styles
        circle.style.transform = `translate(${randomX}px, ${randomY}px)`;
    });
});
