
let password_form = document.getElementById('inlog_password_form'),
    show_password = document.getElementById('show_password'),
    inlogbtn = document.getElementById('inlogbtn'),
    inlogForm = document.getElementById('inlog_form'),
    registerform = document.getElementById('register_form'),
    close_modal_login = document.getElementsByClassName('close_modal-login'),
    registerFormBtn = document.getElementsByClassName('registerFormButton'),
    t_shirt1 = document.getElementById('btn_t-shirt-1'),
    t_shirt2 = document.getElementById('btn_t-shirt-2'),
    kleding = document.getElementsByClassName('kleren');

if (inlogbtn) {

    show_password.addEventListener('click', function (ev) {
        console.log('clicked');
        if (password_form.type === 'text') {
            password_form.type = 'password';
            show_password.innerHTML = "show password"

        } else {
            password_form.type = 'text';
            show_password.innerHTML = "hide password";
        }
    });

    inlogbtn.addEventListener('click', function (e) {
        inlogForm.style.display = 'block';

    });

    for (let i = 0; i < registerFormBtn.length; i++) {
        registerFormBtn[i].addEventListener('click', function (e) {
            inlogForm.style.display = 'none';
            registerform.style.display = 'block';
        })
    }
    for(let i = 0 ; i < close_modal_login.length; i++){
        close_modal_login[i].addEventListener('click',function (e) {
            inlogForm.style.display = 'none';
            registerform.style.display = 'none';
        })
    }
}


if (t_shirt1){
    t_shirt1.addEventListener('click', function (e) {
        getallT_shirt_gone();
        kleding[0].style.display = 'block';
    });
    t_shirt2.addEventListener('click', function (e) {
        getallT_shirt_gone();
        kleding[1].style.display = 'block';
        kleding[1].src = t_shirt2.value;
    });
}

function getallT_shirt_gone() {
    for (let i = 0; i < kleding.length; i++){
        kleding[i].style.display = 'none'
    }

}


const loadImage = async () => {
    try {
        const xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function () {
            if (this.readyState === 4 && this.status === 200) {
                console.log(this);
                showDress(this.responseText)
            }
        };

        xmlhttp.open("POST", "model/controller.php", true);
        xmlhttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
        xmlhttp.send('fotos=1');

    } catch (err) {
        console.error(err);
    }
};

const showDress = (clothes) => {

    clothes = JSON.parse(clothes);
    const colours = ['#c629d9', "#165bd6", "#dd1512"];
    for (let i = 8, n = 0; i < 15; i++, n++) {
        let vak = document.getElementsByClassName('vakje' + i);

        let colourNumber = Math.floor(Math.random()*3);

        vak[0].style.background =   "url('media/kleren/"+ clothes[i]['url'] +"') center center " + colours[colourNumber];
        vak[0].style.backgroundSize = 'cover'


    }
};
if (document.getElementsByClassName('vakje8')[0]){
    loadImage();
}

