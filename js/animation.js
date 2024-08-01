document.addEventListener("DOMContentLoaded", () => {
  // Navbar JS
  document.querySelector('.hamburger-icon').addEventListener("click", () => {
    document.querySelector('.main-navbar').classList.add('active');
  })
  document.querySelector('.main-navbar-cross').addEventListener("click", () => {
    document.querySelector('.main-navbar').classList.remove('active');
  });

  // Navbar Dropdown JS
  document.querySelectorAll('.main-navbar-dropdown-head').forEach((element) => {
    element.addEventListener("click", () => {
      var isActive = element.classList.contains('active');
      document.querySelectorAll('.main-navbar-dropdown-head').forEach((el) => {
        el.classList.remove('active');
        var nextSibling = el.nextElementSibling;
        if (nextSibling) {
          nextSibling.classList.remove('active');
        }
      });
      if (!isActive) {
        element.classList.add('active');
        var nextSibling = element.nextElementSibling;
        if (nextSibling) {
          nextSibling.classList.add('active');
        }
      }
      else {
        element.classList.remove('active');
        var nextSibling = element.nextElementSibling;
        if (nextSibling) {
          nextSibling.classList.remove('active');
        }
      }
    });
  });

  const header = document.querySelector('header');
  function toggleHeaderClass() {
    if (window.scrollY > 100) {
      header.classList.add('active');
    } else {
      header.classList.remove('active');
    }
  }
  // Listen for scroll events and call the toggleHeaderClass function
  window.addEventListener('scroll', toggleHeaderClass);



});

// populate with play btn

document.addEventListener("DOMContentLoaded", () => {

  const videoContainer = document.querySelectorAll('.play-video-container');
  
  videoContainer.forEach((element) => {
    const playBtn = document.createElement('div');
    playBtn.classList.add('play-icon');
    playBtn.innerHTML = '<img src="images/play-slide.svg" alt="">';
    element.appendChild(playBtn);
  });

  // if video is playing then remove play btn

  videoContainer.forEach((element) => {
    const video = element.querySelectorAll('video');
    const playBtn = element.querySelector('.play-icon');
    video.forEach((vdo) => {
      vdo.addEventListener('play', () => {
        playBtn.style.display = "none";
      });
      vdo.addEventListener('pause', () => {
        playBtn.style.display = "block";
      });
    });
  });
});


//opactiy on scroll gsap

document.addEventListener("DOMContentLoaded", () => {
  const elements = document.querySelectorAll('.trans-elem');
  elements.forEach((element) => {
    gsap.to(element, {
      y: 0,
      duration: .5,
      ease:'none',
      scrollTrigger: {
        trigger: element,
        start: 'top 80%',
        end: 'bottom 20%',
        stagger: 0.1,
      },
      onComplete: () => {
       setTimeout(() => {
        element.closest('.trans-op').classList.add('active');
       }, 1000);
      }
    });
  });
});