import iziToast from 'izitoast';

import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.form');

form.addEventListener('submit', ev => {
  ev.preventDefault();

  const stateValue = form.state.value;
  const delayInput = form.delay.value;

  const makePromise = delay => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (stateValue === 'fulfilled') {
          resolve(`Fulfilled promise in ${delay}ms`);
        } else reject(`Rejected promise in ${delay}ms`);
      }, delay);
    });
  };

  makePromise(delayInput)
    .then(value => {
      iziToast.success({
        title: value,
        position: 'topRight',
      });
    })
    .catch(error =>
      iziToast.error({
        title: error,
        position: 'topRight',
      })
    );

  form.reset();
});
