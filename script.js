$(document).ready(function () {
    // Example: Highlight the current page in the navigation menu
    $('nav ul li a').each(function () {
        if (this.href === window.location.href) {
            $(this).css('font-weight', 'bold');
        }
    });
});
