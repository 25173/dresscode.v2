const showList = document.getElementById('showList');



const loadImageToGallery = async () => {
    try {
        const xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function () {
            if (this.readyState === 4 && this.status === 200) {
                console.log(this);
                showDressToGallery(this.responseText)
            }
        };

        xmlhttp.open("POST", "../model/controller.php", true);
        xmlhttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
        xmlhttp.send('fotos=1');

    } catch (err) {
        console.error(err);
    }
};

const showDressToGallery = (clothes) => {

    clothes = JSON.parse(clothes);
    let pictures = "";

    for (let i = 0; i < clothes.length; i++) {
        pictures += "<div class='grid-item'> <a href='../media/kleren/" + clothes[i]['url'] + "' data-lightbox='fashionshow' data-title ='" + clothes[i]['soort'] + "'> " +
            "<img src='../media/kleren/" + clothes[i]['url'] + "' alt='" + clothes[i]['soort'] + "'>" +
            '</a> </div>';
    }

    showList.innerHTML = pictures;
};

loadImageToGallery();
