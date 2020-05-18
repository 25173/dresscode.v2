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
    <script src="../js/html2canvas.js"></script>
</head>
<body>
<?php

include '../model/header.php';

?>

<main class="wrapper grid_2">

    <form action="game.php" class="kleding_form" method="get">

        <input type="radio" name="kleding" checked value="ding.png" id="kleding1">
        <label for="kleding1">
            <img src="../media/img/ding.png" alt="">
        </label>
        <input type="radio" name="kleding" value="ding2.png" id="kleding4">
        <label for="kleding4">
            <img src="../media/img/ding2.png" alt="">
        </label>
        <input type="radio" name="kleding" value="item2.2.png" id="kleding3">
        <label for="kleding3">
            <img src="../media/img/item2.2.png" alt="">
        </label>
        <input type="radio" name="kleding" value="item2.png" id="kleding2">
        <label for="kleding2">
            <img src="../media/img/item2.png" alt="">
        </label>

        <input type="submit" value="kies dit">

    </form>
    
    <div class="avatar_section" id="avatar_section">
        <img src="../media/avatars/topless-avatar.png" id="avatar" alt="">
        <img src="../media/kleren/5ebdc4d5ac86e.png" class="kleren custom_made-jas" alt="">
        <img src="../media/kleren/5eb9b82acdc59.png" class="kleren custom_made-t-shirt" alt="">
        <button id="btn_t-shirt-1" >1</button>
        <button id="btn_t-shirt-2" value="../media/kleren/5eba8ee2041a8.png">2</button>
    </div>

</main>

<?php
include '../model/footer.php';
?>

</body>
</html>