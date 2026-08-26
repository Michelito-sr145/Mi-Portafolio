//TRADUCCION DE LA PAGINA POR EL SWITCH.
const switchLang = document.getElementById("lang-switch");
// Objeto con textos por idioma
const texts = {
    en: {
        t1: "Home",
        t2: "About me",
        t3: "Skills",
        t4: "My Projects",
        t5: "Contact Me",
        home1: "Hello, I'm",
        home2: "a",
        home3: "Open my CV",
        About1: "About",
        About2: "Me",
        About3: "I am a developer",
        About4: "Full Stack!",
        About5: "Passionate about creating innovative and functional solutions. With experience in developing web applications, designing intuitive interfaces and implementing robust systems, I am always looking to learn and improve my skills to deliver high-quality projects. I love taking on new challenges and collaborating in dynamic teams.",
        About6: "Academic studies",
        About7: "Technical School No.19 Alejandro Volta",
        About8: "Electronics Technician",
        About9: "Faculty of Engineering - UNLZ",
        Abou1t0: "Technician in Programming",
        Abou1t1: "Self-taught courses",
        skill2: "Programming Languages",
        skill3: "Development Environments",
        skill4: "Database",
        skill5: "Tools",
        skill6: "Languages",
        skill7: "Spanish",
        skill8: "Native",
        skill9: "English",
        skill0: "Básic (A2)",
        proyt1: "My",
        proyt2: "Projects",
        proy1: "Textile Workshop",
        proy2: "Desktop application that enables management of textile supply entries, exits, and stock through a modern, functional interface. It implements full CRUD operations and inventory flow control.",
        proy3: "Animal Nutrition",
        proy4: "It was a web platform developed as an academic project, focused on managing food requests for different animal species. It allows both users and administrators to register and log in. Users can request products based on the type of animal, while administrators have access to order management, stock control, and user administration features.",
        proy5: "App OffPc",
        proy6: "Application developed with",
        proy6_2: "Tkinter",
        proy6_3: "that lets you set a timer to automatically shut down the operating system (Windows only). When the countdown ends, it displays a farewell message before executing the shutdown command.",
        proy7: "Cleam PC",
        proy8: "This application cleans the PC by removing unnecessary files from the ",
        proy8_2: "“Temp”, “%temp%”,",
        proy8_3: "and ",
        proy8_4: "“Prefetch”",
        proy8_5: "folders. Once the process is complete, it creates a ",
        proy8_6: ".txt",
        proy8_7: "file listing the paths of any files that could not be deleted.",
        proy9: "PDF Catalog Generator",
        proy9_1: "Web application developed to automatically generate product catalogs in ",
        proy9_2: "PDF format. ",
        proy9_3: "It allows users to organize product information and create documents with a simple yet professional design, ",
        proy9_4: "ready for printing or digital sharing",
        proy9_5: "It is designed for businesses and entrepreneurs who need to create catalogs quickly and easily, with customizable content, without relying on design software.",
        contac1:"Contact",
        contac2:" Me",
        contac3:"Fill out the form with your name, number or email, and your message.",
        contac4:"Send Message",
        m_est1: "Title",
        m_est2: "Location",
        m_est3: "Close",
        m_est4: "Send",
    },
    // data-lang=""
    es: {
        t1: "Inicio",
        t2: "Sobre mí",
        t3: "Habilidades",
        t4: "Mis Proyectos",
        t5: "Contáctame",
        home1: "Hola, soy",
        home2: "un",
        home3: "Abrir mi CV",
        About1: "Sobre",
        About2: "Mi",
        About3: "Soy un Desarrollador",
        About4: "Full Stack!",
        About5: "Me apasiona crear soluciones innovadoras y funcionales. Con experiencia en el desarrollo de aplicaciones web, el diseño de interfaces intuitivas y la implementación de sistemas robustos, siempre busco aprender y mejorar mis habilidades para entregar proyectos de alta calidad. Me encanta asumir nuevos retos y colaborar en equipos dinámicos.",
        About6: "Estudios académicos",
        About7: "Escuela Técnica N.° 19 Alejandro Volta",
        About8: "Técnico en Electrónica",
        About9: "Facultad de Ingeniería - UNLZ",
        Abou1t0: "Técnico en Programación",
        Abou1t1: "Cursos autodidactas",
        skill2: "Lenguajes de programación",
        skill3: "Entornos de desarrollo",
        skill4: "Base de datos",
        skill5: "Herramientas",
        skill6: "Idiomas",
        skill7: "Español",
        skill8: "Nativo",
        skill9: "Inglés",
        skill0: "Básico (A2)",
        proyt1: "Mis",
        proyt2: "Proyectos",
        proy1: "Taller Textil",
        proy2: "Aplicación de escritorio que permite gestionar las entradas, salidas y existencias de suministros textiles mediante una interfaz moderna y funcional. Implementa operaciones CRUD completas y control del flujo de inventario.",
        proy3: "Nutrición Animal",
        proy4: "Plataforma web desarrollada como proyecto académico, enfocada en la gestión de solicitudes de alimentos para diferentes especies animales. Permite tanto a usuarios como a administradores registrarse e iniciar sesión. Los usuarios pueden solicitar productos según el tipo de animal, mientras que los administradores tienen acceso a la gestión de pedidos, el control de existencias y la administración de usuarios.",
        proy5: "App OffPc",
        proy6: "Aplicación desarrollada con",
        proy6_2: "Tkinter",
        proy6_3: "Permite configurar un temporizador para apagar automáticamente el sistema operativo (solo Windows). Al finalizar la cuenta regresiva, muestra un mensaje de despedida antes de ejecutar el comando de apagado.",
        proy7: "Limpiar PC",
        proy8: "Esta aplicación limpia el PC eliminando archivos innecesarios del mismo. ",
        proy8_2: "“Temp”, “%temp%”,",
        proy8_3: "y ",
        proy8_4: "“Prefetch”",
        proy8_5: "carpetas. Una vez finalizado el proceso, se crea un ",
        proy8_6: ".txt",
        proy8_7: "archivo con las rutas de los archivos que no se pudieron eliminar.",
        proy9: "Generador de Catálogos PDF",
        proy9_1: "Aplicación web desarrollada para generar catálogos de productos automáticamente en ",
        proy9_2: "formato PDF. ",
        proy9_3: "Permite organizar la información de los productos y crear documentos con un diseño simple pero profesional, ",
        proy9_4: "listos para imprimir o compartir digitalmente.",
        proy9_5: "Está diseñada para negocios y emprendedores que necesitan crear catálogos de forma rápida y sencilla, con contenido personalizable y sin depender de software de diseño.",
        contac1: "",
        contac2: "Contáctame",
        contac3: "Rellena el formulario con su nombre, número o correo electrónico y su mensaje.",
        contac4: "Enviar mensaje",
        m_est1: "Título",
        m_est2: "Ubicación",
        m_est3: "Cerrar",
        m_est4: "Enviar",
    }
};
// Textos dinámicos de Typed.js
const typedTexts = {
    en: ['Web Developer!', 'Backend Developer!', 'Frontend Developer!', 'Technology Lover!', 'Full Stack Developer!'],
    es: ['Desarrollador Web!', 'Desarrollador Backend!', 'Desarrollador Frontend!', 'Amante de la tecnología!', 'Desarrollador Full Stack!']
};
let typed;
// Función para iniciar Typed con idioma actual
function startTyped(lang) {
    if (typed) typed.destroy();
    typed = new Typed('.multiple-text', {
        strings: typedTexts[lang],
        typeSpeed: 80,
        backSpeed: 50,
        backDelay: 1200,
        loop: true,
        showCursor: true
    });
}
let currentLang = "en";
// Función para actualizar todos los textos
function updateTexts(lang) {
    currentLang = lang;
    document.documentElement.lang = lang;
    const elements = document.querySelectorAll("[data-lang]");
    elements.forEach(el => {
        const key = el.getAttribute("data-lang");
        el.textContent = texts[lang][key];
    });
    startTyped(lang);
}
// Cambiar idioma al alternar switch
switchLang.addEventListener("change", () => {
    const lang = switchLang.checked ? "es" : "en";
    updateTexts(lang);
});
// Idioma inicial (inglés)
document.addEventListener("DOMContentLoaded", () => {
    updateTexts("en");
});

