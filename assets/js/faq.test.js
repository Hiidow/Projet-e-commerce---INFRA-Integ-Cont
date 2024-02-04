const questions = require('./faq');
describe(
    'Test de la fonction faq', () => {
        test('faq', () => {
            expect(questions()).toBe('Les questions ont été ajoutées avec succès');
        })
    }
)