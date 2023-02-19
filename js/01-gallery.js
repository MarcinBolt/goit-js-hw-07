import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector('.gallery');
const tableOfPreviewImg = [];

for (let i = 0; i < galleryItems.length; i++) {
  const currentDivImg = document.createElement('div');
  const currentLinkImg = document.createElement('a');
  const currentImg = document.createElement('img');

  currentDivImg.classList.add('gallery__item');
  currentLinkImg.classList.add('gallery__link');
  currentImg.classList.add('gallery__image');
  currentLinkImg.setAttribute('href', galleryItems[i].original);
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
  const selectedImg = event.target.dataset.source;
  basicLightbox.create(`<img width="1400" height="900" src="${selectedImg}">`).show();

  const keyListenerEvent = event => {
    console.log('Keydown: ', event);

    const basicLightboxDiv = document.querySelector('div.basicLightbox');
    if (event.key === 'Escape') {
      console.log('Escape worked');
      // instance.close();
      basicLightboxDiv.remove();
      document.body.removeEventListener('keydown', keyListenerEvent);
    }
  };
  document.body.addEventListener('keydown', keyListenerEvent);
}

console.log(galleryItems);