let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
// ENCABEZADO Y LINKS
const header = document.querySelector('.header');
const navLinks = document.querySelectorAll('.header a');
// LINKS CURSES
const OpenCurse = document.querySelectorAll('.course-item');
// MODAL STUDIE CODE
const OpenModalStudie = document.querySelectorAll('.edu-item');
const ModalStudie = document.querySelector('.modal-studie');
const CloseModalStudie = document.querySelector('.modal-close-studie');
const modalTitle = document.querySelector('.modal-title-studie');
const modalDescrip = document.querySelector('.modal-descrip-studie');
const modalImage = document.querySelector('.modal-foto-studie');
const modalLink = document.querySelector('.modal-link-studie');
// MODAL SKILLS CODE
const OpenModalSkills = document.querySelectorAll('.media');
const ModalSkills = document.querySelector('.modal-skills');
const CloseSkills = document.querySelector('.modal-close-skills');
const modalTitleSkills = document.querySelector('.modal-title-skills');
const modalDescripSkills = document.querySelector('.modal-descrip-skills');
// FORMULARIO CODE
// Selección de elementos del formulario
const nameInput = document.getElementById("fullName");
const phoneInput = document.getElementById("phone");
const emailInput = document.getElementById("email");
const messageInput = document.getElementById("message");
const warningMessage = document.querySelector(".warning");
const sendBtn = document.getElementById("send-btn");
// Selección de elementos del modal Captcha
const ModalCaptcha = document.querySelector(".modal-captcha");
const captchaSubmitBtn = document.getElementById("captcha-submit-btn");
// Selección de elementos del modal-check
const modalCheck = document.querySelector(".modal-check");
const modalMessage = document.querySelector(".estado-message");
const modalIcon = document.querySelector(".modal-icono-check");
const closeModalCheck = document.querySelector(".close-modal-check");

