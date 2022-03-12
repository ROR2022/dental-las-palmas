var inpunts = document.getElementsByClassName('formulario__input');
for (var i =0; i< inpunts.length; i++){
    inpunts[i].addEventListener('keyup', function() {
        if (this.value.length>=1){
            this.nextElementSibling.classList.add('fijar');
        } else {
            this.nextElementSibling.classList.remove('fijar');
        }
    });
}

function isMobile() {
    if (sessionStorage.desktop)
        return false;
    else if (localStorage.mobile)
        return true;
    var mobile = ['iphone', 'ipad', 'android', 'blackberry', 'nokia', 'opera mini', 'windows mobile', 'windows phone', 'iemobile'];
    for (var i in mobile)
        if (navigator.userAgent.toLowerCase().indexOf(mobile[i].toLowerCase()) > 0) return true;
    return false;
}

const formulario = document.querySelector('.formulario');
const buttonSubmit = document.querySelector('formulario__submit');
const urlDesktop = 'https://web.whatsapp.com/';
const urlMobile = 'whatsapp://';
const telefono = '5217331069098';

formulario.addEventListener('submit', (event) => {
    event.preventDefault()
    // buttonSubmit.innerHTML = '<i class="fas fa-circle-notch fa-spin"></i>'
    // buttonSubmit.disabled = true
    setTimeout(() => {
        let nombre = document.querySelector('#nombre').value
        let telefono2 = document.querySelector('#telefono').value
        let fecha = document.querySelector('#fecha').value
        let email = document.querySelector('#correo').value
        let mensaje = 'send?phone=' + telefono + '&text=Hola soy:%0A' + nombre + '%0AMi Telefono es:%0A' + telefono2 + '%0Ami correo electrónico es:%0A' + email + '%0Ame gustaria agendar cita:%0A' + fecha + ''
        if(isMobile()) {
            window.open(urlMobile + mensaje, '_blank')
        }else{
            window.open(urlDesktop + mensaje, '_blank')
        }
        // buttonSubmit.innerHTML = '<i class="fab fa-whatsapp"></i> Enviar WhatsApp'
        // buttonSubmit.disabled = false
    }, 500);
});





