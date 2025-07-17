document.addEventListener('DOMContentLoaded', function() {
    console.log('Halaman Blog & Edukasi dimuat.');

    document.querySelectorAll('.read-more-btn').forEach(button => {
        button.addEventListener('click', function(event) {
            event.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                document.querySelectorAll('article[id$="-detail"]').forEach(article => {
                    article.style.display = 'none';
                });
                targetElement.style.display = 'block';

                window.scrollTo({
                    top: targetElement.offsetTop - 70,
                    behavior: 'smooth'
                });
            }
        });
    });

    if (window.location.hash) {
        const initialTargetId = window.location.hash.substring(1);
        const initialTargetElement = document.getElementById(initialTargetId);
        if (initialTargetElement) {
            document.querySelectorAll('article[id$="-detail"]').forEach(article => {
                article.style.display = 'none';
            });
            initialTargetElement.style.display = 'block';

            setTimeout(() => {
                window.scrollTo({
                    top: initialTargetElement.offsetTop - 70,
                    behavior: 'smooth'
                });
            }, 100);
        }
    } else {
        document.querySelectorAll('article[id$="-detail"]').forEach(article => {
            if (!article.classList.contains('active-on-load')) {
                article.style.display = 'none';
            }
        });
    }

});