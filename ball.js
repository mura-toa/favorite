const ballElements = document.querySelectorAll('.ball');
let ballSpeed = 5;
let ballDirection = 1;

function moveBall() {
    const containerWidth = document.querySelector('.container').clientWidth;

    ballElements.forEach(ballElement => {
        const ballLeft = parseInt(getComputedStyle(ballElement).left);
        const ballDiameter = ballElement.clientWidth;

        if (ballLeft > containerWidth || ballLeft < -ballDiameter) {
            ballDirection *= -1;
        }

        ballElement.style.left = (ballLeft + ballSpeed * ballDirection) + 'px';
    });

    requestAnimationFrame(moveBall);
}

ballElements.forEach(ballElement => {
    ballElement.addEventListener('click', () => {
        ballDirection *= -1;
    });
});

moveBall();