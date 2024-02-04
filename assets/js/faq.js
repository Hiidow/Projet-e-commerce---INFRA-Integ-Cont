// Fonction pour afficher ou masquer la réponse
function toggleAnswer(index) {
    var answer = document.getElementById('answer-' + index);
    answer.style.display = (answer.style.display === 'none' || answer.style.display === '') ? 'block' : 'none';
}
  
// Ajoutez des boutons pour chaque question
document.addEventListener('DOMContentLoaded', questions);

function questions(){
    var questions = document.querySelectorAll('h2');
    questions.forEach(function (question, index) {
        var button = document.createElement('span');
        button.className = 'show-answer';
        button.textContent = 'Voir la réponse';
        button.onclick = function () {
            toggleAnswer(index);
        };
        question.insertAdjacentElement('afterend', button);
    });
    return "Les questions ont été ajoutées avec succès"
}

module.exports = questions;