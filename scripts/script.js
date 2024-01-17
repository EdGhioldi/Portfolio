function showContent(contentId) {
    // Oculta todos los contenidos
    var contents = document.querySelectorAll('.content');
    contents.forEach(function (content) {
        content.style.display = 'none';
    });

    // Muestra el contenido seleccionado
    var selectedContent = document.getElementById(contentId + 'Content');
    if (selectedContent) {
        selectedContent.style.display = 'block';
    }
}
