module.exports = (arrElem) => {
    for (let i = 0; i < arrElem.length; i++) {
        let category = arrElem[i].querySelector('.services_elem_category');
        let categoryArr = category.querySelectorAll('.services_elem_category .sec_elem');
        let boll = true;

        arrElem[i].addEventListener('click', function (even) {
            even.preventDefault();
            category.style.left = `${this.getBoundingClientRect().left - this.getBoundingClientRect().width}px`;
            arrElem[i].classList.add('active');
            if (even.target.classList.contains('services_elem')) {
                boll = true;
            }
        });

        arrElem[i].addEventListener('mouseleave', function (even) {
            even.preventDefault();
            if (boll === true) {
                arrElem[i].classList.remove('active');
            }
        });

        for (let e = 0; e < categoryArr.length; e++) {
            let closeMore = categoryArr[e].querySelector('.close_more');

            categoryArr[e].addEventListener('click', function (even) {
                even.preventDefault();
                categoryArr[e].classList.add('active');
                boll = false;
            });

            if (closeMore !== null) {
                closeMore.addEventListener('click', function (even) {
                    even.preventDefault();
                    setTimeout(() => {
                        categoryArr[e].classList.remove('active');
                        arrElem[i].classList.remove('active');
                        boll = true;
                    }, 50)
                })
            }


        }


    }

};