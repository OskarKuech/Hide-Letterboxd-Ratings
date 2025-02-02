//Hide Ratings and Reviews
const style = document.createElement('style');
    style.innerHTML = `
        .ratings-histogram-chart {
            display: none;
        }

        .avatar-list {
            display: none;
        }

        .film-recent-reviews {
            display: none;
        }
    `;
document.head.appendChild(style);

//Button
const button = document.createElement('button');
button.innerText = 'Show Rating';
button.style.backgroundColor = '#445566';
button.style.color = '#BBCCDD';
button.style.fontSize = '16px';
button.style.fontFamily = 'Graphik-Regular-Web, sans-serif';
button.style.width = '100%';
button.style.padding = '12px 0';
button.style.borderRadius = '4px';
button.style.border = 'none';
button.style.cursor = 'pointer';

const sidebar = document.querySelector('.sidebar');
if (sidebar) {
    sidebar.appendChild(button);
}

button.addEventListener('mouseover', () => {
    button.style.color = '#FFFFFF';
});

button.addEventListener('mouseout', () => {
    button.style.color = '#BBCCDD';
});

button.addEventListener('click', () => {
    document.head.removeChild(style);
    button.remove();
});