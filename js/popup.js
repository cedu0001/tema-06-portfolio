function setupArticle(article){
    const openBtn = article.querySelector("article > button");
    const dialog = article.querySelector("dialog");
    const closeBtn = article.querySelector(".close-dialog");

    openBtn.addEventListener("click", openDialog);
    function openDialog(event) {
        event.preventDefault(); // forhindrer reload
        dialog.querySelector("h3").scrollIntoView();
        dialog.showModal();

    }

    closeBtn.addEventListener("click", function(){
        
    dialog.close();

    });
}

const articles = document.querySelectorAll(".mobil_card");

articles.forEach(setupArticle);

articles.forEach((article) => {
    setupArticle(article);

});

articles.forEach(function(article){
    setupArticle(article);
});
 


const dialog = document.querySelector("dialog"); //Finder <dialog> elementet i HTML og gemmer det i en variabel.

dialog.addEventListener("click", function (e) {
	e.preventDefault(); // Forhindrer browserens standardhandling (som fx at genindlæse siden ved visse klik)

	// Finder dialogens størrelse og position på skærmen
	const rect = dialog.getBoundingClientRect(); 

	// Tjekker om der blev klikket *inden i* dialogens synlige boks
	const clickedInDialog =
		e.clientX >= rect.left &&
		e.clientX <= rect.right &&
		e.clientY >= rect.top &&
		e.clientY <= rect.bottom;

	// Hvis man klikker *udenfor* dialogens boks (altså på backdrop), så lukker dialogen
	if (!clickedInDialog) {
		dialog.close();
	}
});


///////////////


const buttons = document.querySelectorAll(".project-button"); //Henter alle HTML-elementer med klassen .project-button og gemmer dem i buttons.
const sections = document.querySelectorAll(".tema-section"); //Henter alle sektioner med klassen .tema-section, som er dem du vil vise/skjule, og gemmer dem i sections.

buttons.forEach((button) => { //Går igennem hver eneste knap i buttons
  button.addEventListener("click", (e) => { //Lytter efter et klik på knappen, og når det sker, kører koden indeni.
    e.preventDefault(); // Forhindrer siden i at reloade

    const targetId = button.getAttribute("data-target"); //Henter værdien af data-target fra knappen – fx "section-t2" – og gemmer det som targetId.

    // Skjuler alle sektioner ved at tilføje klassen hidden (som har display: none i CSS).
    sections.forEach(section => section.classList.add("hidden"));

    // Finder den sektion med det ID, du fik fra data-target, og fjerner hidden-klassen → så den bliver synlig.
    document.getElementById(targetId).classList.remove("hidden");
  });
});

/* 
Når man klikker på en knap:

    Man finder ud af, hvilken sektion der skal vises (via data-target)

    Alle sektioner skjules

    Man viser kun den ene, man klikkede frem

*/
