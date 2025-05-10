document.addEventListener("DOMContentLoaded", () => {
  // Mobile Menu Toggle
  const mobileMenuToggle = document.querySelector(".mobile-menu-toggle")
  const mobileNav = document.querySelector(".mobile-nav")

  if (mobileMenuToggle && mobileNav) {
    mobileMenuToggle.addEventListener("click", () => {
      mobileNav.classList.toggle("active")
    })
  }

  // Napak Tilas Slider
  const napakSlider = document.getElementById("napak-slider")
  const napakPrev = document.getElementById("napak-prev")
  const napakNext = document.getElementById("napak-next")

  if (napakSlider && napakPrev && napakNext) {
    let napakPosition = 0
    let napakSlideWidth = 0
    let napakVisibleSlides = 4 // Default for desktop

    // Function to update the number of visible slides based on screen width
    function updateVisibleSlides() {
      if (window.innerWidth <= 576) {
        napakVisibleSlides = 1
      } else if (window.innerWidth <= 768) {
        napakVisibleSlides = 1
      } else if (window.innerWidth <= 1024) {
        napakVisibleSlides = 3
      } else {
        napakVisibleSlides = 4
      }

      // Update slide width
      const napakSlides = napakSlider.querySelectorAll(".slide")
      if (napakSlides.length > 0) {
        const containerWidth = napakSlider.parentElement.offsetWidth
        napakSlideWidth = containerWidth / napakVisibleSlides

        // Reset position when screen size changes
        napakPosition = 0
        napakSlider.style.transform = `translateX(0)`
      }
    }

    // Initialize
    updateVisibleSlides()
    window.addEventListener("resize", updateVisibleSlides)

    // Previous button
    napakPrev.addEventListener("click", () => {
      const napakSlides = napakSlider.querySelectorAll(".slide")
      if (napakPosition > 0) {
        napakPosition -= napakVisibleSlides
        if (napakPosition < 0) napakPosition = 0
        napakSlider.style.transform = `translateX(-${napakPosition * (100 / napakVisibleSlides)}%)`
      }
    })

    // Next button
    napakNext.addEventListener("click", () => {
      const napakSlides = napakSlider.querySelectorAll(".slide")
      const maxPosition = napakSlides.length - napakVisibleSlides
      if (napakPosition < maxPosition) {
        napakPosition += napakVisibleSlides
        if (napakPosition > maxPosition) napakPosition = maxPosition
        napakSlider.style.transform = `translateX(-${napakPosition * (100 / napakVisibleSlides)}%)`
      }
    })
  }

  // Peninggalan Slider
  const peninggalanSlider = document.getElementById("peninggalan-slider")
  const peninggalanPrev = document.getElementById("peninggalan-prev")
  const peninggalanNext = document.getElementById("peninggalan-next")

  if (peninggalanSlider && peninggalanPrev && peninggalanNext) {
    let peninggalanPosition = 0
    let peninggalanSlideWidth = 0
    let peninggalanVisibleSlides = 3 // Default for desktop

    // Function to update the number of visible slides based on screen width
    function updatePeninggalanVisibleSlides() {
      if (window.innerWidth <= 768) {
        peninggalanVisibleSlides = 1
      } else if (window.innerWidth <= 1024) {
        peninggalanVisibleSlides = 2
      } else {
        peninggalanVisibleSlides = 3
      }

      // Update slide width
      const peninggalanSlides = peninggalanSlider.querySelectorAll(".slide")
      if (peninggalanSlides.length > 0) {
        const containerWidth = peninggalanSlider.parentElement.offsetWidth
        peninggalanSlideWidth = containerWidth / peninggalanVisibleSlides

        // Reset position when screen size changes
        peninggalanPosition = 0
        peninggalanSlider.style.transform = `translateX(0)`
      }
    }

    // Initialize
    updatePeninggalanVisibleSlides()
    window.addEventListener("resize", updatePeninggalanVisibleSlides)

    // Previous button
    peninggalanPrev.addEventListener("click", () => {
      const peninggalanSlides = peninggalanSlider.querySelectorAll(".slide")
      if (peninggalanPosition > 0) {
        peninggalanPosition -= peninggalanVisibleSlides
        if (peninggalanPosition < 0) peninggalanPosition = 0
        peninggalanSlider.style.transform = `translateX(-${peninggalanPosition * (100 / peninggalanVisibleSlides)}%)`
      }
    })

    // Next button
    peninggalanNext.addEventListener("click", () => {
      const peninggalanSlides = peninggalanSlider.querySelectorAll(".slide")
      const maxPosition = peninggalanSlides.length - peninggalanVisibleSlides
      if (peninggalanPosition < maxPosition) {
        peninggalanPosition += peninggalanVisibleSlides
        if (peninggalanPosition > maxPosition) peninggalanPosition = maxPosition
        peninggalanSlider.style.transform = `translateX(-${peninggalanPosition * (100 / peninggalanVisibleSlides)}%)`
      }
    })
  }
})
