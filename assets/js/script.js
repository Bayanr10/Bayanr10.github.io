document.addEventListener('DOMContentLoaded', () => {
    // photos.html
    const galleryContainer = document.querySelector('.photo-gallery');
    if (galleryContainer) {
        Papa.parse('assets/photos.csv', {
            download: true,
            header: true,
            complete: function(results) {
                results.data.forEach((photo, index) => {
                    if (!photo.filename) return;

                    const id = `img${index + 1}`;
                    
                    const photoItem = document.createElement('div');
                    photoItem.className = 'photo-item';
                    photoItem.innerHTML = `
                        <a href="#${id}">
                            <img src="assets/images/${photo.filename}" alt="${photo.filename}">
                        </a>
                        <div class="caption">${photo.caption}</div>
                    `;
                    galleryContainer.appendChild(photoItem);

                    const lightbox = document.createElement('div');
                    lightbox.className = 'lightbox';
                    lightbox.id = id;
                    lightbox.innerHTML = `
                        <a href="#" class="lightbox-close">
                            <img src="assets/images/${photo.filename}" alt="${photo.filename}">
                        </a>
                    `;
                    document.body.appendChild(lightbox);
                });
            }
        });
    }

});