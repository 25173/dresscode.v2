<!doctype html>
<html lang="nl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>kleren</title>
    <link href="https://fonts.googleapis.com/css2?family=Sniglet:wght@800&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="../css/style.css">
    <link rel="stylesheet" href="../css/kledingMenu.css">
</head>
<body>
<?php

include '../model/header.php';

?>

<main class="wrapper">

    <form action="game.php" class="kleding_form" method="get">

        <input type="radio" name="kleding" checked value="jas.png" id="kleding1">
        <label for="kleding1">
            <img src="../media/img/jas.png" alt="">
        </label>
        <input type="radio" name="kleding" value="shirt.png" id="kleding4">
        <label for="kleding4">
            <img src="../media/img/shirt.png" alt="">
        </label>
        <input type="radio" name="kleding" value="jurk.png" id="kleding3">
        <label for="kleding3">
            <img src="../media/img/jurk.png" alt="">
        </label>

        <input type="submit" class="gradient_btn-tips" value="kies dit">

    </form>

</main>

<?php
include '../model/footer.php';
?>

</body>
</html>