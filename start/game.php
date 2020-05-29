<!doctype html>
<html lang="nl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>canvas</title>
    <link href="https://fonts.googleapis.com/css2?family=Sniglet:wght@800&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="../css/style.css">

    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
    <script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
    <script src="../js/blockly_compressed.js"></script>
    <script src="../js/blocks_compressed.js"></script>
    <script src="../js/javascript_compressed.js"></script>
    <script src="../js/OwnBloks.js"></script>
    <script src="../js/ownBloksRules.js"></script>
    <script src="../msg/js/nl.js"></script>
    <script src="../js/paper-full.js"></script>
    <script src="../js/script.js"></script>

<!--checken of je het wel heb opgeslagen-->
    <!--    <script>-->
<!--        // Warning before leaving the page (back button, or outgoinglink)-->
<!--        window.onbeforeunload = function() {-->
<!--            return "Do you really want to leave our brilliant application?";-->
<!--            // if we return nothing here (just calling return;) then there will be no pop-up question at all-->
<!--            // return;-->
<!--        };-->
<!--    </script>-->
</head>
<body>
<?php
include '../model/header.php'
?>

<main class="wrapper">

    <!-- dit heb ik alleen om te testen-->


    <div class="game_page">
        <!--the image for the canvas-->
        <h3 class="snippets">Atelier</h3>
        <img <?php echo 'src="../media/img/' . $_GET['kleding'] .'"' ?> id="clothes" style="display: none" alt="kleding">
        <div class="grid_2">
            <div class="codes">
                <div class="navbar_game">
                    <p>Werk plek</p>


                    <img class="navbar_game-icon" id="reset_code" src="../media/icons/icon_reset_wit.png" alt="">
                    <img id="showcode" class="navbar_game-icon" src="../media/icons/icon_code_wit.png" alt="">
                    <input type="hidden" id="kleding_soort" name="soort" value="<?php echo $_GET['kleding']?>">

                </div>
                <!--dit is het div waar de blockjes komen-->
                <div id="blocklyDiv">

                </div>
            </div>
            <div class="uitwerking">
                <div class="navbar_game-canvas">
                    <button id="btndownload">Kleding opslaan</button>
                </div>
                <!--dit is waar de canvas is-->
                <canvas id="myCanvas" ></canvas>
            </div>
        </div>
        <div class="tips">
            <button id="tip_btn" class="gradient_btn-tips" style="cursor:pointer">I need a tip</button>
        </div>
    </div>


</main>

