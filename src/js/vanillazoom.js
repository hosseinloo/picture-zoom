(function(window) {
    let defineLibrary = () => ({
        init: function(galleryId) {
            let container = document.querySelector(galleryId);
            if (! container) {
                console.error("Please add correct the container element in init method...");
                return;
            }
            let firstImage = container.querySelector('.small-preview');
            if (! firstImage) {
                console.log('please add html img tag with class of small-preview(.small-preview).');
                return;
            }
            let placeZoomImg = document.querySelector('.zoom');
            if (! placeZoomImg) {
                console.error('please add html tag with class of zoom(.zoom).');
                return;
            }

            placeZoomImg.style.backgroundImage = `url(${firstImage.src})`;

            // let images = container.querySelectorAll('.small-preview');
            container.addEventListener('click' , function(e) {
                let el = e.target;
                if (el.classList.contains('small-preview')) {
                    placeZoomImg.style.backgroundImage = `url(${el.src})`;
                }
            })

            placeZoomImg.addEventListener('mouseenter', function(e) {
                this.style.backgroundSize = '450%';
            })

            placeZoomImg.addEventListener('mousemove', function(e) {
                let dim = this.getBoundingClientRect();

                let x = e.clientX - dim.left;
                let y = e.clientY - dim.top;

                x = Math.round(100 / (dim.width / x));
                y = Math.round(100 / (dim.height / y));

                this.style.backgroundPosition = `${x}% ${y}%`;
            })

            placeZoomImg.addEventListener('mouseleave', function(e) {
                this.style.backgroundSize = 'cover';
                this.style.backgroundPosition = 'center';
            })

        }
    })

    if (typeof(vanillaZoom) == 'undefined') {
        window.vanillaZoom = defineLibrary()
    } else {
        console.log('library already defined.')
    }
})(window);