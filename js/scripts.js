console.log('Ok');

const portfolio = document.querySelector('#portfolio');

const smallDevice = window.matchMedia("(max-width: 700px)");

// Sets Default
portfolio.classList = 'portfolio';

smallDevice.addListener(handleDeviceChange);

function handleDeviceChange(e) {
    if (e.matches) portfolio.addEventListener('click', () => {
        portfolio.classList.toggle('portfolioOverlay');
    });
    else portfolio.classList = 'portfolio';
}

// Run it initially
handleDeviceChange(smallDevice);

