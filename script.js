document.addEventListener("DOMContentLoaded", () => {
    // Set current year in footer
    document.getElementById("current-year").textContent = new Date().getFullYear()
  
    // Theme toggle functionality
    const themeToggle = document.getElementById("theme-toggle")
    const body = document.body
  
    // Check for saved theme preference or use preferred color scheme
    const savedTheme = localStorage.getItem("theme")
    if (savedTheme) {
      body.classList.toggle("dark-mode", savedTheme === "dark")
    } else {
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches
      body.classList.toggle("dark-mode", prefersDark)
    }
  
    themeToggle.addEventListener("click", () => {
      body.classList.toggle("dark-mode")
      const theme = body.classList.contains("dark-mode") ? "dark" : "light"
      localStorage.setItem("theme", theme)
    })
  
    // Mobile menu functionality
    const mobileMenuBtn = document.querySelector(".mobile-menu-btn")
  
    mobileMenuBtn.addEventListener("click", () => {
      document.body.classList.toggle("mobile-menu-open")
    })
  
    // Close mobile menu when clicking on a link
    const navLinks = document.querySelectorAll(".nav-link")
  
    navLinks.forEach((link) => {
      link.addEventListener("click", () => {
        document.body.classList.remove("mobile-menu-open")
      })
    })
  
    // Back to top button functionality
    const backToTopBtn = document.getElementById("back-to-top")
  
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 300) {
        backToTopBtn.classList.add("visible")
      } else {
        backToTopBtn.classList.remove("visible")
      }
    })
  
    backToTopBtn.addEventListener("click", () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      })
    })
  
    // Contact form functionality
    const contactForm = document.getElementById("contact-form")
    const formSuccess = document.getElementById("form-success")
    const sendAnother = document.getElementById("send-another")
  
    if (contactForm) {
      contactForm.addEventListener("submit", (e) => {
        e.preventDefault()
  
        // Simulate form submission with loading state
        const submitBtn = contactForm.querySelector('button[type="submit"]')
        const originalBtnText = submitBtn.textContent
        submitBtn.textContent = "Sending..."
        submitBtn.disabled = true
  
        // Simulate API call
        setTimeout(() => {
          contactForm.reset()
          formSuccess.classList.add("active")
          submitBtn.textContent = originalBtnText
          submitBtn.disabled = false
        }, 1500)
      })
    }
  
    if (sendAnother) {
      sendAnother.addEventListener("click", () => {
        formSuccess.classList.remove("active")
      })
    }
  
    // Animate elements on scroll
    const animateElements = document.querySelectorAll(".section-title, .about-card, .skills-category, .project-card")
  
    const animateOnScroll = () => {
      animateElements.forEach((element) => {
        const elementPosition = element.getBoundingClientRect().top
        const windowHeight = window.innerHeight
  
        if (elementPosition < windowHeight - 100) {
          element.style.opacity = "1"
          element.style.transform = "translateY(0)"
        }
      })
    }
  
    // Set initial state for animation
    animateElements.forEach((element) => {
      element.style.opacity = "0"
      element.style.transform = "translateY(20px)"
      element.style.transition = "opacity 0.6s ease, transform 0.6s ease"
    })
  
    // Run animation on load and scroll
    window.addEventListener("load", animateOnScroll)
    window.addEventListener("scroll", animateOnScroll)
  
    // Project card hover effects
    const projectCards = document.querySelectorAll(".project-card")
  
    projectCards.forEach((card) => {
      card.addEventListener("mouseenter", function () {
        this.querySelector(".project-image img").style.transform = "scale(1.1)"
      })
  
      card.addEventListener("mouseleave", function () {
        this.querySelector(".project-image img").style.transform = "scale(1)"
      })
    })
  })
  
