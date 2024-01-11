let panier = [];
    
function clearPanierDOM() {
    const tbody = document.getElementById('paniertbody');
    if (tbody) {
        tbody.innerHTML = ''; // Vide le contenu actuel du tableau
    } else {
        console.error("L'élément #paniertbody n'a pas été trouvé dans le document.");
    }
}

function reconstructPanierDOM() {
    const tbody = document.getElementById('paniertbody');
    if (tbody) {
        for (const produit of panier) {
            const row = document.createElement('tr');
            const nomCell = document.createElement('td');
            nomCell.textContent = produit.nom;
            row.appendChild(nomCell);

            const quantiteCell = document.createElement('td');
            const moinsBtn = document.createElement('button');
            moinsBtn.textContent = '-';
            moinsBtn.addEventListener('click', function () {
                decrementerQuantite(produit);
            });
            quantiteCell.appendChild(moinsBtn);

            const quantiteText = document.createElement('span');
            quantiteText.textContent = produit.quantite;
            quantiteCell.appendChild(quantiteText);

            const plusBtn = document.createElement('button');
            plusBtn.textContent = '+';
            plusBtn.addEventListener('click', function () {
                incrementerQuantite(produit);
            });
            quantiteCell.appendChild(plusBtn);

            row.appendChild(quantiteCell);

            const prixCell = document.createElement('td');
            prixCell.textContent = produit.prix;
            row.appendChild(prixCell);

            const totalCell = document.createElement('td');
            totalCell.textContent = produit.quantite * produit.prix;
            row.appendChild(totalCell);
            totalCell.classList.add('subtotal');

            const supprimerCell = document.createElement('td');
            supprimerCell.innerHTML = `<a href="#" class="remove-btn">Supprimer</a>`;
            row.appendChild(supprimerCell);

            tbody.appendChild(row);
        }
    } else {
        console.error("L'élément #paniertbody n'a pas été trouvé dans le document.");
    }
}

function getPanierFromLocalStorage() {
    const localStoragePanier = localStorage.getItem('panier');
    if (localStoragePanier) {
        panier = JSON.parse(localStoragePanier);
        clearPanierDOM();
        reconstructPanierDOM();
    }
}

function updateLocalStoragePanier() {
    localStorage.setItem('panier', JSON.stringify(panier));
}

// Fonction pour décrémenter la quantité d'un produit
function decrementerQuantite(produit) {
    if (produit.quantite > 1) {
        produit.quantite--;
        updateLocalStoragePanier();
        // Mettez à jour l'affichage de la quantité
        getPanierFromLocalStorage();
        updatePanierTotal();
    }
}

// Fonction pour incrémenter la quantité d'un produit
function incrementerQuantite(produit) {
    produit.quantite++;
    updatePanierTotal();
    updateLocalStoragePanier();
    // Mettez à jour l'affichage de la quantité
    getPanierFromLocalStorage();
}


console.log(localStorage.getItem('panier'));

function updatePanier(produit, quantite) {
    let indexProduit = panier.findIndex((item) => item.nom === produit.nom);
    if (indexProduit !== -1) {
        panier[indexProduit].quantite = quantite;
    } else {
        panier.push(produit);
    }

    updatePanierTotal();
}

function removeProduitFromPanier(produit) {
    const indexProduit = panier.findIndex((item) => item.nom === produit.nom);
    if (indexProduit !== -1) {
        panier.splice(indexProduit, 1);
    }

    updatePanierTotal();
}

function updatePanierTotal() {
    let total = 0;
    for (const produit of panier) {
        total += produit.prix * produit.quantite;
    }

    document.getElementById('total-panier').textContent = String(total) + ' €';
}


document.addEventListener('DOMContentLoaded', function () {
    
    getPanierFromLocalStorage();
    const submitButton = document.getElementById('submit');
    submitButton.addEventListener('click', function() {
    alert('Votre commande a bien été prise en compte');
    localStorage.clear();
    location.reload();
    });
    // Sélectionnez tous les champs de quantité
    var quantityInputs = document.querySelectorAll('.quantity-input');

    // Ajoutez un écouteur d'événements à chaque champ de quantité
    quantityInputs.forEach(function (input) {
        input.addEventListener('change', updateSubtotal);
    });

    // Fonction pour mettre à jour le sous-total
    function updateSubtotal() {
            // Récupérez les données du produit à partir de la ligne actuelle
            const row = this.parentNode.parentNode;
            const produit = {
                nom: row.children[0].textContent,
                quantite: parseFloat(row.children[1].textContent),
                prix: parseFloat(row.children[2].textContent)
            };
        
            // Calculez le sous-total
            const subtotal = produit.quantite * produit.prix;
        
            // Mettez à jour le sous-total dans la ligne
            row.children[3].textContent = subtotal;
        
            // Mettez à jour le total global
            updateTotal();
        }
        

    // Fonction pour mettre à jour le total
    function updateTotal() {
        var subtotalElements = document.querySelectorAll('.subtotal');
        var total = 0;

        // Calculez le total en additionnant tous les sous-totaux
        subtotalElements.forEach(function (subtotalElement) {
        total += parseFloat(subtotalElement.textContent.replace('€', '').trim());
        });

        // Mettez à jour le total dans le pied du tableau
        document.getElementById('total-panier').textContent = String(total) + ' €';
    }

    // Ajoutez un écouteur d'événements pour les boutons de suppression
    var removeButtons = document.querySelectorAll('.remove-btn');
    removeButtons.forEach(function (button) {
        button.addEventListener('click', removeItem);
    });

    // Fonction pour supprimer un article
    function removeItem() {
        var row = this.parentNode.parentNode; // Ligne actuelle
        if (row.parentNode) {
            const produit = {
                nom: row.children[0].textContent,
                quantite: parseInt(row.children[1].textContent), // Convertissez la quantité en nombre
                prix: parseFloat(row.children[2].textContent)
            };

            removeProduitFromPanier(produit); // Supprimez l'article du panier
            updateLocalStoragePanier(); // Mettez à jour le panier dans le localStorage
            row.parentNode.removeChild(row); // Supprimez la ligne du DOM
            updateTotal(); // Mettez à jour le total global
        }
    }
    
    updatePanierTotal();

});