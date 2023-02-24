import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryDiv = document.querySelector('div.gallery');
const myGallery = galleryItems
  .map(
    image => `<a class="gallery__item" href="${image.original}">
  <img
    class="gallery__image"
    src="${image.preview}"
    alt="${image.description}"
  />
</a>`
  )
  .join('');

galleryDiv.insertAdjacentHTML('afterbegin', myGallery);

let lightbox = new SimpleLightbox('.gallery a', {
  /* options */
  captionsData: 'alt',
  captionDelay: 250,
});
