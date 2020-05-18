<?php
include '../model/controller.php';
?>

    <div class="navbar">

        <img src="../media/icons/header_v2.png" class="navbar-background" alt="">
        <a href="../"><img src="../media/icons/logo_drescode_wit.png" alt="logo" class="logo" id="logo_drescode_wit"></a>

        <div class="navbar_menu-icons">
			<?php if ( $_COOKIE['userid'] ) { ?>
                <p style="color: white; font-size: 20px; font-weight: bold"><?php
					echo checkCookies();
					?></p>
                <img src="../media/icons/icon_profile_wit.png" alt="" class="profiel-icon">
			<?php }else{
			    ?>
                <div></div>
                <div></div>
			    <?php
            } ?>
            <div class="navbar_dropdown">
                <img src="../media/icons/icon_menu_wit.png" alt="" class="menu-icon" id="icon_menu_wit">
                <div class="navbar_dropdown-content">
					<?php if ( $_COOKIE['userid'] === null ) { ?>
                        <p class="navbar_dropdown-item" id="inlogbtn">Inloggen</p>
                        <p class="navbar_dropdown-item registerFormButton">Registreren</p>
                        <a href="klerenKiezen.php" style="text-underline: none"><p class="navbar_dropdown-item">
                                Coderen</p></a>
                        <a href="gallery.php" style="text-underline: none"><p class="navbar_dropdown-item">Show
                                pagina</p></a>
					<?php } else { ?>
                        <a href="klerenKiezen.php" style="text-underline: none"><p class="navbar_dropdown-item">
                                Coderen</p></a>
                        <a href="gallery.php" style="text-underline: none"><p class="navbar_dropdown-item">Show
                                pagina</p></a>
                        <a href="?logout=1"><p class="navbar_dropdown-item">uitloggen</p></a>
					<?php } ?>

                </div>
            </div>

        </div>
    </div>

<?php
include '../model/inlog.php';
?>