// Inicializa EmailJs
emailjs.init("YfnvmcHJFwf7bO4xB");
// MOVIL o pantallas menores a 700px
if (menu){
    menu.onclick = () =>{
        menu.classList.toggle('bx-x');
        navbar.classList.toggle('active');
    }
}
window.onscroll = () => {
    menu.classList.remove('bx-x');
    navbar.classList.remove('active');
}

// SCROLLS AL ABRIR EL MODAL Y CENTRARLO
window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY;
    const modals = [
        { el: ModalStudie, className: 'modal-studie--show' },
        { el: ModalCaptcha, className: 'modal-captcha--show' },
        { el: ModalSkills, className: 'modal-skills--show' },
        { el: modalCheck, className: 'modal-check--show' }
    ];
    modals.forEach(({ el, className }) => {
        if (el?.classList.contains(className)) {
            el.style.top = `${scrollTop}px`;
        }
    });
});


//  -------------------------------------------------------------LINKS CURSES-------------------------------------------------------------
const Links_Curses = {
    C1: {
        link: "https://www.youtube.com/playlist?list=PLWtYZ2ejMVJkjOuTCzIk61j7XKfpIR74K&si=BjMkXhQHxCrr6vTN"
    },
    C2: {
        link: "https://www.youtube.com/watch?v=ELSm-G201Ls"
    },
    C3: {
        link: "https://www.youtube.com/watch?v=_y9qQZXE24A"
    },
    C4: {
        link: "https://www.youtube.com/watch?v=nKPbfIU442g"
    },
    C5: {
        link: "https://www.youtube.com/watch?v=Ei1y51K8jQk"
    },
};
OpenCurse.forEach(item => {
    item.addEventListener('click', (e) => {
        const key = item.classList[1];
        if (Links_Curses[key]) {
            window.open(Links_Curses[key].link, "_blank");
        }
    });
});


