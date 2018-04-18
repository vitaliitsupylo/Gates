module.exports = (arr) => {

    arr.forEach((elem) => {
        const input = elem.querySelector('input');
        const placeholder = elem.querySelector('.placeholder');
        const widthPlaceholder = placeholder.clientWidth + 17;

        input.addEventListener('focus', function () {
            elem.classList.add('focus');
            placeholder.style.left = `calc(100% - ${widthPlaceholder}px)`;
            this.style.paddingRight = `${widthPlaceholder}px`;
        });
        input.addEventListener('blur', function () {
            if (this.value.length === 0) {
                elem.classList.remove('focus');
                placeholder.removeAttribute('style');
                this.removeAttribute('style');
            }
        });

        placeholder.addEventListener('click', function () {
            elem.parentElement.classList.add('focus');
            placeholder.style.left = `calc(100% - ${widthPlaceholder}px)`;
            input.style.paddingRight = `${widthPlaceholder}px`;
            input.focus();
        });

    });
};