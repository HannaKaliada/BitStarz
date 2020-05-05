const App = {


    showForm() {
        document.querySelector('.open-form-button').addEventListener('click', () => {
            document.querySelector('.form__background').classList.remove('hidden');
        })
    },

    hideForm() {
        document.querySelector('.cross').addEventListener('click', () => {
            document.querySelector('.form__background').classList.add('hidden');
        })
    },
}

window.addEventListener("DOMContentLoaded", () => {
    App.showForm();
    App.hideForm();
});