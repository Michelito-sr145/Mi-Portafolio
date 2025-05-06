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
// MOVIL 
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
const typed = new Typed('.multiple-text', {
    strings: ['Web Designer.', 'Backend Developer.', 'Frontend Developer.', 'Technology Lover.', 'Full Stack Developer.'],
    typeSpeed: 80,
    backSpeed: 50,
    backDelay: 1200,
    loop: true,
});
// SCROLLS AL ABRIR EL MODAL Y CENTRARLO
window.addEventListener('scroll', () => {
    let scrollTop = window.scrollY;
    if (ModalStudie.classList.contains('modal-studie--show')) {
        ModalStudie.style.top = scrollTop + "px";
    }
    if (ModalCaptcha.classList.contains('modal-captcha--show')) {
        ModalCaptcha.style.top = scrollTop + "px";
    }
    if(ModalSkills.classList.contains('modal-skills--show')) {
        ModalSkills.style.top = scrollTop + "px";
    }
    if(modalCheck.classList.contains('modal-check--show')) {
        modalCheck.style.top = scrollTop + "px";
    }
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
    edu1: {
        title: "Electronics Technician - Alejandro Volta Technical School No. 19",
        description: `During my training, I acquired knowledge in the <span>fundamental principles of electricity</span>, the use and operation of <span>electronic components</span> such as resistors, capacitors and transistors. In addition, I learned about <span>hardware</span>, including the analysis of internal components such as processors, RAM, hard drives and motherboards, as well as the installation and configuration of operating systems. I also developed skills in the construction and analysis of <span>electrical and electronic circuits</span>, computer assembly and maintenance`,
        image: "assets/Studies/MichelSr-TecnicoElectronica.png",
        link: "https://maps.app.goo.gl/ER7Trx7Fz263VjUv6"
    },
    edu2: {
        title: "Technician in Programming - Faculty of Engineering - UNLZ",
        description: `In the Programming Technician, I acquired knowledge in <span>software development</span>, web page creation, database management and <span translate="no">full stack development</span>, combining backend and frontend technologies. I was trained in various <span>programming languages</span>, including <span translate="no">Java, .NET and Python</span>, as well as database management systems such as <span translate="no">Microsoft SQL Server</span><span> and</span><span translate="no"> MySQL</span>. I also learned about the design and structuring of applications, both at a logical and visual level, applying methodologies and good practices in <span>development.<span>`,
        image: "assets/Studies/MichelSr-ProgramacionComputadoras.png",
        link: "https://maps.app.goo.gl/s78B6pdfS3bA7vGVA"
    }
};
OpenModalStudie.forEach(item => {
    item.addEventListener('click', (e) => {
        e.preventDefault();
        const key = item.classList[1];
        if (modalContent[key]) {
            modalTitle.textContent = modalContent[key].title;
            modalDescrip.innerHTML = modalContent[key].description;
            modalImage.href = modalContent[key].image;
            modalLink.href = modalContent[key].link;
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
    // Lenguajes de Programación
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
};
OpenModalSkills.forEach(item => {
    item.addEventListener('click', (e) => {
        e.preventDefault();
        const key = item.classList[1];
        if (ContentSkills[key]) {
            modalTitleSkills.textContent = ContentSkills[key].title;
            modalDescripSkills.innerHTML = ContentSkills[key].description;
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