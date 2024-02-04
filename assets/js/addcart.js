let panier = [];

// Récupération du contenu du localStorage
const localStoragePanier = localStorage.getItem('panier');
if (localStoragePanier) {
    panier = JSON.parse(localStoragePanier);
}

document.getElementById('BVoiture1').addEventListener('click', addcartVoiture1);

document.getElementById('BVoiture2').addEventListener('click', addcartVoiture2);

document.getElementById('BVoiture3').addEventListener('click', addcartVoiture3);

function afficherNotification(message) {
    // Créez l'élément de notification
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;

    // Ajoutez l'élément au conteneur de notifications
    const container = document.getElementById('notification-container');
    container.appendChild(notification);

    // Supprimez la notification après un certain délai (par exemple, 3 secondes)
    setTimeout(function () {
        container.removeChild(notification);
    }, 3000); // 3000 millisecondes (3 secondes)
}

function addcartVoiture1() {
    let nomproduit = document.getElementById('Voiture1').textContent;
    const prix = document.getElementById("PrixVoiture1").querySelector("strong").textContent;

    // Ajout ou modification du produit
    let indexProduit = panier.findIndex((produit) => produit.nom === nomproduit);
    if (indexProduit !== -1) {
        panier[indexProduit].quantite++;
    }
    else {
        panier.push({nom: nomproduit, prix: prix, quantite: 1});
    }

    // Enregistrement du panier dans le localStorage
    localStorage.setItem('panier', JSON.stringify(panier));
    afficherNotification('Le produit a été ajouté au panier');
    console.log(panier);

    return 'Le produit a été ajouté au panier';
}

function addcartVoiture2() {
    let nomproduit = document.getElementById('Voiture2').textContent;
    const prix = document.getElementById("PrixVoiture2").querySelector("strong").textContent;

    // Ajout ou modification du produit
    let indexProduit = panier.findIndex((produit) => produit.nom === nomproduit);
    if (indexProduit !== -1) {
        panier[indexProduit].quantite++;
    }
    else {
        panier.push({nom: nomproduit, prix: prix, quantite: 1});
    }

    // Enregistrement du panier dans le localStorage
    localStorage.setItem('panier', JSON.stringify(panier));
    afficherNotification('Le produit a été ajouté au panier');
    console.log(panier);

    return 'Le produit a été ajouté au panier';
}

function addcartVoiture3() {
    let nomproduit = document.getElementById('Voiture3').textContent;
    const prix = document.getElementById("PrixVoiture3").querySelector("strong").textContent;

    // Ajout ou modification du produit
    let indexProduit = panier.findIndex((produit) => produit.nom === nomproduit);
    if (indexProduit !== -1) {
        panier[indexProduit].quantite++;
    }
    else {
        panier.push({nom: nomproduit, prix: prix, quantite: 1});
    }

    // Enregistrement du panier dans le localStorage
    localStorage.setItem('panier', JSON.stringify(panier));
    afficherNotification('Le produit a été ajouté au panier');
    console.log(panier);

    return 'Le produit a été ajouté au panier';
}

module.exports = {addcartVoiture1, addcartVoiture2, addcartVoiture3}