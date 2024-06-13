// script.js

function toggleProject(element) {
    const content = element.querySelector('.project-content');
    if (content.style.display === 'block') {
        content.style.display = 'none';
    } else {
        content.style.display = 'block';
    }
}