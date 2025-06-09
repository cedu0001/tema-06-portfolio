///////Mobil porfolio JS///////

// Funktion der sætter funktionalitet op for ét article-element
function setupArticle(article) {
    // Finder knappen inden i article-elementet
    const openBtn = article.querySelector("article > button");

    // Finder dialog-elementet inden i article
    const dialog = article.querySelector("dialog");

    // Finder luk-knappen inde i dialogen (har klassen .close-dialog)
    const closeBtn = article.querySelector(".close-dialog");

    // Lytter efter klik på åbn-knappen
    openBtn.addEventListener("click", openDialog);

    // Funktion der åbner dialogen
    function openDialog(event) {
        event.preventDefault(); // Forhindrer at siden genindlæses (standardadfærd for nogle knapper/links)

          // Åbner dialogen som modal (med mørk baggrund/backdrop)
        dialog.showModal();
        
        // Scroller dialogens overskrift (h3) ind i view
        dialog.querySelector("h3").scrollIntoView();

      
    }

    // Lytter efter klik på luk-knappen og lukker dialogen
    closeBtn.addEventListener("click", function () {
        dialog.close();
    });
}

// Finder alle elementer med klassen "mobil_card"
const articles = document.querySelectorAll(".mobil_card");

// Går igennem hvert article-element og kører setupArticle på det
articles.forEach(setupArticle);



////Luk dialog boks hvis man klikker undenfor

const dialogs = document.querySelectorAll("dialog"); // Vælg alle dialog-elementer

dialogs.forEach((dialog) => {//Går igennem hver dialog én efter én.
	dialog.addEventListener("click", function (e) {
		e.preventDefault(); 

        // Finder dialogens størrelse og position på skærmen
		const rect = dialog.getBoundingClientRect();

        // Tjekker om der blev klikket *inden i* dialogens synlige boks
		const clickedInDialog =
			e.clientX >= rect.left &&
			e.clientX <= rect.right &&
			e.clientY >= rect.top &&
			e.clientY <= rect.bottom;

		if (!clickedInDialog) {
			dialog.close(); // Luk dialog hvis man klikker udenfor
		}
	});
});


///////Desktop porfolio JS///////

const buttons  = document.querySelectorAll(".project-button"); //Henter alle HTML-elementer med klassen .project-button og gemmer dem i buttons.
const sections = document.querySelectorAll(".tema-section"); //Henter alle sektioner med klassen .tema-section, som er dem du vil vise/skjule, og gemmer dem i sections.

buttons.forEach((button) => { //Går igennem hver eneste knap i buttons
  button.addEventListener("click", (e) => { //Lytter efter et klik på knappen, og når det sker, kører koden indeni.
    e.preventDefault();                       // Forhindrer siden i at reloade
    const targetId = button.getAttribute("data-target");   //Henter værdien af data-target fra knappen – fx "section-t2" – og gemmer det som targetId.

    // Skjuler alle sektioner ved at tilføje klassen hidden (som har display: none i CSS).
    sections.forEach(sec => sec.classList.add("hidden"));
     // Finder den sektion med det ID, fra data-target, og fjerner hidden-klassen → så den bliver synlig.
    document.getElementById(targetId).classList.remove("hidden");

    // 2) Opdater aktiv-knappen
    buttons.forEach(btn => btn.classList.remove("active")); // Går alle knapper igennem og fjerner klassen active, så ingen er markeret
    button.classList.add("active");                         // Lægger active på den knap, der netop blev klikket → farven skifter.
  });
});

/* 
Når man klikker på en knap:

    Man finder ud af, hvilken sektion der skal vises (via data-target)

    Alle sektioner skjules

    Man viser kun den ene, man klikkede frem

*/