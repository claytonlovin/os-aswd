  
const words = ["Opensource", "Escalável", "Rápido", "Eficaz"];
let i = 0;
let j = 0;
let currentWord = "";
let isDeleting = false;

function animateWords() {
  currentWord = words[i];
  if (isDeleting) {
    document.getElementById("anim-word").textContent = currentWord.substring(0, j - 1);
    j--;
    if (j == 0) {
      isDeleting = false;
      i++;
      if (i == words.length) {
        i = 0;
      }
    }
  } else {
    document.getElementById("anim-word").textContent = currentWord.substring(0, j + 1);
    j++;
    if (j == currentWord.length) {
      isDeleting = true;
    }
  }
  setTimeout(animateWords, isDeleting ? 800 : 150);
}

animateWords();