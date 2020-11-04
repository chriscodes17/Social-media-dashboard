//Toggle button var
const btn = document.querySelector('input[name=theme');
//eventlistener for toggleing dark mode, add and remove.
btn.addEventListener('click', function () {
    if (this.checked) {
        document.body.classList.add('dark-theme');
    } else {
        document.body.classList.remove('dark-theme');
    }
})