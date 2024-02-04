const clearPanierDOM = require('./panier');
describe(
    'Test de la fonction clear panier', () => {
        test('clear panier', () => {
            expect(clearPanierDOM()).toBe('Le panier a été vidé');
        })
    }
)