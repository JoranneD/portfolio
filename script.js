function showText(content) {
    const textBox = document.getElementById('text-box');
  
    // Si le texte affiché est déjà celui sélectionné → on ferme la boîte
    if (textBox.classList.contains('show') && textBox.innerHTML === content) {
      textBox.classList.remove('show');
    } else {
      // Si la boîte est déjà visible → la faire disparaître avant de changer le contenu
      if (textBox.classList.contains('show')) {
        textBox.classList.remove('show');
  
        // Attendre la fin de la transition avant de changer le texte
        setTimeout(() => {
          textBox.innerHTML = content;
          textBox.classList.add('show');
        }, 500); // Temps égal à la transition CSS (0.5s)
      } else {
        // Si la boîte est cachée → changer le texte et l'afficher directement
        textBox.innerHTML = content;
        textBox.classList.add('show');
      }
    }
  }
  
  // Fermer la boîte de texte si l'utilisateur clique ailleurs sur la page
  document.addEventListener('click', function(event) {
    const textBox = document.getElementById('text-box');
    const icons = document.querySelectorAll('.icon');
    const clickedInsideIcon = Array.from(icons).some(icon => icon.contains(event.target));
    const clickedInsideTextBox = textBox.contains(event.target);
  
    // Si l'utilisateur clique en dehors de l'icône ou de la boîte de texte → on la masque
    if (!clickedInsideIcon && !clickedInsideTextBox) {
      textBox.classList.remove('show');
    }
  });
  