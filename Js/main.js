/*          === SHOW MENU ===           */
const navMenu = document.getElementById('nav-menu'),
  navToggle = document.getElementById('nav-toggle'),
  navClose = document.getElementById('nav-close');

  if (navToggle) {
    navToggle.addEventListener('click', () => {
      navMenu.classList.add('show-menu');
    })
  }

  if (navClose) {
    navClose.addEventListener('click', () => {
      navMenu.classList.remove('show-menu');
    })
  }

/*          === REMOVE MENU MOBILE===           */

const navLink = document.querySelectorAll('.nav__link');

const linkAction = () => {
  const navMenu = document.getElementById('nav-menu');

  navMenu.classList.remove('show-menu');
}
navLink.forEach(n => n.addEventListener('click', linkAction));

/*          ===SWIPER===           */
const swipeproj = 2000;

let swiperProjects = new Swiper(".swiper-projects", {
  loop: true,
  grabCursor: true,
  direction: 'horizontal',
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
  },
  autoplay: {
    delay: swipeproj, 
    disableOnInteraction: false, 
  },
});


function stopAutoswipeproj() {
  swiperProjects.autoplay.stop(); // stop the autoswipe
}

function startAutoswipeproj() {
  swiperProjects.autoplay.start(); // start the autoswipe
}

const projContainer = document.querySelector(".swiper-projects");
projContainer.addEventListener("mouseenter", stopAutoswipeproj);
projContainer.addEventListener("mouseleave", startAutoswipeproj);


