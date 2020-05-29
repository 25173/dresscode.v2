<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <meta http-equiv="X-UA-Compatible" content="ie=edge"/>
    <title>gallerij</title>
    <link rel="stylesheet" href="../css/style.css">
    <link rel="stylesheet" href="../css/showPage.css">
    <link rel="stylesheet" href="../css/lightbox.min.css">
    <script src="../js/lightbox-plus-jquery.min.js"></script>
</head>
<body>
<?php
include '../model/header.php'
?>

<div id="searchWrapper">
    <input type="text" name="searchBar" id="searchBar" placeholder="Filter image" />
    <i class="fa fa-search"></i>
</div>
<div class="gallery">
    <div id="showList"></div>
</div>
<?php
include '../model/footer.php';
?>
<script src="../js/picture.js">
</script>
</body>
</html>
