import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
const loader = document.querySelector('.box-loader');
const box = new SimpleLightbox('.gallery-item a', {
  captionsData: 'alt',
  captionDelay: 250,
});

const galleryContainer = document.querySelector('.gallery');

export function createGallery(images) {
  const imagesList = images
    .map(
      ({
        webformatURL,
        largeImageURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      }) =>
        `<li class="gallery-item">
	<a class="gallery-link" href="${largeImageURL}">
		<img 
		  class="gallery-image" 
		  src="${webformatURL}" 
		  alt="${tags}" 
		/>
	</a>
  
  <ul class="list-description">
  <li class='item-description'><strong>Likes</strong> <p>${likes}</p></li>
  <li class='item-description'><strong>Views</strong> <p>${views}</p></li>
  <li class='item-description'><strong>Comments</strong> <p>${comments}</p></li>
  <li class='item-description'><strong>Downloads</strong> <p>${downloads}</p></li>
  </ul>
</li>
`
    )
    .join('');
  galleryContainer.insertAdjacentHTML('beforeend', imagesList);
  box.refresh();
}

export function clearGallery() {
  galleryContainer.innerHTML = '';
}

export function showLoader() {
  loader.classList.remove('is-hidden');
}

export function hideLoader() {
  loader.classList.add('is-hidden');
}
