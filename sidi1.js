// Sélection des éléments DOM
const elements = {
    dispare: document.querySelector('.dispare'),
    change: document.querySelectorAll('.change'),
    divchange: document.querySelectorAll('.divchange div'),
    darkModeToggle: document.getElementById('darkModeToggle'),
    body: document.body,
    navbar: document.querySelectorAll('.navbar'),
    form: document.querySelector('form.message'),
    burgerMenu: document.getElementById('burgerMenu'),
    navLinks: document.getElementById('navLinks'),
    backToTopBtn: document.getElementById('backToTopBtn'),
    
};


// Variables d'état
let state = {
    burgerOpen: false,
    isDarkMode: false,
fullname : document.getElementById('fullname'),
email : document.getElementById('email'),
subject : document.getElementById('subject'),
message : document.getElementById('message'),
};

/* ----------------- Gestion des événements ----------------- */
function initEventListeners() {
    // Empêcher le comportement par défaut des formulaires
    document.addEventListener("submit", (e) => e.preventDefault());

    // Menu Burger
    if (elements.burgerMenu && elements.navLinks) {
        elements.burgerMenu.addEventListener('click', toggleBurgerMenu);
    }

    // Mode Sombre/Clair
    if (elements.darkModeToggle) {
        elements.darkModeToggle.addEventListener('click', toggleDarkMode);
    }

    // Effet d'apparition au scroll
    initScrollEffects();

    // Gestion du scroll pour la navbar et le titre
    if (elements.dispare) {
        window.addEventListener('scroll', handleScroll);
    }

    // Recherche des professeurs
    initTeacherSearch();

    // Bouton retour en haut
    if (elements.backToTopBtn) {
        initBackToTopButton();
    }

    // Affichage des actualités
    if (document.getElementById('newsContainer')) {
        renderNews();
    }
    
}

/* ----------------- Fonctions spécifiques ----------------- */

function toggleBurgerMenu() {
    state.burgerOpen = !state.burgerOpen;
    elements.navLinks.classList.toggle('active');
    elements.burgerMenu.classList.toggle('active');
    
    elements.navbar.forEach(nav => {
        nav.style.overflow = state.burgerOpen ? "initial" : "hidden";
    });
}

function toggleDarkMode() {
    state.isDarkMode = !state.isDarkMode;
    elements.body.classList.toggle('dark-mode', state.isDarkMode);
    
    elements.change.forEach(el => el.classList.toggle('pdark'));
    elements.divchange.forEach(el => el.classList.toggle('divchangedark'));

    const icon = elements.darkModeToggle.querySelector('i');
    icon.classList.toggle('fa-moon', !state.isDarkMode);
    icon.classList.toggle('fa-sun', state.isDarkMode);
}

function initScrollEffects() {
    const fadeElements = document.querySelectorAll('.scroll-fade-in');
    
    function checkScroll() {
        const windowHeight = window.innerHeight;
        
        fadeElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            if (elementTop < windowHeight - 100) {
                element.classList.add('visible');
            }
        });
    }

    window.addEventListener('scroll', checkScroll);
    checkScroll();
}

function handleScroll() {
    const scrollY = window.scrollY;
    const isMobile = window.innerWidth <= 768;
    
    if (scrollY > 100) {
        elements.dispare.style.top = "-15rem";
        if (!isMobile) {
            elements.navbar.forEach(nav => nav.style.top = "-100px");
        }
    } else {
        elements.dispare.style.top = isMobile ? "10.4rem" : "40%";
        if (!isMobile) {
            elements.navbar.forEach(nav => nav.style.top = "0");
        }
    }
}

function initTeacherSearch() {
    const searchInput = document.getElementById('teacherSearch');
    const table = document.getElementById('teachersTable');
    
    if (!searchInput || !table) return;
    
    searchInput.addEventListener('input', function() {
        const filter = this.value.toLowerCase();
        const rows = table.querySelectorAll('tbody tr');
        
        rows.forEach(row => {
            const cells = row.querySelectorAll('td');
            let match = false;
            
            cells.forEach(cell => {
                if (cell.textContent.toLowerCase().includes(filter)) {
                    match = true;
                }
            });
            
            row.style.display = match ? '' : 'none';
        });
    });
}

