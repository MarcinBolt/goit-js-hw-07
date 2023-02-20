import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector('.gallery');
const tableOfPreviewImg = [];

for (let i = 0; i < galleryItems.length; i++) {
  const currentDivImg = document.createElement('div');
  currentDivImg.classList.add('gallery__item');

  const currentLinkImg = document.createElement('a');
  currentLinkImg.classList.add('gallery__link');
  currentLinkImg.setAttribute('href', galleryItems[i].original);

  const currentImg = document.createElement('img');
  currentImg.classList.add('gallery__image');
  currentImg.setAttribute('src', galleryItems[i].preview);
  currentImg.setAttribute('data-source', galleryItems[i].original);
  currentImg.setAttribute('alt', galleryItems[i].description);

  currentLinkImg.append(currentImg);
  currentDivImg.append(currentLinkImg);
  tableOfPreviewImg.push(currentDivImg);
}

gallery.append(...tableOfPreviewImg);
gallery.addEventListener('click', selectImg);

function selectImg(event) {
  event.preventDefault();
  if (event.target.classList.contains('gallery__image')) {
    const selectedImgSource = event.target.dataset.source;
    const instance = basicLightbox.create(
      `<img src="${selectedImgSource}" width="1400" height="900">`
    );
    instance.show();

    const keyListenerEvent = event => {
      if (event.key === 'Escape') {
        instance.close();
        document.body.removeEventListener('keydown', keyListenerEvent);
      }
    }
    document.body.addEventListener('keydown', keyListenerEvent);
  };
}
