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
 