function initBackToTopButton() {
    window.addEventListener('scroll', function() {
        elements.backToTopBtn.classList.toggle('visible', window.pageYOffset > 300);
    });
    
    elements.backToTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

function renderNews() {
    const container = document.getElementById('newsContainer');
    if (!container) return;
    
    container.innerHTML = '';
    
    const newsData = [
        {
            title: "Journée amazighe au lycée/اليوم الأمازيغي في الثانوية",
            date: "Yennayer 2025",
            image: "./img_sidi/2.png",
            excerptFr: "À l'occasion de Yennayer, le lycée a célébré la culture amazighe à travers diverses activités festives et éducatives.",
            excerptAr: "بمناسبة رأس السنة الأمازيغية، احتفل الثانوية بالثقافة الأمازيغية من خلال أنشطة تربوية واحتفالية متنوعة",
            lien: "./yenayer2025.html"
        },
        {
            title: "Résultats du bac / نتائج البكالوريا",
            date: "Procheinement",
            image: "./img_sidi/resultatBac.jpg",
            excerptFr: "Félicitations à nos bacheliers pour leurs excellents résultats cette année avec un taux de réussite de X%.",
            excerptAr: "مبروك لطلابنا الناجحين في البكالوريا هذه السنة بمعدل نجاح بلغ %X.",
            lien:"",
        },

         {title:"Lancement du nouveau site / إطلاق الموقع الجديد",
          date:"05/06/2025",
          image:"./img_sidi/scriptimg.jpg",
          excerptFr:"Nous sommes fiers de vous présenter le nouveau site web du lycée Sidi Ali Lebhar. Cette plateforme permettra de mieux communiquer avec toute la communauté éducative.",
          excerptAr:"نفخر بتقديم الموقع الإلكتروني الجديد لثانوية سيدي علي البحار. هذه المنصة ستساعد على تحسين التواصل مع المجتمع التربوي.",
          lien:"",
        },
   
         {
             title: "Journée portes ouvertes / يوم الأبواب المفتوحة",
            date: "Septambre 2025",
            image: "./img_sidi/photo3.jpg",
            excerptFr: "Le lycée ouvre ses portes le 15 juin pour présenter ses formations et installations aux futurs élèves et parents.",
            excerptAr: "ستفتح الثانوية أبوابها يوم 15 يونيو لتقديم شعبها وتجهيزاتها للتلاميذ المستقبليين وأولياء أمورهم.",
            lien:"",
        },
        // ... autres actualités
    ];
    
    newsData.forEach(news => {
        const newsCard = document.createElement('article');
        newsCard.className = 'news-card';
        newsCard.innerHTML = `
            <div class="news-image">
                <img src="${news.image}" alt="${news.title.split('/')[0]}">
            </div>
            <div class="news-content">
                <span class="news-date">${news.date}</span>
                <h3 class="news-title">${news.title}</h3>
                <p class="news-excerpt">${news.excerptFr}</p>
                <p class="news-excerpt ar-text">${news.excerptAr}</p>
                <a href="${news.lien}" class="read-more">Lire plus <i class="fas fa-arrow-right"></i></a>
            </div>
        `;
        container.appendChild(newsCard);
    });
}

//message de validation------------------------------------------------------------------------------------
document.addEventListener('DOMContentLoaded', function() {
    // 1. Sélection des éléments avec vérification
    const form = document.querySelector('form.message');
    
    if (!form) {
        console.log("mazal");
        return; // Arrête le script si le formulaire n'existe pas
    }

    // 2. Fonction de soumission
    function handleFormSubmit(e) {
        e.preventDefault();
        console.log(" c est bon");

        // Supprime les anciens messages
        const existingMessages = document.querySelectorAll('.form-feedback');
        existingMessages.forEach(msg => msg.remove());

        // Crée le message de succès
        const feedback = document.createElement('div');
        feedback.className = 'form-feedback';
        feedback.innerHTML = `
            <i class="fas fa-check-circle"></i>
            Message envoyé avec succès !
        `;
        document.body.appendChild(feedback);

        // Animation
        setTimeout(() => feedback.style.opacity = 1, 10);
        setTimeout(() => {
            feedback.style.opacity = 0;
            setTimeout(() => feedback.remove(), 500);
        }, 3000);

        // Réinitialise le formulaire (optionnel)
        form.reset();
    }

    // 3. Ajout de l'écouteur avec try/catch
    try {
        form.addEventListener('submit', handleFormSubmit);
    } catch (error) {
        console.error(" Erreur critique :", error);
    }
});
/*-------------------------------essayer d envoyer le message vers un email-----------------*/
    
fullname.addEventListener("input",(e)=>{
    let inp1 = e.target.value;
    console.log(inp1);
});
email.addEventListener("input",(e)=>{
    let inp2 = e.target.value;
    console.log(inp2);
});
subject.addEventListener("input",(e)=>{
    let inp3 = e.target.value;
    console.log(inp3);
});
message.addEventListener("input",(e)=>{
    let inp4 = e.target.value;
    console.log(inp4);
});


//----------------------------------------------------------------------------- Initialisation
document.addEventListener('DOMContentLoaded', initEventListeners);