// ===============================================//
const swipeInterval = 2500;

  let swiperTestimonial = new Swiper(".testimonial__container", {
    grapCursor: true,
      loop: true,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      autoplay: {
    delay: swipeInterval, 
    disableOnInteraction: false, 
  },
    });
    
  function stopAutoswipe() {
      swiperTestimonial.autoplay.stop(); // stop the autoswipe
}


  function startAutoswipe() {
   swiperTestimonial.autoplay.start(); // start the autoswipe
}


  const swiperContainer = document.querySelector(".testimonial__container");
  swiperContainer.addEventListener("mouseenter", stopAutoswipe);
  swiperContainer.addEventListener("mouseleave", startAutoswipe);

  /*          ===MAIL===           */

  const contactForm = document.getElementById('contact-form'),
        contactName = document.getElementById('contact-name'),
        contactEmail = document.getElementById('contact-email'),
        contactProject = document.getElementById('contact-project'),
        contactMessage = document.getElementById('contact-message')

        const sendEmail = (e) => {
          e.preventDefault();

          if (contactName.value === '' || contactEmail.value === '' || contactProject.value === '') {

            contactMessage.classList.remove('color-blue')
            contactMessage.classList.add('color-red')

            contactMessage.textContent = "You Are Missing Something 😅"
          } else {
            emailjs.sendForm('service_xocj1kq','template_wh5bd8i','#contact-form', '5Shs-dwC8v4no8pOo')
            .then(() => {
              contactMessage.classList.add('color-blue')
              contactMessage.textContent = 'Message Sent ✅'
              setTimeout(() => {
                contactMessage.textContent = ''
              }, 3000)
            }, (error) => {
              alert('OOPS! SOMETHING WENT WRONG...', error)
            })
            setTimeout(() => {
              contactName.value = ''
              contactEmail.value = ''
              contactProject.value = ''
            }, 3000)
          }
        }
        contactForm.addEventListener('submit', sendEmail)

        /*          ===SKROLL ACTIVE LINK===           */

        const sections = document.querySelectorAll('section[id]')

        const  scrollActive = () => {
          const scrollY = window.pageYOffset
          sections.forEach(current => {
            const sectionHeight = current.offsetHeight,
            sectionTop = current.offsetTop - 58,
            sectionId = current.getAttribute('id'),
            sectionClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')
            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
              sectionClass.classList.add('active-link')
            } else {
              sectionClass.classList.remove('active-link')
            }
        })
      }
      window.addEventListener('scroll', scrollActive)

      /*          ===SHOW SCROLL BUTTON===           */
      const scrollUp = () => {
        const scrollUp = document.getElementById('scroll-up')

        this.scrollY >= 350 ? scrollUp.classList.add('show-scroll') : scrollUp.classList.remove('show-scroll')
      }
      window.addEventListener('scroll', scrollUp)

      /*          ===DARK MODE THEME===           */

      const themeButton = document.getElementById('theme-button')
      const darkTheme = 'dark-theme'
      const iconTheme = 'ri-sun-line'

      const selectedTheme = localStorage.getItem('selected-theme')
      const selectedIcon = localStorage.getItem('selected-icon')

      const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark': 'light'
      const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'ri-moon-line' : 'ri-sun-line'

      if (selectedTheme) {
        document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
        themeButton.classList[selectedIcon === "ri-moon-line" ? 'add' : 'remove'](iconTheme)
      }

      themeButton.addEventListener('click', () => {
        document.body.classList.toggle(darkTheme)
        themeButton.classList.toggle(iconTheme)

        localStorage.setItem('selected-theme', getCurrentTheme())
        localStorage.setItem('selected-icon', getCurrentIcon())
      })

      /*          ===CHANGE BACKGROUND HEADER===           */

      function scrollHeader() {
    const headers = document.getElementById('header');
    window.scrollY >= 50 ? headers.classList.add('bg-header') :
    headers.classList.remove('bg-header');
}
window.addEventListener('scroll', scrollHeader);



      /*          ===WINDOWS SCROLL REVEAL===           */

      let sr = ScrollReveal({
        origin: 'top',
        distance: '60px',
        duration: 2500,
        delay: 400,
      })
      sr.reveal('.home__data, .projects__container, testimonial__container, .footer__container')

      sr.reveal('.home__social', {delay: 500, origin: 'top', interval: 100})
      sr.reveal('.home__blob', {delay: 1000, origin: 'top', interval: 100})
      sr.reveal('.home__title', {delay: 1500, origin: 'top', interval: 100})


      sr.reveal('.home__info.one div:nth-child(1)', {delay: 1600, origin: 'left', interval: 100})
      sr.reveal('.home__info.one div:nth-child(2)', {delay: 1700, origin: 'left', interval: 100})
      sr.reveal('.home__info.one div:nth-child(3)', {delay: 1800, origin: 'left', interval: 100})
      sr.reveal('.home__info.two div:nth-child(1)', {delay: 1600, origin: 'right', interval: 100})
      sr.reveal('.home__info.two div:nth-child(2)', {delay: 1700, origin: 'right', interval: 100})
      sr.reveal('.home__info.two div:nth-child(3)', {delay: 1800, origin: 'right', interval: 100})


      sr.reveal('.skills__content:nth-child(1)', {origin: 'left',})
      sr.reveal('.skills__content:nth-child(2)', {origin: 'right',})
      sr.reveal('.qualification__content:nth-child(1)', {origin: 'left',})
      sr.reveal('.qualification__content:nth-child(2)', {origin: 'right',})
      sr.reveal('.services__card:nth-child(1)', {origin: 'left',})
      sr.reveal('.services__card:nth-child(2)', {origin: 'top',})
      sr.reveal('.services__card:nth-child(3)', {origin: 'right',})
      sr.reveal('.testimonial__container', {origin: 'bottom',})
      sr.reveal('.contact__content:nth-child(1)', {origin: 'bottom',})
      sr.reveal('.contact__content:nth-child(2)', {origin: 'top',})
      sr.reveal('.contact__form-div.one', {origin: 'left',delay: 500})
      sr.reveal('.contact__form-div.two', {origin: 'left',delay: 700})
      sr.reveal('.contact__form-div.three', {origin: 'left',delay: 900})
      