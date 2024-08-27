
document.addEventListener('keydown', function(event) {
    if (event.key === 'ArrowRight') {
        var nextLink = document.querySelector('.md-footer-nav__link--next');
        if (nextLink) {
            window.location.href = nextLink.href;
        }
    }
    if (event.key === 'ArrowLeft') {
        var prevLink = document.querySelector('.md-footer-nav__link--prev');
        if (prevLink) {
            window.location.href = prevLink.href;
        }
    }
});
        