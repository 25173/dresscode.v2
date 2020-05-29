<!doctype html>
<html lang="nl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Kleren Kast</title>
    <link href="https://fonts.googleapis.com/css2?family=Sniglet:wght@800&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="../css/priveKast.css">
    <link rel="stylesheet" href="../css/style.css">
    <script src="../js/siema.min.js"></script>
    <script src="../js/html2canvas.js"></script>
</head>
<body>
<?php include '../model/header.php'
?>

<div class="grid_2-private wrapper">
    <div class="test_container">
        <img src="../media/icons/kast.png" class="kast" alt="">
        <div class="test">
            <div class="siema">
				<?php
				$kleding = getYourClothes();
				foreach ( $kleding as $item ) {
					if ( $item['soort'] === 'jas.png' ) {
						$type = 'class="gradient_btn btn_t-shirt-1"';
					} elseif ( $item['soort'] === 'jurk.png' ) {
						$type = 'class="gradient_btn btn_t-shirt-3"';
					} else {
						$type = 'class="gradient_btn btn_t-shirt-2"';
					}
					?>
                    <div class="space_slider">
                        <img src="../media/kleren/<?php echo $item['url'] ?>" alt="Siema image"/>
                        <div class="buttons">
                            <button <?php echo $type ?> value="../media/kleren/<?php echo $item['url'] ?>">
                                Aantrekken
                            </button>
                            <br/>
                            <button class="gradient_btn">Delen</button>
                        </div>
                    </div>
					<?php
				}

				?>
            </div>
            <a class="prev slides_private">&#10094;</a>
            <a class="next slides_private">&#10095;</a>
        </div>
    </div>
    <div>
        <div class="avatar_section" id="avatar_section">
            <?php
            $avater = getAvatar() ;
            if ($avater === 1){
                echo '<img src="../media/avatars/nudie-julia1.png" id="avatar" class="avatar-julia" alt="">';
            }elseif ($avater === 2){
                echo '<img src="../media/avatars/nudie-merel2.png" id="avatar" class="avatar-merel" alt="">';
            }else{
                echo '<img src="../media/avatars/nudie-glorie3.png" id="avatar" alt="">';
            }
            ?>
            <img src="../media/kleren/5ebdc4d5ac86e.png" class="kleren custom_made-jas" alt="">
            <img src="../media/kleren/wit-shirt.png" class="kleren custom_made-t-shirt" alt="">
            <img src="../media/kleren/rok_beige.png" class="kleren custom_made-skirt" alt="">
            <img src="../media/kleren/5eba8ee2041a8.png" class="kleren custom_made-jurk" alt="">
        </div>
        <div class="avatar_section-buttons">
            <button id="avatar_save-btn">deel deze outfit</button>
            <button id="k1">Avatar kiezen</button>
        </div>
    </div>


</div>

<div id="inhoud1">
    <div class="avatar1">
        <h5 class="avatar_title">Julia</h5>
        <img class="julia" src="../media/avatars/CartoonsJulia.png" alt="hoofdavatar">
        <h2>Kies met welke karakter je wilt programmeren</h2>
        <button class="avatar_btn" id="julia_btn">Aan de slag</button>
    </div>

    <div class="avatar2">
        <h5 class="avatar_title">Glorie</h5>
        <img class="julia" src="../media/avatars/CartoonsGlorie.png" alt="hoofdavatar">
        <h3>Kies met welke karakter je wilt programmeren</h3>
        <button class="avatar_btn" id="glorie_btn">Aan de slag</button>
    </div>

    <div class="avatar3">
        <h5 class="avatar_title">Merel</h5>
        <img class="julia" src="../media/avatars/CartoonsMerel.png" alt="hoofdavatar">
        <h4>Kies met welke karakter je wilt programmeren</h4>
        <button class="avatar_btn" id="merel-Btn">Aan de slag</button>
    </div>
</div>

<?php include '../model/footer.php'
?>

<script>
    const mySiema = new Siema({
        perPage: 3,
        loop: false
    });

    const prev = document.querySelector('.prev');
    const next = document.querySelector('.next');

    prev.addEventListener('click', () => mySiema.prev());
    next.addEventListener('click', () => mySiema.next());
</script>
</body>
</html>
