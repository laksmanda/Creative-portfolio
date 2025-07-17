document.addEventListener('DOMContentLoaded', function() {
    console.log('Halaman Portofolio dimuat.');

    const allProjectsData = {
        1: {
            title: "Desain Aplikasi Mobile 'Aplikasi Kebugaran'",
            image: "img/project1.png",
            description: "Proyek ini melibatkan perancangan UI/UX lengkap untuk aplikasi kebugaran yang inovatif, dengan fokus pada kemudahan navigasi dan visualisasi data progres pengguna. Saya melakukan riset pengguna, membuat wireframe, prototipe, hingga desain final.",
            technologies: ["Figma", "Adobe Illustrator", "User Research", "Prototyping"],
            result: "Meningkatkan engagement pengguna sebesar 25% dalam uji coba awal dan mendapatkan rating kepuasan 4.8/5.",
            link: "https://www.google.com/search?q=Desain+Aplikasi+Mobile+%22Aplikasi+Kebugaran%22&oq=Desain+Aplikasi+Mobile+%22Aplikasi+Kebugaran%22&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIHCAEQIRigATIHCAIQIRigATIHCAMQIRigATIHCAQQIRiPAjIHCAUQIRiPAtIBCDE5MDdqMGo3qAIIsAIB8QWZX8BNuTGNSQ&sourceid=chrome&ie=UTF-8"
        },
        2: {
            title: "Pengembangan Website E-commerce 'Toko Buku Online'",
            image: "img/project2.png",
            description: "Pengembangan website e-commerce responsif penuh, dari desain frontend hingga integrasi backend sederhana (dummy API). Fitur meliputi katalog produk, keranjang belanja, dan sistem ulasan.",
            technologies: ["HTML5", "CSS3 (Bootstrap)", "JavaScript (ReactJS)", "Node.js (Express)", "MongoDB"],
            result: "Situs web yang cepat, responsif, dan siap untuk 100+ produk, dengan waktu muat rata-rata di bawah 2 detik.",
            link: "https://www.google.com/search?q=Pengembangan+Website+E-commerce+%22Toko+Buku+Online%22&oq=Pengembangan+Website+E-commerce+%22Toko+Buku+Online%22&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIHCAEQIRigATIHCAIQIRigATIHCAMQIRigATIHCAQQIRigATIHCAUQIRigATIHCAYQIRiPAjIHCAcQIRiPAtIBCDIyMzRqMGo3qAIIsAIB8QWgWYPRiXN0t_EFoFmD0YlzdLc&sourceid=chrome&ie=UTF-8"
        },
        3: {
            title: "Desain Branding 'Kopi Lokal Kedai Senja'",
            image: "img/project3.png",
            description: "Proyek ini mencakup pengembangan identitas merek yang komprehensif untuk kedai kopi lokal, termasuk desain logo, palet warna, tipografi, dan panduan penggunaan merek.",
            technologies: ["Adobe Illustrator", "Adobe Photoshop", "Brand Strategy", "Logo Design"],
            result: "Menciptakan identitas merek yang kuat dan mudah dikenali, meningkatkan daya tarik visual kedai kopi dan loyalitas pelanggan.",
            link: "https://www.google.com/search?q=Desain+Branding+%22Kopi+Lokal+Kedai+Senja%22&sca_esv=7df280c9fba08009&ei=iSt3aJLGNpuq4-EP5dO_oAo&ved=0ahUKEwjSruOgxsCOAxUb1TgGHeXpD6QQ4dUDCBA&uact=5&oq=Desain+Branding+%22Kopi+Lokal+Kedai+Senja%22&gs_lp=Egxnd3Mtd2l6LXNlcnAiKERlc2FpbiBCcmFuZGluZyAiS29waSBMb2thbCBLZWRhaSBTZW5qYSIyBRAhGKABMgUQIRigATIFECEYoAEyBRAhGKABMgUQIRigAUjkCFAAWABwAHgAkAEAmAGHAaABhwGqAQMwLjG4AQPIAQD4AQL4AQGYAgGgAo0BmAMAkgcDMC4xoAfvBLIHAzAuMbgHjQHCBwMyLTHIBwQ&sclient=gws-wiz-serp"
        },
        'sekolah-cerdas': {
            title: "Redesain Website Sekolah Menengah 'Cerdas Bangsa'",
            image: "img/project4.png",
            description: "Proyek redesain total website sekolah untuk meningkatkan pengalaman pengguna bagi siswa, orang tua, dan staf. Fokus pada desain yang modern, mudah diakses (accessibility), dan responsif, serta penyediaan informasi yang jelas tentang kurikulum, acara, dan pengumuman.",
            technologies: ["HTML5", "CSS3", "JavaScript", "Wordpress (Optional)", "UI/UX Best Practices"],
            result: "Website baru yang informatif dan menarik, dengan peningkatan navigasi dan aksesibilitas. Peningkatan traffic website sebesar 40% dan penurunan bounce rate sebesar 15% menunjukkan kepuasan pengguna yang lebih baik.",
            link: "https://www.google.com/search?q=Desain+Website+Sekolah+Menengah+%22Cerdas+Bangsa%22&sca_esv=d23f53fac3329841&ei=xk13aOKTKoWr4-EPyYii4QE&ved=0ahUKEwjijpT05sCOAxWF1TgGHUmEKBwQ4dUDCBA&uact=5&oq=Desain+Website+Sekolah+Menengah+%22Cerdas+Bangsa%22&gs_lp=Egxnd3Mtd2l6LXNlcnAiL0Rlc2FpbiBXZWJzaXRlIFNla29sYWggTWVuZW5nYWggIkNlcmRhcyBCYW5nc2EiSMYzUP8UWPsscAN4AJABAJgBWKABhgOqAQE1uAEDyAEA-AEBmAIAoAIAmAMAiAYBkgcAoAfrCLIHALgHAMIHAMgHAA&sclient=gws-wiz-serp"
        },
        'nutrifood': {
            title: "Aplikasi Resep Makanan Sehat 'NutriFood'",
            image: "img/project5.png",
            description: "Pengembangan aplikasi mobile untuk membantu pengguna menemukan resep makanan sehat, membuat rencana makan personal, dan melacak asupan nutrisi harian mereka. Fitur termasuk pencarian resep berdasarkan bahan, filter diet, dan kalkulator kalori terintegrasi.",
            technologies: ["React Native", "Firebase", "Food API Integration", "UI/UX Design"],
            result: "Aplikasi fungsional dengan antarmuka yang menarik dan database resep yang luas. Pengguna melaporkan peningkatan kesadaran akan pola makan sehat dan motivasi untuk memasak di rumah.",
            link: "https://www.google.com/search?q=Aplikasi+Resep+Makanan+Sehat+%22NutriFood%22&sca_esv=d23f53fac3329841&ei=3U13aKuEMODl4-EPjOem-A0&ved=0ahUKEwjr5pX_5sCOAxXg8jgGHYyzCd8Q4dUDCBA&uact=5&oq=Aplikasi+Resep+Makanan+Sehat+%22NutriFood%22&gs_lp=Egxnd3Mtd2l6LXNlcnAiKEFwbGlrYXNpIFJlc2VwIE1ha2FuYW4gU2VoYXQgIk51dHJpRm9vZCIyBRAhGKABMgUQIRigAUj1JVAAWABwAXgAkAEAmAFroAFrqgEDMC4xuAEDyAEA-AEC-AEBmAICoAJ0mAMAkgcDMS4xoAfSArIHAzAuMbgHccIHBTAuMS4xyAcE&sclient=gws-wiz-serp"
        }
    };

    const projectDetailModal = document.getElementById('projectDetailModal');
    if (projectDetailModal) {
        projectDetailModal.addEventListener('show.bs.modal', function (event) {
            const button = event.relatedTarget;
            const projectId = button.dataset.projectId;
            const project = allProjectsData[projectId];

            if (project) {
                document.getElementById('projectDetailModalLabel').textContent = project.title;
                document.getElementById('modalDetailImage').src = project.image;
                document.getElementById('modalDetailImage').alt = project.title;
                document.getElementById('modalDetailDescription').textContent = project.description;

                const techList = document.getElementById('modalDetailTechList');
                techList.innerHTML = '';
                project.technologies.forEach(tech => {
                    const li = document.createElement('li');
                    li.textContent = tech;
                    techList.appendChild(li);
                });

                document.getElementById('modalDetailResult').textContent = project.result;

                const projectLink = document.getElementById('modalDetailLink');
                if (project.link) {
                    projectLink.href = project.link;
                    projectLink.style.display = 'inline-block';
                } else {
                    projectLink.style.display = 'none';
                }
            }
        });
    }

    const filterButtons = document.querySelectorAll('[data-filter]');
    const projectItems = document.querySelectorAll('.project-item');

    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');

            const filterValue = this.dataset.filter;

            projectItems.forEach(item => {
                if (filterValue === 'all' || item.classList.contains(filterValue)) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });
});