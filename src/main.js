import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.form');

import { getImagesByQuery } from './js/pixabay-api';
import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
} from './js/render-functions';

form.addEventListener('submit', ev => {
  ev.preventDefault();
  const textValue = ev.target.elements['search-text'].value.trim();
  if (textValue === '') {
    iziToast.error({
      title: 'Please write word!',
      position: 'topRight',
    });
    return form.reset();
  }
  clearGallery();
  showLoader();
  setTimeout(() => {
    getImagesByQuery(textValue)
      .then(value => {
        if (value.length === 0) {
          iziToast.error({
            title: `Sorry, there are no images matching your search ${textValue}. Please try again!`,
            position: 'topRight',
          });
        }
        createGallery(value);
      })
      .catch(error =>
        iziToast.error({
          title: error.message,
        })
      )
      .finally(() => {
        hideLoader();
      });
  }, 1000);
  form.reset();
});
