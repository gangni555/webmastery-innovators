document.getElementById('showPopup1').addEventListener('click', function () {
	document.getElementById('popupContainer').style.display = 'block';
});

document.getElementById('showPopup2').addEventListener('click', function () {
	document.getElementById('popupContainer').style.display = 'block';
});

document.getElementById('showPopup3').addEventListener('click', function () {
	document.getElementById('popupContainer').style.display = 'block';
});

document.getElementById('closePopup').addEventListener('click', function () {
	document.getElementById('popupContainer').style.display = 'none';
});

// Sélection de l'élément de la barre rectangulaire
const popupMessage = document.getElementById('popupMessage');
// Fonction pour afficher la barre rectangulaire
function showPopup() {
	popupMessage.style.display = 'block';
	// Masquer la barre après quelques secondes (par exemple, 3 secondes)
	setTimeout(() => {
		popupMessage.style.display = 'none';
	}, 3000);
}
// Écouter l'événement submit du formulaire
document
	.getElementById('infoForm')
	.addEventListener('submit', function (event) {
		// Empêcher le comportement par défaut du formulaire lors de sa soumission
		event.preventDefault();

		showPopup();
	});

/* -------------------------------------------------------------- */
document
	.getElementById('contactForm')
	.addEventListener('submit', function (event) {
		// Empêcher le comportement par défaut du formulaire lors de sa soumission
		event.preventDefault();

		document.getElementById('successMessage').style.display = 'block';
	});
