document.addEventListener('DOMContentLoaded', function() {
    var projectTitles = document.querySelectorAll('.project-title');

    projectTitles.forEach(function(title) {
        title.addEventListener('click', function() {
            var content = this.nextElementSibling;
            if (content.style.display === 'block') {
                content.style.display = 'none';
            } else {
                content.style.display = 'block';
            }
        });
    });
});
