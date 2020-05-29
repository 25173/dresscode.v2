let password_form = document.getElementById('inlog_password_form'),
    show_password = document.getElementById('show_password'),
    inlogbtn = document.getElementById('inlogbtn'),
    inlogForm = document.getElementById('inlog_form'),
    registerform = document.getElementById('register_form'),
    close_modal_login = document.getElementsByClassName('close_modal-login'),
    registerFormBtn = document.getElementsByClassName('registerFormButton'),
    t_shirt1 = document.getElementsByClassName('btn_t-shirt-1'),
    t_shirt2 = document.getElementsByClassName('btn_t-shirt-2'),
    t_shirt3 = document.getElementsByClassName('btn_t-shirt-3'),
    kleding = document.getElementsByClassName('kleren'),
    avatar_save_btn = document.getElementById('avatar_save-btn'),
    choose_avatar_btn = document.getElementsByClassName('avatar_btn'),
    avater_img = document.getElementById('avatar');

// inlog venster weergeven/verwijderen
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
    for (let i = 0; i < close_modal_login.length; i++) {
        close_modal_login[i].addEventListener('click', function (e) {
            inlogForm.style.display = 'none';
            registerform.style.display = 'none';
        })
    }
}

// kiezen van je avatar
if (choose_avatar_btn) {

    for (let i = 0; i < choose_avatar_btn.length; i++) {
        choose_avatar_btn[i].addEventListener('click', function () {

            let avatar;
            switch (this.id) {
                case 'merel-Btn':
                    avatar = 2;
                    avater_img.src = '../media/avatars/nudie-merel2.png';
                    avater_img.className = '';
                    avater_img.classList.add("avatar-merel");
                    break;
                case 'glorie_btn':
                    avatar = 3;
                    avater_img.src = '../media/avatars/nudie-glorie3.png';
                    avater_img.className = '';
                    break;
                default:
                    avatar = 1;
                    avater_img.src = '../media/avatars/nudie-julia1.png';
                    avater_img.className = '';
                    avater_img.classList.add("avatar-julia");
            }
            const xmlhttp = new XMLHttpRequest();
            xmlhttp.onreadystatechange = function () {
                if (this.readyState === 4 && this.status === 200) {

                    modaal.sluiten();
                }
            };

            xmlhttp.open("POST", "../model/controller.php", true);
            xmlhttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
            xmlhttp.send('changeAvatar=1&avatarNumber=' + avatar);

        })
    }

}

// het aankleden van de avatar
if (t_shirt1[0]) {

    // voor jurken
    for (let i = 0; i < t_shirt1.length; i++) {
        t_shirt1[i].addEventListener('click', function (e) {
            console.log('clicked');
            getallT_shirt_gone();
            kleding[0].style.display = 'block';
            kleding[0].src = t_shirt1[i].value;
        });
    }
    // voor t-shirt
    for (let i = 0; i < t_shirt2.length; i++) {
        t_shirt2[i].addEventListener('click', function (e) {
            getallT_shirt_gone();
            console.log('clicked');
            kleding[1].style.display = 'block';
            kleding[1].src = t_shirt2[i].value;
            kleding[2].style.display = 'block';
        });
    }
    // voor de jurk
    for (let i = 0; i < t_shirt3.length; i++) {
        t_shirt3[i].addEventListener('click', function (e) {
            getallT_shirt_gone();
            console.log('clicked');
            kleding[3].style.display = 'block';
            kleding[3].src = t_shirt3[i].value;
        });
    }
}

// het opslaan van het
if (avatar_save_btn) {
    avatar_save_btn.onclick = function (e) {
        document.getElementById("avatar_section").scrollTo(0, 0);
        html2canvas(document.getElementById("avatar_section")).then(function (canvas) {


            // Create an AJAX object
            var ajax = new XMLHttpRequest();

            // Setting method, server file name, and asynchronous
            ajax.open("POST", "../model/controller.php", true);

            // Setting headers for POST method
            ajax.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

            // Sending image data to server
            ajax.send("saveKleding=true&soort=avatar&picture=" + canvas.toDataURL("image/png;base64", 1));

            // Receiving response from server
            // This function will be called multiple times
            ajax.onreadystatechange = function () {

                // Check when the requested is completed
                if (this.readyState === 4 && this.status === 200) {
                    if (this.response === '1') {
                        window.location.href = "../start/gallery.php";
                    }
                }
            };
            // // Get the image data as JPEG and 0.9 quality (0.0 - 1.0)
            // console.log(canvas.toDataURL("image/jpeg", 0.9));
        });
    }
}

// het uitkleden van de avatar als je iets laat aantrekken
function getallT_shirt_gone() {
    for (let i = 0; i < kleding.length; i++) {
        kleding[i].style.display = 'none'
    }

}


// afbeeldingen weergeven bij de home pagina
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

        let colourNumber = Math.floor(Math.random() * 3);

        vak[0].style.background = "url('media/kleren/" + clothes[n]['url'] + "') center center " + colours[colourNumber];
        vak[0].style.backgroundSize = 'cover'


    }
};

if (document.getElementsByClassName('vakje8')[0]) {
    loadImage();
}


// code van gianni

var grzag = document.createElement('div');
document.body.appendChild(grzag);
var sluitknop = document.createElement('span');
sluitknop.innerHTML = '&Cross;';
sluitknop.className = 'sluitknop';

var modaal = (function () {
    var modaalVenster = document.createElement('div');
    modaalVenster.className = 'modaal-venster';
    modaalVenster.addEventListener('click', function (e) {
        e.stopPropagation();
    });
    var modaalInhoud = document.createElement('div');
    modaalInhoud.className = 'modaal-inhoud';

    return {
        centreren: function () {
            var boven = Math.max((grzag.offsetHeight - modaalVenster.offsetHeight) / 2, 0);
            var links = Math.max((grzag.offsetWidth - modaalVenster.offsetWidth) / 2, 0);
            modaalVenster.style.top = boven + 'px';
            modaalVenster.style.left = links + 'px';
        },
        open: function (parameter) {
            modaalInhoud.appendChild(parameter);
            modaalVenster.appendChild(modaalInhoud);
            modaalVenster.appendChild(sluitknop);
            grzag.className = 'grijze-achtergrond';
            grzag.appendChild(modaalVenster);
            modaal.centreren();
            window.addEventListener('resize', modaal.centreren, true);
        },
        sluiten: function () {
            modaalVenster.innerHTML = '';
            grzag.removeChild(modaalVenster);
            grzag.className = '';
        }
    }
}());

grzag.addEventListener('click', modaal.sluiten);
sluitknop.addEventListener('click', modaal.sluiten);


var inhoud1 = document.getElementById('inhoud1');

var knop1 = document.getElementById('k1');


if (inhoud1) {
    inhoud1.parentNode.removeChild(inhoud1);
}
if (knop1) {
    knop1.addEventListener('click', function () {
        modaal.open(inhoud1);
    });
}

