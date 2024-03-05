document.addEventListener("DOMContentLoaded", function() {
    var link = document.querySelectorAll('#navbar a.dot');

    // Move to specific section when click on menu link
    link.forEach(function(element) {
        element.addEventListener('click', function(e) {
            var target = document.querySelector(element.getAttribute('href'));
            window.scrollTo({
                top: target.offsetTop,
                behavior: 'smooth'
            });
            link.forEach(function(linkElement) {
                linkElement.classList.remove('active');
            });
            element.classList.add('active');
            e.preventDefault();
        });
    });

    // Run the scrNav when scroll
    window.addEventListener('scroll', function() {
        scrNav();
    });

    // scrNav function
    // Change active dot according to the active section in the window
    function scrNav() {
        var sTop = window.scrollY;
        document.querySelectorAll('section').forEach(function(section) {
            var id = section.getAttribute('id'),
                offset = section.offsetTop - 1,
                height = section.offsetHeight;
            if (sTop >= offset && sTop < offset + height) {
                link.forEach(function(linkElement) {
                    linkElement.classList.remove('active');
                });
                document.querySelector('#navbar [data-scroll="' + id + '"]').classList.add('active');
            }
        });
    }

    scrNav();
});