//  -------------------------------------------------------------MODAL STUDIE-------------------------------------------------------------
const modalContent = {
    en: {
        edu1: {
            title: "Electronics Technician",
            description: `During my training, I acquired knowledge in the <span>fundamental principles of electricity</span>, the use and operation of <span>electronic components</span> such as resistors, capacitors and transistors. In addition, I learned about <span>hardware</span>, including the analysis of internal components such as processors, RAM, hard drives and motherboards, as well as the installation and configuration of operating systems. I also developed skills in the construction and analysis of <span>electrical and electronic circuits</span>, computer assembly and maintenance.`,
            image: "assets/Studies/MichelSr-TecnicoElectronica.png",
            link: "https://maps.app.goo.gl/ER7Trx7Fz263VjUv6"
        },
        edu2: {
            title: "Technician in Programming",
            description: `In the Programming Technician, I acquired knowledge in <span>software development</span>, web page creation, database management and <span translate="no">full stack development</span>, combining backend and frontend technologies. I was trained in various <span>programming languages</span>, including <span translate="no">Java, .NET and Python</span>, as well as database management systems such as <span translate="no">Microsoft SQL Server</span><span> and</span><span translate="no"> MySQL</span>. I also learned about the design and structuring of applications, both at a logical and visual level, applying methodologies and good practices in <span>development.</span>`,
            image: "assets/Studies/MichelSr-ProgramacionComputadoras.png",
            link: "https://maps.app.goo.gl/s78B6pdfS3bA7vGVA"
        }
    },
    es: {
        edu1: {
            title: "Técnico en Electrónica",
            description: `Durante mi formación, adquirí conocimientos en los <span>principios fundamentales de la electricidad</span>, el uso y funcionamiento de <span>componentes electrónicos</span> como resistencias, capacitores y transistores. Además, aprendí sobre <span>hardware</span>, incluyendo el análisis de componentes internos como procesadores, RAM, discos duros y placas madre, así como la instalación y configuración de sistemas operativos. También desarrollé habilidades en la construcción y análisis de <span>circuitos eléctricos y electrónicos</span>, armado y mantenimiento de computadoras.`,
            image: "assets/Studies/MichelSr-TecnicoElectronica.png",
            link: "https://maps.app.goo.gl/ER7Trx7Fz263VjUv6"
        },
        edu2: {
            title: "Técnico en Programación",
            description: `En la carrera de Técnico en Programación adquirí conocimientos en el <span>desarrollo de software</span>, creación de páginas web, gestión de bases de datos y <span translate="no">desarrollo full stack</span>, combinando tecnologías de backend y frontend. Me formé en distintos <span>lenguajes de programación</span> como <span translate="no">Java, .NET y Python</span>, así como en gestores de bases de datos como <span translate="no">Microsoft SQL Server</span><span> y</span><span translate="no"> MySQL</span>. También aprendí sobre diseño y estructuración de aplicaciones tanto a nivel lógico como visual, aplicando metodologías y buenas prácticas de <span>desarrollo</span>.`,
            image: "assets/Studies/MichelSr-ProgramacionComputadoras.png",
            link: "https://maps.app.goo.gl/s78B6pdfS3bA7vGVA"
        }
    }
};
OpenModalStudie.forEach(item => {
    item.addEventListener('click', (e) => {
        e.preventDefault();
        const key = item.classList[1];
        const data = modalContent[currentLang][key];
        if (data) {
            modalTitle.textContent = data.title;
            modalDescrip.innerHTML = data.description;
            modalImage.href = data.image;
            modalLink.href = data.link;
            ModalStudie.classList.add('modal-studie--show');
            setTimeout(() => {
                window.scrollTo({
                    top: window.scrollY + 1,
                    behavior: "smooth"
                });
            }, 100);
        }
    });
});
CloseModalStudie.addEventListener('click', (e) => {
    e.preventDefault();
    ModalStudie.classList.remove('modal-studie--show');
    setTimeout(() => {
        window.scrollTo({
            top: window.scrollY - 1,
            behavior: "smooth"
        });
    }, 100);
});
// --Cierra Modal al pulsar Fuera del contenedor
ModalStudie.addEventListener('click', (e) => {
    if (!e.target.closest('.modal-container-studie')) {
        ModalStudie.classList.remove('modal-studie--show');
        setTimeout(() => {
            window.scrollTo({
                top: window.scrollY - 1,
                behavior: "smooth"
            });
        }, 100);
    }
});
// --Cierra Modal al pulsar en el Encabezado
header.addEventListener('click', () => {
    ModalStudie.classList.remove('modal-studie--show');
});
// --Cierra Modal al pulsar en un link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        ModalStudie.classList.remove('modal-studie--show');
    });
});


