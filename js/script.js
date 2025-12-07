document.addEventListener('DOMContentLoaded', function() {
    const formular = document.getElementById('kontaktniFormular');
    if (formular) {
        formular.addEventListener('submit', function(event) {
            event.preventDefault(); 
            
            const jmeno = document.getElementById('jmeno').value;
            const email = document.getElementById('email').value;
            let valid = true;

            if (jmeno.trim() === '') {
                alert('Prosím, vyplňte své jméno.');
                valid = false;
            } else if (!isValidEmail(email)) {
                alert('Prosím, zadejte platnou emailovou adresu.');
                valid = false;
            }

            if (valid) {
                alert('Formulář byl úspěšně odeslán. Budeme Vás brzy kontaktovat.');
                formular.reset();
            }
        });
    }
});

function isValidEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}

function spocitejVykon() {
    const napeti = 230; 
    const proudInput = document.getElementById('proud');
    const vykonOutput = document.getElementById('vypoctenyVykon');
    
    if (proudInput && vykonOutput) {
        
        const proud = parseFloat(proudInput.value);
        
        if (isNaN(proud) || proud <= 0) {
            vykonOutput.textContent = 'Zadejte platnou hodnotu proudu (A).';
            return;
        }

        const vykon = napeti * proud;
        
        vykonOutput.textContent = `${vykon.toFixed(2)} W`;
    }
}