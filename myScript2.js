let title = document.title;
    
window.addEventListener("blur", () => {
    document.title = "C'est par versaille ici !";
});

window.addEventListener("focus", () => {
    document.title = title;
});