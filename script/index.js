const buttons = document.querySelectorAll('.flex button');
const contents = document.querySelectorAll('.content');

buttons.forEach((button, index) => {
    button.addEventListener('click', () => {
        // Remove the 'active' class from all buttons and contents
        buttons.forEach(b => b.classList.remove('active'));
        contents.forEach(c => c.classList.remove('active'));

        // Add the 'active' class to the clicked button and content
        button.classList.add('active');
        contents[index].classList.add('active');
    });
});