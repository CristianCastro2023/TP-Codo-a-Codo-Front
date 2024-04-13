export const carousel = (asset1,asset2,asset3) => {

    const carouselContainer = document.createElement('div')
    carouselContainer.classList.add('carousel')

    const previousButton = document.createElement('button')
    previousButton.setAttribute('id', 'previous')

    const nextButton = document.createElement('button')
    nextButton.setAttribute('id', 'next')

    const imageDiv = document.createElement('div')
    imageDiv.setAttribute('id', 'image')

    const controls = document.createElement('div')
    controls.classList.add('controls')

    const playButton = document.createElement('button')
    playButton.setAttribute('id', 'play')

    const stopButton = document.createElement('button')
    stopButton.setAttribute('id', 'stop')

    carouselContainer.appendChild(previousButton)
    carouselContainer.appendChild(imageDiv)
    carouselContainer.appendChild(nextButton)

    controls.appendChild(playButton)
    controls.appendChild(stopButton)
    
    const IMAGES = [
        asset1,
        asset2,
        asset3
    ];
    const INTERVAL_TIME = 1000;
    let currentPosition = 0;
    // let previousBtn = document.querySelector('#previous');
    // let nextBtn = document.querySelector('#next');
    // let image = document.querySelector('#image');
    // let playBtn = document.querySelector('#play');
    // let stopBtn = document.querySelector('#stop');
    let interval;

    // Funciones

    /**
     * Funcion que cambia la foto en la siguiente posicion
     */
    function nextPicture() {
        currentPosition
        currentPosition >= IMAGES.length - 1 ? currentPosition = 0 : currentPosition++
        renderImage();
    }

    /**
     * Funcion que cambia la foto en la anterior posicion
     */
    function previousPicture() {
        currentPosition <= 0 ? currentPosition = IMAGES.length -1 : currentPosition--
        renderImage();
    }

    /**
     * Funcion que actualiza la imagen de imagen dependiendo de posicionActual
     */
    function renderImage() {
        imageDiv.style.backgroundImage = `url(${IMAGES[currentPosition]})`;
    }

    /**
     * Activa el autoplay de la imagen
     */
    function playInterval() {
        interval = setInterval(nextPicture, INTERVAL_TIME);
        // Desactivamos los botones de control
        nextButton.setAttribute('disabled', true);
        previousButton.setAttribute('disabled', true);
        playButton.setAttribute('disabled', true);
        stopButton.removeAttribute('disabled');

    }

    /**
     * Para el autoplay de la imagen
     */
    function stopInterval() {
        clearInterval(interval);
        // Activamos los botones de control
        nextButton.removeAttribute('disabled');
        previousButton.removeAttribute('disabled');
        playButton.removeAttribute('disabled');
        stopButton.setAttribute('disabled', true);
    }

    // Eventos
    nextButton.onclick = nextPicture
    previousButton.onclick = previousPicture
    playButton.onclick = playInterval
    stopButton.onclick = stopInterval
    // Iniciar
   renderImage()
   console.log('working')
   return(carouselContainer)
}