// -------------------------------------------------------------SKILLS-------------------------------------------------------------
const ContentSkills = {
    // Programming Languages English
    en :{
        java: {
            title: "Java",
            description: "The first language I learned was <span>Java</span> through academic training. I have knowledge of <span>object-oriented programming</span>, using the code editor <span>Eclipse IDE</span>. I have also worked with <span>control structures</span>, the classic <span>CRUD model (Create, Read, Update, Delete)</span>, <span>classes</span>, <span>inheritance</span>, and <span>exception handling</span>."
        },
        python: {
            title: "Python",
            description: "With <span>Python</span>, I have developed automation scripts as well as small personal projects. I’m familiar with the language’s <span>simple, clear syntax</span>, use of the <span>standard library</span>, and basic functional programming concepts. I’ve also used it in GUI projects with <span>Tkinter</span>."
        },
        html: {
            title: "HTML",
            description: "I use <span>HTML</span> as the foundational markup for web development. I know tag structure, semantic elements, forms, tables, lists, and links. I’ve implemented it in my portfolio and other web projects."
        },
        css: {
            title: "CSS",
            description: "I have utilized <span>CSS</span> to design attractive, responsive interfaces. I’m proficient with <span>Flexbox</span>, <span>Grid</span>, animations, <span>media queries</span>, pseudo-classes, and CSS variables. I focus on a modern aesthetic, custom color schemes, and clean organization."
        },
        javascript: {
            title: "JavaScript",
            description: "With <span>JavaScript</span>, I have added interactivity to websites, form validation, and event handling. I’ve worked with <span>DOM manipulation</span>, events, <span>classes</span>, and <span>conditional structures</span>. It’s been key for features like modals, animations, and real-time validation in my portfolio."
        },
        vb_net: {
            title: "My VB.NET Skills",
            description: "During my programming training, I worked with <span>VB.NET</span> to build desktop applications in <span>Visual Studio</span>. I learned to design graphical interfaces with <span>Windows Forms</span>, handle <span>events</span> and UI <span>controls</span> like buttons, text boxes, and lists. I applied <span>conditional logic</span>, <span>loop structures</span>, and developed small features such as <span>CRUD operations</span> and <span>data validations</span>."
        },
        // Editores de Código
        eclipse: {
            title: "Eclipse IDE",
            description: "I have basic knowledge of <span>Eclipse IDE</span> for programming."
        },
        visualstudio: {
            title: "Visual Studio",
            description: "I have basic knowledge of <span>Visual Studio</span> for programming."
        },
        visualstudiocode: {
            title: "Visual Studio Code",
            description: "I use <span>Visual Studio Code</span> as my primary development environment. I appreciate its <span>lightweight design</span>, ability to customize with <span>extensions</span>, and support for <span>multiple languages</span>. I also rely on its <span>integrated terminal</span>."
        },
        // Bases de Datos
        mysql: {
            title: "MySQL",
            description: "I have worked with <span>MySQL</span> to manage relational databases—from creating tables and relationships to writing <span>SELECT</span>, <span>JOIN</span>, and <span>aggregate functions</span>. I also used <span>phpMyAdmin</span> for GUI administration and <span>XAMPP</span> as a local environment."
        },
        sqlServer: {
            title: "SQL Server",
            description: "I used <span>SQL Server</span> during my studies to learn <span>enterprise-level database management</span>. I worked with <span>Microsoft SQL Server Management Studio (SSMS)</span>, complex queries, and developed <span>stored procedures</span> and <span>views</span>."
        },
        // Herramientas
        xampp: {
            title: "XAMPP",
            description: "I used <span>XAMPP</span> as a local development stack for PHP and MySQL web projects. It allowed me to simulate an <span>Apache</span> server and manage databases via <span>phpMyAdmin</span>, streamlining dynamic application development and testing."
        },
        postman: {
            title: "Postman",
            description: "I used <span>Postman</span> to test APIs by sending <span>GET</span>, <span>POST</span>, <span>PUT</span>, and <span>DELETE</span> requests. It helped me visualize responses, test endpoints, and better understand how data exchange works in web applications."
        }
    },
    // Lenguajes de Programación Español
    es :{
        java: {
            title: "Java",
            description: "El primer lenguaje que aprendí fue <span>Java</span> a través de mi formación académica. Tengo conocimientos de <span>programación orientada a objetos</span>, utilizando el editor de código <span>Eclipse IDE</span>. También he trabajado con <span>estructuras de control</span>, el clásico <span>modelo CRUD (Crear, Leer, Actualizar, Eliminar), clases, herencia y gestión de excepciones.</span>",
        },
        python: {
            title: "Python",
            description: "Con <span>Python</span> he desarrollado scripts de automatización y pequeños proyectos personales. Estoy familiarizado con su <span>sintaxis simple y clara</span>, el uso de la <span>biblioteca estándar</span> y conceptos básicos de programación funcional. También lo he utilizado en proyectos con interfaces gráficas usando <span>Tkinter</span>.",
        },
        html: {
            title: "HTML",
            description: "Utilizo <span>HTML</span> como la base del marcado para el desarrollo web. Conozco la estructura de etiquetas, elementos semánticos, formularios, tablas, listas y enlaces. Lo he implementado en mi portafolio y otros proyectos web.",
        },
        css: {
            title: "CSS",
            description: "He utilizado <span>CSS</span> para diseñar interfaces atractivas y responsivas. Domino <span>Flexbox</span>, <span>Grid</span>, animaciones, <span>media queries</span>, pseudo-clases y variables CSS. Me enfoco en una estética moderna, esquemas de color personalizados y organización limpia.",
        },
        javascript: {
            title: "JavaScript",
            description: "Con <span>JavaScript</span> he añadido interactividad a sitios web, validación de formularios y manejo de eventos. He trabajado con <span>manipulación del DOM</span>, eventos, <span>clases</span> y <span>estructuras condicionales</span>. Ha sido clave para funciones como modales, animaciones y validaciones en tiempo real en mi portafolio.",
        },
        vb_net: {
            title: "Mis habilidades en VB.NET",
            description: "Durante mi formación en programación, trabajé con <span>VB.NET</span> para crear aplicaciones de escritorio en <span>Visual Studio</span>. Aprendí a diseñar interfaces gráficas con <span>Windows Forms</span>, manejar <span>eventos</span> y controles de UI como botones, cuadros de texto y listas. Apliqué <span>lógica condicional</span>, <span>estructuras de repetición</span> y desarrollé pequeñas funciones como <span>operaciones CRUD</span> y <span>validaciones de datos</span>.",
        },
        // Editores de Código
        eclipse: {
            title: "Eclipse IDE",
            description: "Tengo conocimientos básicos de <span>Eclipse IDE</span> para programación.",
        },
        visualstudio: {
            title: "Visual Studio",
            description: "Tengo conocimientos básicos de <span>Visual Studio</span> para programación.",
        },
        visualstudiocode: {
            title: "Visual Studio Code",
            description: "Utilizo <span>Visual Studio Code</span> como mi entorno principal de desarrollo. Valoro su <span>diseño liviano</span>, la capacidad de personalizarlo con <span>extensiones</span> y su soporte para <span>múltiples lenguajes</span>. También uso su <span>terminal integrado</span>.",
        },
        // Bases de Datos
        mysql: {
            title: "MySQL",
            description: "He trabajado con <span>MySQL</span> para gestionar bases de datos relacionales, desde crear tablas y relaciones hasta escribir sentencias <span>SELECT</span>, <span>JOIN</span> y funciones <span>agregadas</span>. También usé <span>phpMyAdmin</span> para administración gráfica y <span>XAMPP</span> como entorno local.",
        },
        sqlServer: {
            title: "SQL Server",
            description: "Utilicé <span>SQL Server</span> durante mis estudios para aprender la gestión de bases de datos a nivel empresarial. Trabajé con <span>Microsoft SQL Server Management Studio (SSMS)</span>, consultas complejas y desarrollé <span>procedimientos almacenados</span> y <span>vistas</span>.",
        },
        // Herramientas
        xampp: {
            title: "XAMPP",
            description: "Usé <span>XAMPP</span> como entorno local para desarrollo web con PHP y MySQL. Me permitió simular un servidor <span>Apache</span> y administrar bases de datos mediante <span>phpMyAdmin</span>, facilitando el desarrollo y prueba de aplicaciones dinámicas.",
        },
        postman: {
            title: "Postman",
            description: "Usé <span>Postman</span> para probar APIs enviando solicitudes <span>GET</span>, <span>POST</span>, <span>PUT</span> y <span>DELETE</span>. Me ayudó a visualizar respuestas, probar endpoints y comprender mejor el intercambio de datos en aplicaciones web.",
        },
    }
};
OpenModalSkills.forEach(item => {
    item.addEventListener('click', (e) => {
        e.preventDefault();
        const key = item.classList[1];
        const data = ContentSkills[currentLang][key];
        if (data) {
            modalTitleSkills.textContent = data.title;
            modalDescripSkills.innerHTML = data.description;
            ModalSkills.classList.add('modal-skills--show');
            setTimeout(() => {
                window.scrollTo({
                    top: window.scrollY + 1,
                    behavior: "smooth"
                });
            }, 100);
        }
    });
});
CloseSkills.addEventListener('click', (e) => {
    e.preventDefault();
    ModalSkills.classList.remove('modal-skills--show');
    setTimeout(() => {
        window.scrollTo({
            top: window.scrollY - 1,
            behavior: "smooth"
        });
    }, 100);
});
// --Cierra Modal al pulsar Fuera del contenedor
ModalSkills.addEventListener('click', (e) => {
    if (!e.target.closest('.modal-container-skills')) {
        ModalSkills.classList.remove('modal-skills--show');
        setTimeout(() => {
            window.scrollTo({
                top: window.scrollY - 1,
                behavior: "smooth"
            });
        }, 100);
    }
});
// --Cierra Modal al pulsar en el Encabezado
header.addEventListener('click', () => {
    ModalSkills.classList.remove('modal-skills--show');
});
// --Cierra Modal al pulsar en un link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        ModalSkills.classList.remove('modal-skills--show');
    });
});


