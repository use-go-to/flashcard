let deferredPrompt;

window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault(); // Empêche l'affichage automatique de la bannière
    deferredPrompt = e;

    // Affiche un bouton d'installation
    const installButton = document.createElement('button');
    installButton.textContent = 'Installer l\'application';
    installButton.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        padding: 10px 15px;
        background-color: #4CAF50;
        color: white;
        border: none;
        border-radius: 5px;
        cursor: pointer;
    `;
    document.body.appendChild(installButton);

    installButton.addEventListener('click', () => {
        installButton.style.display = 'none'; // Masque le bouton
        deferredPrompt.prompt(); // Affiche la boîte de dialogue d'installation

        deferredPrompt.userChoice.then((choiceResult) => {
            if (choiceResult.outcome === 'accepted') {
                console.log('Installation acceptée');
            } else {
                console.log('Installation refusée');
            }
            deferredPrompt = null;
        });
    });
});
