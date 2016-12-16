window.addEventListener('scroll', changeOpacityMenu);

function changeOpacityMenu() {
    if (window.pageYOffset >= 242) {
        document.getElementById('navbar-id').style.opacity = '1';
    } else {
        document.getElementById('navbar-id').style.opacity = '0.5';
    }
}

var navbarLink = document.getElementsByClassName('navbar-link');

for (var i = 0; i < navbarLink.length; i++) {
    navbarLink[i].addEventListener('click', function(event) {
            deleteActiveClass();
            this.classList.add('active');
        })
    };

function deleteActiveClass(){
  document.getElementsByClassName('navbar-link active')[0].classList.remove('active');
}
