import { galleryItems } from './gallery-items.js';
// Change code below this line



console.log(createPhoto(galleryItems));

 
    const imageContainer = document.querySelector('.gallery');
    const galleryMarkup = createPhoto(galleryItems);

    imageContainer.insertAdjacentHTML('beforeend', galleryMarkup);

    imageContainer.addEventListener('click', onImageContainerClick);


function createPhoto(galleryItems) {
    return galleryItems.map(({ preview, original, description }) => {
        return `<div class="gallery__item">
        <a class="gallery__link" href="${original}">
          <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
          />
        </a>
      </div>`;
    }
    ).join('');
    

} 

function onImageContainerClick (evt) {
evt.preventDefault();
  const isImageContainer = evt.target.classList.contains('gallery__image');
  
  if (!isImageContainer){
    return;
  }

  const largeImage = evt.target.dataset.source;

  const instance = basicLightbox.create(`<img src =" ${largeImage}" wigth = "800" height = "600"/>`);

  instance.show();

  window.addEventListener('keydown', onEscape);

  function onEscape (el){

    if (el.code === 'Escape'){
      instance.close();
      window.removeEventListener;
    }
  }

}
