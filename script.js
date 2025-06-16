
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Empêche le rechargement de la page

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name && email && message) {
        alert(`Merci ${name}, votre message a été envoyé avec succès !`);
        document.getElementById('contact-form').reset();
    }
    else {
        alert('Veuillez remplir tous les champs.');
    }
});
const response = await fetch('https://example.com/api/contact', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(formData),
});
