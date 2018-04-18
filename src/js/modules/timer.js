module.exports = (wrap) => {
    let [dateStart, timeStart] = wrap.getAttribute('data-start').split(' ');
    dateStart = dateStart.split('.');
    timeStart = timeStart.split('.');
    const days = wrap.querySelector('.days .timer_numeral span');
    const hour = wrap.querySelector('.hour .timer_numeral span');
    const minutes = wrap.querySelector('.minutes .timer_numeral span');
    const seconds = wrap.querySelector('.seconds .timer_numeral span');
    let date = new Date(+dateStart[2], dateStart[1] - 1, +dateStart[0], +timeStart[0], +timeStart[1]) - new Date();
    let daysPre = '0', hourPre = '0', minutesPre = '0', secondsPre = '0', daysOut = null, hourOut = null,
        minutesOut = null, secondsOut = null;

    function toTime(ms) {
        let d, h, m, s;
        if (isNaN(ms)) {
            return {};
        }
        d = ms / (1000 * 60 * 60 * 24);
        h = (d - ~~d) * 24;
        m = (h - ~~h) * 60;
        s = (m - ~~m) * 60;
        return [setZero(~~d), setZero(~~h), setZero(~~m), setZero(~~s)];
    }

    function setZero(str) {
        return (+str <= 9) ? '0' + str : str;
    }

    function getTime() {
        return toTime(new Date(+dateStart[2], dateStart[1] - 1, +dateStart[0], +timeStart[0], +timeStart[1]) - new Date());
    }

    function setActive(arr) {

        if (arr[0] !== daysPre) {
            days.parentElement.classList.add('active');
            clearTimeout(daysOut);
            daysOut = setTimeout(() => {
                days.parentElement.classList.remove('active');
            }, 300);
            days.innerHTML = daysPre = arr[0];
        }
        if (arr[1] !== hourPre) {
            hour.parentElement.classList.add('active');
            clearTimeout(hourOut);
            hourOut = setTimeout(() => {
                hour.parentElement.classList.remove('active');
            }, 300);
            hour.innerHTML = hourPre = arr[1];
        }
        if (arr[2] !== minutesPre) {
            minutes.parentElement.classList.add('active');
            clearTimeout(minutesOut);
            minutesOut = setTimeout(() => {
                minutes.parentElement.classList.remove('active');
            }, 300);
            minutes.innerHTML = minutesPre = arr[2];
        }
        if (arr[3] !== secondsPre) {
            seconds.parentElement.classList.add('active');
            clearTimeout(secondsOut);
            secondsOut = setTimeout(() => {
                seconds.parentElement.classList.remove('active');
            }, 300);
            seconds.innerHTML = secondsPre = arr[3];
        }
    }

    if (date > 0) {
        setInterval(() => {
            setActive(getTime());
        }, 1000);
    }

};