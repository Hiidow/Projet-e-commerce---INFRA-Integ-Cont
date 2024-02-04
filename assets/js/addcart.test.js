const addcartVoiture1 = require('./addcart');
describe(
    'Test de la fonction addcart', () => {
        test('Ajout de produit', () => {
            expect(addcartVoiture1()).toBe('Le produit a été ajouté au panier');
        })
    }
)
