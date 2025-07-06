import flatpickr from 'flatpickr';

import 'flatpickr/dist/flatpickr.min.css';

import iziToast from 'izitoast';

import 'izitoast/dist/css/iziToast.min.css';

let dayEl = document.querySelector('[data-days]');
let hourEl = document.querySelector('[data-hours]');
let minuteEl = document.querySelector('[data-minutes]');
let secondEl = document.querySelector('[data-seconds]');

let myInput = document.querySelector('#datetime-picker');
const btn = document.querySelector('[data-start]');
btn.disabled = true;

let userSelectedDate = null;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (new Date() > selectedDates[0]) {
      iziToast.error({
        title: 'Please choose a date in the future',
        position: 'topRight',
      });
      btn.disabled = true;
      btn.classList.remove('button-active');
    } else {
      userSelectedDate = selectedDates[0];
      btn.disabled = false;
      btn.classList.add('button-active');
    }
  },
};

let fp = flatpickr(myInput, options);

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  dayEl.textContent = addLeadingZero(days);
  hourEl.textContent = addLeadingZero(hours);
  minuteEl.textContent = addLeadingZero(minutes);
  secondEl.textContent = addLeadingZero(seconds);

  return { days, hours, minutes, seconds };
}

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}

btn.addEventListener('click', () => {
  myInput.disabled = true;
  myInput.style.cursor = 'not-allowed';
  btn.disabled = true;
  btn.classList.remove('button-active');

  let intervalId = setInterval(() => {
    let time = userSelectedDate - new Date();
    if (time <= 0) {
      myInput.disabled = false;
      myInput.style.cursor = 'pointer';
      btn.disabled = false;
      btn.classList.add('button-active');
      iziToast.success({
        title: 'Your timer has run out.',
        position: 'topCenter',
      });
      clearInterval(intervalId);
      return;
    }
    convertMs(time);
  }, 1000);
});