// -------------------------------------------------------------Portfolio-------------------------------------------------------------
const carousels = document.querySelectorAll('.carousel-container');

carousels.forEach(carousel => {
    const images = carousel.querySelectorAll('img');
    let currentIndex = 0;
    
    // Función para navegar entre imágenes
    function navigate(direction) {
        const totalImages = images.length;
        currentIndex = (currentIndex + direction + totalImages) % totalImages;
        
        // Calcular el desplazamiento
        const offset = -currentIndex * 100;
        carousel.style.transform = `translateX(${offset}%)`;
    }
    
    // Eventos para los botones de navegación
    const prevBtn = carousel.parentElement.querySelector('.prev');
    const nextBtn = carousel.parentElement.querySelector('.next');
    
    prevBtn.addEventListener('click', () => navigate(-1));
    nextBtn.addEventListener('click', () => navigate(1));
    
    // Autoplay opcional (descomenta para activar)
    //setInterval(() => navigate(1), 3000);
});


// -------------------------------------------------------------FORMULARIO-------------------------------------------------------------
// VARIABLES GLOBALES (Se actualizan en tiempo real)
let fullName = "";
let phone = "";
let email = "";
let message = "";
let fechaHora = new Date().toLocaleString();
// FUNCIÓN PARA ACTUALIZAR LAS VARIABLES GLOBALES
function updateFormValues() {
    fullName = nameInput.value.trim();
    phone = phoneInput.value.trim();
    email = emailInput.value.trim();
    message = messageInput.value.trim();
}
// FUNCIÓN QUE VERIFICA SI EL FORMULARIO ESTÁ COMPLETO
function formComplete() {
    // Validar si los campos esenciales están completos
    if (fullName === "" || message === "") {
        return false;
    }
    // Validar si al menos uno de los dos (email o phone) es válido
    if (phone === "" && email === "") {
        return false;
    }
    return true;
}
// FUNCIÓN PARA VALIDAR EMAIL
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}
// FUNCIÓN PARA VALIDAR TELÉFONO
function isValidPhone(phone) {
    const phoneRegex = /^[0-9]{7,15}$/; // Acepta entre 7 y 15 dígitos numéricos
    return phoneRegex.test(phone);
}
// FUNCIÓN PARA VALIDAR EL FORMULARIO
function validateForm() {
    let isValid = true;
    // VALIDAR EMAIL
    if (email !== "" && !isValidEmail(email)) {
        emailInput.style.border = "2px solid red";
        isValid = false;
    } else {
        emailInput.style.border = "none";
    }
    // VALIDAR TELÉFONO
    if (phone !== "" && !isValidPhone(phone)) {
        phoneInput.style.border = "2px solid red";
        isValid = false;
    } else {
        phoneInput.style.border = "none";
    }
    if (fullName !== "" && message !== "" && (phone !== "" && isValidPhone(phone)|| (email !== "" && isValidEmail(email)))) {
        sendBtn.classList.remove("disabled");
        sendBtn.classList.add("enabled");
        sendBtn.removeAttribute("disabled");
    } else {
        sendBtn.classList.remove("enabled");
        sendBtn.classList.add("disabled");
        sendBtn.setAttribute("disabled", "true");
    }
}
// EVENTOS PARA VALIDAR EN TIEMPO REAL
nameInput.addEventListener("input", () => {
    updateFormValues();
    validateForm();
});
phoneInput.addEventListener("input", () => {
    updateFormValues();
    validateForm();
});
emailInput.addEventListener("input", () => {
    updateFormValues();
    validateForm();
});
messageInput.addEventListener("input", () => {
    updateFormValues();
    validateForm();
});
// ABRIR EL MODAL CAPTCHA
sendBtn.addEventListener("click", (e) => {
    e.preventDefault();
    if (formComplete()) {
        ModalCaptcha.classList.add("modal-captcha--show");
        setTimeout(() => {
            window.scrollTo({
                top: window.scrollY + 1,
                behavior: "smooth"
            });
        }, 100);
    } else {
        warningMessage.textContent = "⚠️Please complete all fields before continuing.";
    }
});
// COMPLETAR EL CAPTCHA
// FUNCIÓN QUE SE EJECUTA CUANDO EL USUARIO COMPLETA EL CAPTCHA
function enableSubmitButton() {
    captchaSubmitBtn.classList.remove("disabled");
    captchaSubmitBtn.classList.add("enabled");
    captchaSubmitBtn.removeAttribute("disabled");
}
// FUNCIÓN PARA DESHABILITAR EL BOTÓN (OPCIONAL: SI EL CAPTCHA SE RESETEA)
function disableSubmitButton() {
    captchaSubmitBtn.classList.remove("enabled");
    captchaSubmitBtn.classList.add("disabled");
    captchaSubmitBtn.setAttribute("disabled", "true");
}
function OpenModalCheck() {
    modalCheck.classList.add("modal-check--show");
    setTimeout(() => {
        window.scrollTo({
            top: window.scrollY + 1,
            behavior: "smooth"
        });
    }, 100);
};
// FUNCIÓN PARA MOSTRAR EL MODAL-CHECK CON MENSAJE DE ESTADO
function showModalCheck(message, success) {
    modalMessage.textContent = message;
    
    // Cambiar el icono dependiendo del resultado
    modalIcon.innerHTML = success
        ? "<i class='bx bx-message-alt-check ico1'></i>"  // Éxito
        : "<i class='bx bx-error ico2'></i>"; // Error
    
    OpenModalCheck() // Abrir el modal-check
}
function sendEmail() {
    // Verificar que el Captcha esté completado antes de enviar
    if (!grecaptcha.getResponse()) {
        showModalCheck("Falta completar el Captcha", false);
        return;
    }
    // Si el usuario no ingresó un número de teléfono o email, ponemos un valor predeterminado
    const phoneToSend = phone === "" ? "No proporcionado" : phone;
    const emailToSend = email === "" ? "No proporcionado" : email;
    const nameToSend = fullName === "" ? "No proporcionado" : fullName;
    const msgToSend = message === "" ? "No proporcionado" : message;
    const fechaHoraSend = fechaHora === "" ? "No proporcionado" : fechaHora;
    // Configuración de EmailJS con tus claves
    const serviceID = "default_service";
    const templateID = "template_xzenf3i";
    emailjs.send(serviceID, templateID, {
        name: nameToSend,
        phone: phoneToSend,
        email: emailToSend,
        message: msgToSend,
        time: fechaHoraSend
    }, "YfnvmcHJFwf7bO4xB")
    .then((response) => {  
        console.log("Email enviado con éxito:", response);
        showModalCheck("Mensaje enviado con éxito", true);
        // Resetear formulario y captcha
        document.getElementById("contact-form").reset();
        grecaptcha.reset();
        // Deshabilitar los botones de envío nuevamente
        disableSubmitButton();
        sendBtn.classList.remove("enabled");
        sendBtn.classList.add("disabled");
        sendBtn.setAttribute("disabled", "true");
    })
    .catch((error) => {  // 🔥 Agregar `(error)` aquí para capturarlo
        showModalCheck("Error al enviar los datos - intente nueva mente o por otro medio", false);
    });
}
// EVENTO PARA ENVIAR EL FORMULARIO AL HACER CLIC EN EL BOTÓN DEL CAPTCHA
captchaSubmitBtn.addEventListener("click", (e) => {
    e.preventDefault();
    // Verificar que el botón realmente esté activado
    if (!captchaSubmitBtn.classList.contains("disabled")) {
        sendEmail(); // Intentar enviar el email
        ModalCaptcha.classList.remove("modal-captcha--show"); // Cerrar modal captcha
    }
    OpenModalCheck()
});
// EVENTO PARA CERRAR EL MODAL-CHECK
closeModalCheck.addEventListener("click", (e) => {
    e.preventDefault();
    modalCheck.classList.remove("modal-check--show");
});