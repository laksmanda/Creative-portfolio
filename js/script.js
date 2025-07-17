document.addEventListener('DOMContentLoaded', function() {
    console.log('Portofolio Kreatif Interaktif siap!');

    const projectsData = {
        1: {
            title: "Desain Aplikasi Mobile 'Aplikasi Kebugaran'",
            image: "img/project1-full.png",
            description: "Proyek ini melibatkan perancangan UI/UX lengkap untuk aplikasi kebugaran yang inovatif, dengan fokus pada kemudahan navigasi dan visualisasi data progres pengguna. Saya melakukan riset pengguna, membuat wireframe, prototipe, hingga desain final.",
            technologies: ["Figma", "Adobe Illustrator", "User Research", "Prototyping"],
            result: "Meningkatkan engagement pengguna sebesar 25% dalam uji coba awal dan mendapatkan rating kepuasan 4.8/5.",
            link: "https://www.google.com/search?q=Desain+Aplikasi+Mobile+%22Aplikasi+Kebugaran%22&oq=Desain+Aplikasi+Mobile+%22Aplikasi+Kebugaran%22&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIHCAEQIRigATIHCAIQIRigATIHCAMQIRigATIHCAQQIRiPAjIHCAUQIRiPAtIBCDE5MDdqMGo3qAIIsAIB8QWZX8BNuTGNSQ&sourceid=chrome&ie=UTF-8"
        },
        2: {
            title: "Pengembangan Website E-commerce 'Toko Buku Online'",
            image: "img/project2-full.png",
            description: "Pengembangan website e-commerce responsif penuh, dari desain frontend hingga integrasi backend sederhana (dummy API). Fitur meliputi katalog produk, keranjang belanja, dan sistem ulasan.",
            technologies: ["HTML5", "CSS3 (Bootstrap)", "JavaScript (ReactJS)", "Node.js (Express)", "MongoDB"],
            result: "Situs web yang cepat, responsif, dan siap untuk 100+ produk, dengan waktu muat rata-rata di bawah 2 detik.",
            link: "https://www.google.com/search?q=Pengembangan+Website+E-commerce+%22Toko+Buku+Online%22&oq=Pengembangan+Website+E-commerce+%22Toko+Buku+Online%22&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIHCAEQIRigATIHCAIQIRigATIHCAMQIRigATIHCAQQIRigATIHCAUQIRigATIHCAYQIRiPAjIHCAcQIRiPAtIBCDIyMzRqMGo3qAIIsAIB8QWgWYPRiXN0t_EFoFmD0YlzdLc&sourceid=chrome&ie=UTF-8"
        },
        3: {
            title: "Desain Branding 'Kopi Lokal Kedai Senja'",
            image: "img/project3-full.png",
            description: "Proyek ini mencakup pengembangan identitas merek yang komprehensif untuk kedai kopi lokal, termasuk desain logo, palet warna, tipografi, dan panduan penggunaan merek.",
            technologies: ["Adobe Illustrator", "Adobe Photoshop", "Brand Strategy", "Logo Design"],
            result: "Menciptakan identitas merek yang kuat dan mudah dikenali, meningkatkan daya tarik visual kedai kopi dan loyalitas pelanggan.",
            link: "https://www.google.com/search?q=Desain+Branding+%22Kopi+Lokal+Kedai+Senja%22&sca_esv=7df280c9fba08009&ei=iSt3aJLGNpuq4-EP5dO_oAo&ved=0ahUKEwjSruOgxsCOAxUb1TgGHeXpD6QQ4dUDCBA&uact=5&oq=Desain+Branding+%22Kopi+Lokal+Kedai+Senja%22&gs_lp=Egxnd3Mtd2l6LXNlcnAiKERlc2FpbiBCcmFuZGluZyAiS29waSBMb2thbCBLZWRhaSBTZW5qYSIyBRAhGKABMgUQIRigATIFECEYoAEyBRAhGKABMgUQIRigAUjkCFAAWABwAHgAkAEAmAGHAaABhwGqAQMwLjG4AQPIAQD4AQL4AQGYAgGgAo0BmAMAkgcDMC4xoAfvBLIHAzAuMbgHjQHCBwMyLTHIBwQ&sclient=gws-wiz-serp"
        }
    };

    const projectModal = document.getElementById('projectModal');
    if (projectModal) {
        projectModal.addEventListener('show.bs.modal', function (event) {
            const button = event.relatedTarget;
            const projectId = button.closest('.project-card').dataset.projectId;
            const project = projectsData[projectId];

            if (project) {
                document.getElementById('modalProjectTitle').textContent = project.title;
                document.getElementById('modalProjectImage').src = project.image;
                document.getElementById('modalProjectImage').alt = project.title;
                document.getElementById('modalProjectDescription').textContent = project.description;

                const techList = document.getElementById('modalProjectTechList');
                techList.innerHTML = '';
                project.technologies.forEach(tech => {
                    const li = document.createElement('li');
                    li.textContent = tech;
                    techList.appendChild(li);
                });

                document.getElementById('modalProjectResult').textContent = project.result;

                const projectLink = document.getElementById('modalProjectLink');
                if (project.link) {
                    projectLink.href = project.link;
                    projectLink.style.display = 'inline-block';
                } else {
                    projectLink.style.display = 'none';
                }
            }
        });
    }

    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault();

            const name = document.getElementById('name');
            const email = document.getElementById('email');
            const subject = document.getElementById('subject');
            const message = document.getElementById('message');
            const privacyAgree = document.getElementById('privacyAgree');

            let isValid = true;

            name.classList.remove('is-invalid');
            email.classList.remove('is-invalid');
            subject.classList.remove('is-invalid');
            message.classList.remove('is-invalid');
            privacyAgree.classList.remove('is-invalid');

            if (name.value.trim() === '') {
                name.classList.add('is-invalid');
                isValid = false;
            }
            if (email.value.trim() === '' || !isValidEmail(email.value.trim())) {
                email.classList.add('is-invalid');
                isValid = false;
            }
            if (subject.value.trim() === '') {
                subject.classList.add('is-invalid');
                isValid = false;
            }
            if (message.value.trim() === '') {
                message.classList.add('is-invalid');
                isValid = false;
            }
            if (!privacyAgree.checked) {
                privacyAgree.classList.add('is-invalid');
                isValid = false;
            }

            if (isValid) {
                alert('Pesan Anda berhasil dikirim!\n\nTerima kasih atas pesan Anda, ' + name.value.trim() + '!');
                contactForm.reset();
            } else {
                alert('Mohon lengkapi semua kolom yang wajib diisi dan perbaiki kesalahan.');
            }
        });
    }

    function isValidEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    }

    let cartItemCount = 0;
    const cartCountElement = document.getElementById('cartCount');
    const addToCartButtons = document.querySelectorAll('.add-to-cart-btn');

    addToCartButtons.forEach(button => {
        button.addEventListener('click', function() {
            cartItemCount++;
            if (cartCountElement) {
                cartCountElement.textContent = cartItemCount;
            }
            alert('Produk berhasil ditambahkan ke keranjang! Total item: ' + cartItemCount);
        });
    });
    const animatedElements = document.querySelectorAll('[class*="animate-"]');

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                observer.unobserve(entry.target); 
            }
        });
    }, { threshold: 0.1 });

    animatedElements.forEach(element => {
        observer.observe(element);
    });

});