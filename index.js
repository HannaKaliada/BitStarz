const App = {


    showForm() {
        document.querySelector('.claim-now').addEventListener('click', () => {
            document.querySelector('.form__background').classList.remove('hidden');
        })
    },

    hideForm() {
        document.querySelector('.cross').addEventListener('click', () => {
            document.querySelector('.form__background').classList.add('hidden');
        })
    },

    preloader(){
        window.addEventListener('load', function () {

            let preload = document.querySelector('#preloader');

            preload.className += ' fade';

            setTimeout(function () {

                preload.style.display = 'none';

            }, 600);

        })
    }
}

window.addEventListener("DOMContentLoaded", () => {
    App.preloader();
    App.showForm();
    App.hideForm();
});