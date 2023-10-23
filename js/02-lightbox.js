import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryRef = document.body.querySelector('.gallery');

function renderGallery(ref, items) {
  const markUp = items
    .map(
      ({ preview, original, description }) => `
    <li class="gallery__item">
			<a class="gallery__link" href="${original}">
				<img class="gallery__image" src="${preview}" alt="${description}" />
			</a>
    </li>
    `
    )
    .join('');

  ref.insertAdjacentHTML('beforeend', markUp);
}

renderGallery(galleryRef, galleryItems);

new SimpleLightbox(`.gallery a`, {
  captionsData: 'alt',
  captionDelay: 250,
});
