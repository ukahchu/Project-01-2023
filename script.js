let heading = document.querySelector('h1');

function animateHeading() {
    heading.style.color = 'red';
    setTimeout(function() {
        heading.style.color = 'blue';
    }, 1000);
}

heading.addEventListener('mouseover', animateHeading);