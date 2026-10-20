const likeHnappur = document.querySelector('.like-btn');
const likeTeljari = document.querySelector('.like-count');

let fjoldiLika = 0;

likeHnappur.addEventListener('click', function() {
  fjoldiLika = fjoldiLika + 1;
  likeTeljari.textContent = fjoldiLika;
});

