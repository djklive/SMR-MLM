// function showForm(type) {
//     // Masquer tous les formulaires
//     document.getElementById('clientForm').classList.add('hidden');
//     document.getElementById('vendeurForm').classList.add('hidden');
    
//     // Afficher le formulaire correspondant
//     if (type === 'client') {
//         document.getElementById('clientForm').classList.remove('hidden');
//     } else if (type === 'vendeur') {
//         document.getElementById('vendeurForm').classList.remove('hidden');
//     }
// }

const client = document.getElementById('client');
const vendeur = document.getElementById('vendeur');
const clientForm = document.getElementById('clientForm');
const vendeurForm = document.getElementById('vendeurForm');

vendeur.addEventListener('click', () => {
    clientForm.classList.add('active')
    vendeurForm.classList.add('active')
    clientForm.classList.add('appear')
    vendeurForm.classList.remove('appear')
});

client.addEventListener('click', () => {
    clientForm.classList.remove('active')
    vendeurForm.classList.remove('active')
    vendeurForm.classList.remove('appear')
    clientForm.classList.add('appear')
});