<div id="tipModal" class="modal">
    <div class="modal_content">
        <span class="close"><img src="../media/icons/kruisje-zwart.png" style="width:28px;float: right;"></span>

        <div class="gradient_btn-tips expand_text">Kleur kleding</a></div>
        <div class="hidden">
            <div class="slideshow">
                <h2 style="text-align:center;margin:0;color: cornflowerblue;font-size: 3em;">Uitleg</h2>
                <br>
                <div class="slides">
                    <img src="../media/codes/background.png" style="width:60%;">
                    <div style="width:40%">
                        <h3>resultaat</h3>
                        <p>als je deze stappen volgt, kan je de basis kleur kiezen voor je kledingstuk.
                        </p>
                    </div>
                </div>
                <div class="slides">
                    <img src="../media/codes/Achtergrond-begincode.png" style="width:60%;">
                    <div style="width:40%">
                        <h3>code</h3>
                        <p>Er zijn 4 blokjes nodig om de achtergrond te veranderen. <br> <br>
                            - je begint met een block die de de eisen aan de object geeft. <br>
                            - je geeft met een tekst blok de naam van de object, voor deze aanpassing noem je het "Achtergrond".<br>
                        </p>
                    </div>
                </div>
                <div class="slides">
                    <img src="../media/codes/jas_paars.png" style="width:60%">
                    <div style="width:40%">
                        <p>
                            - Nu voeg je een block die een eigenschap weergeeft van de object, namelijk de achtergrond.  <br>
                            - Je voegt daarna ook een kleur toe die daarnaast komt.
                        </p>
                    </div>
                </div>
            </div>
            <br>
            <div style="text-align:center; cursor: pointer;"><a class="prev" onclick="nextSlides_info(-1, 0)">&#10094;</a>
                <span class="dot" onclick="currentSlide_info(1)"></span>
                <span class="dot" onclick="currentSlide_info(2)"></span>
                <span class="dot" onclick="currentSlide_info(3)"></span>
                <a class="next" onclick="nextSlides_info(1, 0)">&#10095;</a>
            </div>
        </div>
        <div class="gradient_btn-tips expand_text">vierkant</a></div>
        <div class="hidden">
            <div class="slideshow">
                <h2 style="text-align:center;margin:0;color: cornflowerblue;font-size: 3em;">Uitleg</h2>
                <br>
                <div class="slides2">
                    <img src="../media/codes/vierkant.png" style="width:60%;">
                    <div style="width:40%">
                        <h3>hoe maak je een vierkant</h3>
                        <p> een vierkant met zwarte randen is zo gecodeert. <br>
                            - Je begint met een block die een object verklaard. <br>
                            - Geeft de object een willkeurige naam. <br>
                            - uit het lijst vormen, pak je de blokje die de vierkant laat maken. <br>
                            - hierin geeft je 4 waarden. <br>
                            - Met de eerste twee cijfers kan je de horizontale en verticale plek kiezen die van 0 tot 100 gaan.
                            <br>
                            - De Laatste twee cijfers bepaal je de lengte en breedte van de vierkant.
                        </p>
                    </div>
                </div>
                <div class="slides2">
                    <img src="../media/codes/jas_vierkant.png" style="width:60%">
                    <div style="width:40%">
                        <h3>resultaat</h3>
                        <p>tot slot krijg je hierdoor een vierkant met zwarte lijnen
                        </p>
                    </div>
                </div>
            </div>
            <br>
            <div style="text-align:center; cursor: pointer;">
                <a class="prev" onclick="nextSlides_info(-1, 0)">&#10094;</a>
                <span class="dot2" onclick="currentSlide_info(1)"></span>
                <span class="dot2" onclick="currentSlide_info(2)"></span>
                <a class="next" onclick="nextSlides_info(1, 0)">&#10095;</a>
            </div>
        </div>
        <div class="gradient_btn-tips expand_text">achtergrondkleur voor vormen</a></div>
        <div class="hidden">
            <div class="slideshow">
                <h2 style="text-align:center;margin:0;color: cornflowerblue;font-size: 3em;">Uitleg</h2>
                <br>
                <div class="slides3">
                    <img src="../media/codes/achtergrond_code-vorm.png" style="width:100%;">
                    <div style="width:100%">
                        <h3>hoe zet je een achtergrond van een vorm</h3>
                        <p> Je heb al een vorm gemaakt maar het heeft alleen zwarte lijnen. <br>
                            met deze code zet je een Achtergrond. <br>
                            - je begint met een block die de de eisen aan de object geeft. <br>
                            - je geeft het de dezelfde naam als de object die je heb gemaakt. <br>
                            <span style="padding -left: 5px"></span> Hiermee geef je alle details door aan deze object.
                            <br>
                            - Je voegt het blokje achtergrond toe uit de lijst objecten. <br>
                            - Nu voeg je een kleur toe om het af te maken.
                        </p>
                    </div>
                </div>
            </div>
            <br>
            <div style="text-align:center; cursor: pointer;">
                <a class="prev" onclick="nextSlides_info(-1, 0)">&#10094;</a>
                <span class="dot3" onclick="currentSlide_info(1)"></span>
                <span class="dot3" onclick="currentSlide_info(2)"></span>
                <a class="next" onclick="nextSlides_info(1, 0)">&#10095;</a>
            </div>
        </div>
    </div>

</div>


<?php
include '../model/xml.html';
//include '../model/footer.php';
?>
<script src="../js/login.js"></script>
<script>
    // code van chris
    $(".expand_text").click(function () {
        $('.expand_text').next().slideUp();
        $(this).next().slideToggle();
    }).next().hide();
    var modal = document.getElementById("tipModal");
    var btn = document.getElementById("tip_btn");
    var close = document.getElementsByClassName("close")[0];
    btn.onclick = function () {
        modal.style.display = "block";
    }
    close.onclick = function () {
        modal.style.display = "none";
    }
    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }

    var startSlide = [1, 1, 1];
    var slideId = ["slides", "slides2","slides3"];
    showSlides(1, 0);
    showSlides(1, 1);
    showSlides(1,2);


    function nextSlides_info(n, no) {
        showSlides(startSlide[no] += n, no);
    }

    function currentSlide_info(n, no) {
        showSlides(startSlide[no] = n, no);
    }

    function showSlides(n, no) {
        var i;
        var slides = document.getElementsByClassName(slideId[no]);
        var dots = document.getElementsByClassName("dot");
        var dots2 = document.getElementsByClassName("dot2");
        if (n > slides.length) {
            startSlide[no] = 1
        }
        if (n < 1) {
            startSlide[no] = slides.length
        }
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }
        for (i = 0; i < dots2.length; i++) {
            dots2[i].className = dots2[i].className.replace(" active", "");
        }
        slides[startSlide[no] - 1].style.display = "flex";
        dots[startSlide[no] - 1].className += " active";
        dots2[startSlide[no] - 1].className += " active";

    }
</script>
</body>
</html>