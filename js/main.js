// Hero Slider
const heroSwiper = new Swiper(".hero-slider", {
  loop: true,
  effect: "fade",
  fadeEffect: { crossFade: true },
  speed: 1000,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".hero-slider .swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".hero-slider .swiper-button-next",
    prevEl: ".hero-slider .swiper-button-prev",
  },
});

// Offers Slider
const offersSwiper = new Swiper(".latest-offers-slider", {
  slidesPerView: 1,
  spaceBetween: 24,
  loop: true,
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".latest-offers-slider .swiper-button-next",
    prevEl: ".latest-offers-slider .swiper-button-prev",
  },
  pagination: {
    el: ".latest-offers-slider .swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    576: { slidesPerView: 2 },
    992: { slidesPerView: 3 },
    1200: { slidesPerView: 4 },
  },
});

// Navbar toggle icons
document.addEventListener("DOMContentLoaded", function () {
  const toggler = document.querySelector(".navbar-toggler");
  const collapse = document.getElementById("main");

  if (toggler && collapse) {
    const openIcon = toggler.querySelector(".open-icon");
    const closeIcon = toggler.querySelector(".close-icon");

    collapse.addEventListener("show.bs.collapse", () => {
      if (openIcon) openIcon.style.display = "none";
      if (closeIcon) closeIcon.style.display = "block";
    });

    collapse.addEventListener("hide.bs.collapse", () => {
      if (openIcon) openIcon.style.display = "block";
      if (closeIcon) closeIcon.style.display = "none";
    });
  }

  // Navbar scroll effect
  const navbar = document.getElementById("mainNav");
  if (navbar) {
    window.addEventListener("scroll", () => {
      navbar.classList.toggle("scrolled", window.scrollY > 50);
    });
  }

  // Set minimum date for booking
  const dateInput = document.getElementById("appointment_date");
  if (dateInput) {
    const today = new Date().toISOString().split("T")[0];
    dateInput.setAttribute("min", today);
  }

  // Booking form handler
  const bookingForm = document.getElementById("bookingForm");
  if (bookingForm) {
    bookingForm.addEventListener("submit", function (e) {
      e.preventDefault();
      const name = document.getElementById("name").value;
      const phone = document.getElementById("phone").value;
      const date = document.getElementById("appointment_date").value;
      const service = document.getElementById("serviceSelect");
      const serviceText = service.options[service.selectedIndex].text;

      const message = `مرحباً، أود حجز موعد:%0Aالاسم: ${name}%0Aالهاتف: ${phone}%0Aالتاريخ: ${date}%0Aالخدمة: ${serviceText}`;
      window.open(`https://wa.me/201012345678?text=${message}`, "_blank");
    });
  }

  // Floating label effect
  document.querySelectorAll(".Booking-appointment input[type='text'], .Booking-appointment input[type='tel']").forEach((input) => {
    const label = input.nextElementSibling;
    if (!label) return;

    const updateLabel = () => {
      label.style.top = input.value || input === document.activeElement ? "0px" : "20px";
    };

    input.addEventListener("focus", updateLabel);
    input.addEventListener("blur", updateLabel);
    input.addEventListener("input", updateLabel);
  });
});

// Scroll to top
const scrollBtn = document.getElementById("scrollTopBtn");

if (scrollBtn) {
  window.addEventListener("scroll", () => {
    scrollBtn.classList.toggle("show", window.scrollY > 400);
  });

  scrollBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

// Close mobile menu on nav link click
document.querySelectorAll(".navbar-nav .nav-link, .navbar .booking").forEach((link) => {
  link.addEventListener("click", () => {
    const collapse = document.getElementById("main");
    if (collapse && collapse.classList.contains("show")) {
      const bsCollapse = bootstrap.Collapse.getInstance(collapse);
      if (bsCollapse) bsCollapse.hide();
    }
  });
});
