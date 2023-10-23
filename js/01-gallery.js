import { galleryItems } from './gallery-items.js';
// Change code below this line

const instance = basicLightbox.create(`<img src="" width="1280">`, {
  onShow: onShowLightbox,
  onClose: removeLightboxEscapeListener,
});

const galleryRef = document.querySelector('.gallery');

galleryRef.addEventListener('click', handleShowLightbox);

function renderGallery(ref, items) {
  const markUp = items
    .map(
      ({ preview, original, desription }) => `
		<li class="gallery__item">
			<a class="gallery__link" href="${original}">
				<img
					class="gallery__image"
					src="${preview}"
					data-source="${original}"
					alt="${desription}"
				/>
			</a>
		</li>
    `
    )
    .join('');

  ref.insertAdjacentHTML('beforeend', markUp);
}

function handleShowLightbox(event) {
  event.preventDefault();
  const { target, currentTarget } = event;
  if (target === currentTarget) {
    return;
  }
  instance.element().querySelector('img').src = target.dataset.source;
  instance.show();
}

function onShowLightbox() {
  window.addEventListener('keyup', onCloseLightbox);
}

function onCloseLightbox(event) {
  if (instance.visible() && event.key === 'Escape') {
    instance.close();
  }
}

function removeLightboxEscapeListener() {
  window.removeEventListener('keyup', onCloseLightbox);
}

renderGallery(galleryRef, galleryItems);
