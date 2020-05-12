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

</head>
<body>
<?php
include '../model/header.php'
?>

<main class="wrapper">

    <!-- dit heb ik alleen om te testen-->
<!--    <button id="showcode">Show JavaScript</button>-->

    <button id="btndownload">Save</button>


    <div class="grid_2">
        <!--the image for the canvas-->
        <img <?php echo 'src="../media/img/' .$_GET['kleding'] . '"'?>  id="clothes" style="display: none" alt="kleding">
        <!--dit is het div waar de blockjes komen-->
        <div id="blocklyDiv"></div>
        <!--dit is waar de canvas is-->
        <canvas id="myCanvas"></canvas>
    </div>

    <p id="txtHint"></p>

</main>


<?php
include '../model/xml.html';
include '../model/footer.php';
?>

</body>
</html>