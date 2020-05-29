<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <link rel="stylesheet" href="../css/style.css">
</head>
<style>
    body {
        margin: 0;
        font-family: 'Sniglet', cursive;
        height: 100%;
    }

    .img_header #header {
        width: 100vw
    }

    .icon img {
        position: absolute;
        top: 10px;
        width: 40px;
        padding: 5px;
        z-index: 2;
        margin-top: 10px;
        background: black
    }

    .icon-left {
        float: left;
        margin-left: 50px
    }

    .icon-right {
        float: right;
        margin-right: 50px;
    }

    .icon-right a {
        margin: 20px;
        padding: 10px
    }

    #about_container {
        position: relative;
        width: 90%;
        margin: 0 auto;
    }

    .about_content {
        /* background: lightblue; */
        height: 700px;
        width: 100%;
        display: flex;
    }

    .about_img,
    .about_text {
        width: 50%;

    }

    .about_img #milena {
        height: 75%;
        max-width: 100%;
        margin: 20% 0;
        border-radius: 10px;
        float: right;
    }

    .about_text div {
        padding: 30px
    }

    .about_dresscode {
        background-color: #EFC4E8;
        border-radius: 20px;
        width: 100%;
        margin: 50px 0 -80px;
    }

    .dresscode_text,
    .dresscode_img {
        max-width: 50%;
        padding: 20px;
        color: white
    }

    .dresscode_text {
        margin: 8% 0;
    }

    .dresscode_img img {
        border-radius: 20px
    }

    .img_footer img {
        width: 100vw;
        margin-bottom: -10px
    }

    .navbar{
        position: absolute;
    }

    .navbar .navbar-background{
        display: none;
    }

    @media only screen and (min-width : 768px) and (max-width : 1024px) {
        .dresscode_img img {
            max-width: 350px
        }
    }
    .img_header{
        position: relative;

    }

</style>

<body>

    <div class="img_header">
	    <?php include '../model/header.php'
	    ?>
        <img src="../media/img/header2.png" id="header" alt="">
    </div>
    <div id="about_container">
        <div class="about_content">
            <div class="about_img">
                <img src="../media/img/milena.png" id="milena" alt="">
            </div>
            <div class="about_text">
                <div>
                    <img src="../media/img/blackShirt.png" width="50%" style="float:right" alt="">
                </div>
                <div style="float:left">
                    <h2 style="font-size: 3em">Over mij</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non repudiandae laudantium omnis
                        quibusdam
                        quam. Adipisci est nihil error sunt quo? Asperiores est provident illo nam a porro animi
                        sapiente
                        delectus! Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit necessitatibus fugiat
                        autem
                        maiores magni non voluptatem harum, eius dolor hic veniam perferendis ut impedit. Harum delectus
                        animi atque tempore ut!</p>
                </div>
            </div>
        </div>
        <div class="about_dresscode">
            <div style="display:inline-block; width:100%; text-align: center">
                <h2 style="color:white; font-size: 3em">Over dresscode</h2>
            </div>
            <div style="display: flex;">
                <div class="dresscode_text">
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta velit nostrum ducimus esse ipsam
                        quae ab est sint aperiam qui. Ducimus quam dolore, debitis saepe sunt asperiores quidem nobis
                        maiores!</p>
                </div>
                <div class="dresscode_img">
                    <img src="../media/img/dresscode.png" alt="">
                </div>
            </div>
        </div>
    </div>
    <div class="img_footer">
        <img src="../media/img/footer.png" class="header" alt="">
    </div>
<script src="../js/login.js"> </script>
</body>
</html>