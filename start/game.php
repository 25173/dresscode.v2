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
        <img <?php echo 'src="../media/img/' . $_GET['kleding'] .'"' ?> id="clothes" style="display: none"
                                                                         alt="kleding">
        <div class="grid_2">
            <div class="codes">
                <div class="navbar_game">
                    <p>Werkplek</p>
                    <img class="navbar_game-icon" id="reset_code" src="../media/icons/icon_reset_wit.png" alt="">
                    <img id="showcode" class="navbar_game-icon" src="../media/icons/icon_code_wit.png" alt="">
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
                <canvas id="myCanvas"></canvas>
            </div>
        </div>
        <div class="tips">

        </div>
    </div>


</main>

<div class="saveModal">
    <div class="modal-window">
        <img src="../media/icons/kruisje.png" class="close_modal-save" alt="">
        <canvas class="example-canvas"></canvas>
    </div>
</div>

<?php
include '../model/xml.html';
include '../model/footer.php';
?>

</body>
</html>