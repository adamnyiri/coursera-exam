document.getElementById('changeBioBtn').addEventListener('click', function() {
    const bioElement = document.getElementById('bio');
    bioElement.textContent = "Frissítettem az életrajzomat JavaScript használatával, ami bizonyítja, hogy hozzá tudok adni interaktivitást az oldalakhoz!";
    
    // A gomb elrejtése a kattintás után
    this.style.display = 'none';
});