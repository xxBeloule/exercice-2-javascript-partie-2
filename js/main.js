// Définition d'une variable et on lui attribu un getElementById avec l'id voulu.
var focusperdu = document.getElementById("lastname");
// Rappelle de la variable + la propriété onblur (Perte de focus) = à La fonction
focusperdu.onblur = AfficherImage;
// Définition de la fonction et lui donnant une alerte
function AfficherImage() {
	alert("Merci pour votre participation");
}
