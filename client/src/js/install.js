const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
// Revision History (J03B): Added an event handler to the `beforeinstallprompt` event (changed to 'e')
window.addEventListener('beforeinstallprompt', (e) => {
    window.deferredPrompt = e;
    butInstall.classList.toggle('hidden', false);
});

// Revision History (J03B): Implemented a click event handler on the `butInstall` element
butInstall.addEventListener('click', async () => {
    const pptE = window.deferredPrompt;
    if (!pptE) {
        return;
    }

    pptE.prompt();
    window.deferredPrompt = null;
    butInstall.classList.toggle('hidden', true);
});

// Revision History (J03B): Add an handler for the `appinstalled` event (changed to 'e')
window.addEventListener('appinstalled', (e) => {
    window.deferredPrompt = null;
});
