document.addEventListener("DOMContentLoaded", () => {
    // Navbar JS
    document.querySelector('.hamburger-icon').addEventListener("click", ()=>{
        document.querySelector('.main-navbar').classList.add('active');
    })
    document.querySelector('.main-navbar-cross').addEventListener("click", ()=>{
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
          else{
            element.classList.remove('active');
            var nextSibling = element.nextElementSibling;
            if (nextSibling) {
                nextSibling.classList.remove('active');
            }
          }
        });
    });

  });
  