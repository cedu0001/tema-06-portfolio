function setupArticle(article){
    const openBtn = article.querySelector("article > button");
    const dialog = article.querySelector("dialog");
    const closeBtn = article.querySelector(".close-dialog");

    openBtn.addEventListener("click", openDialog);
    function openDialog(event) {
        event.preventDefault(); // forhindrer reload
        dialog.querySelector("h3").scrollIntoView();
        dialog.showModal();


     /*  dialog.classList.remove("dialog-animation");
        void dialog.offsetWidth;
        dialog.classList.add("dialog-animation"); */


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







