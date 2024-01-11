let panier = [];

document.getElementById('BVoiture1').addEventListener('click',function() {

    let nomproduit = document.getElementById('Voiture1').value;
    let PrixProduit = ducoment.getElementById('PrixVoiture1').value;
    let quantite = document.getElementById('QuantiteVoiture1').value;

    let produit = {
        nom: nomproduit,
        Prix: PrixProduit,
        quantite: quantite
    }

    panier.push(produit);
    console.log(panier);

    let produitJSON = JSON.stringify(panier);

    localStorage.setItem('panier', produitJSON);
})
