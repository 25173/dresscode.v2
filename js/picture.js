const showList = document.getElementById('showList');



const loadImage = async () => {
    try {
        const xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function () {
            if (this.readyState === 4 && this.status === 200) {
                console.log(this);
                showDress(this.responseText)
            }
        };

        xmlhttp.open("POST", "../model/controller.php", true);
        xmlhttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
        xmlhttp.send('fotos=1');

    } catch (err) {
        console.error(err);
    }
};

const showDress = (clothes) => {

    clothes = JSON.parse(clothes);
    let pictures = "";

    for (let i = 0; i < clothes.length; i++) {
        pictures += "<a href='../media/kleren/" + clothes[i]['url'] + "' data-lightbox='fashionshow' data-title ='" + clothes[i]['naam'] + "'> " +
            "<img src='../media/kleren/" + clothes[i]['url'] + "' alt='" + clothes[i]['naam'] + "'>" +
            '</a>';
    }

    showList.innerHTML = pictures;
};

loadImage();
