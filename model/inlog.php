<!-- formulier om in te loggen-->
<form action="" id="inlog_form" method="post">
    <div class="inlog_form-relative">

        <div class="vakje1">
            <img src="../media/icons/kruisje-zwart.png" class="close_modal-login" alt="">
            <img src="../media/icons/icon_profile_color.png" class="profiel" alt="">

            <h1>Inloggen</h1>

            <p>Vul je gegevens in om in te loggen bij Dresscode</p>

            <h2>Gebruiksnaam</h2>
            <input type="text" class="email" name="gebruiksnaam" autocomplete="username" placeholder="Gebruiksnaam"
                   required>

            <h3>Wachtwoord</h3>

            <input type="password" class="wachtwoord" name="password" autocomplete="current-password"
                   placeholder="Wachtwoord" required
                   id="inlog_password_form">

            <p id="show_password" style="cursor: pointer">show password</p>

            <a href="">Wachtwoord vergeten?</a>

        </div>

        <div class="vakje2">

            <p class="registerFormButton">HEB JE NOG GEEN ACCOUNT BIJ DRESSCODE? klik hier!</p>

            <input type="submit" name="submit_login" value="Inloggen" class="button3">

        </div>
    </div>
</form>

<!--registeren form-->
<form action="" id="register_form" method="post">

    <div class="vakje1">


        <img src="../media/icons/kruisje-zwart.png" class="close_modal-login" alt="">
        <img src="../media/icons/icon_profile_color.png" class="profiel" alt="">


        <h1>Registreren</h1>


        <p>Vul je gegevens in om je aacount aan te maken bij Dresscode</p>

        <h2>Voornaam</h2>
        <input type="text" class="email" name="naam" placeholder="E-mailadres" required>

        <h2>Gebruikersnaam</h2>
        <input type="text" class="email" name="gebruiksnaam" placeholder="Gebruiksnaam" required>

        <h2>E-mailadres</h2>
        <input type="text" class="email" name="email" placeholder="E-mail" required>

        <h3>Wachtwoord</h3>
        <input type="password" class="wachtwoord" name="password" placeholder="Wachtwoord" required
               id="register_password-form">


        <p id="show_password" style="cursor: pointer">show password</p>


    </div>


    <div class="vakje2">


        <p class="login_btn">HEB JE AL EEN ACCOUNT BIJ DRESSCODE? LOG DAN IN!</p>


        <input type="submit" name="submit_register" value="Registreren" class="button3">

    </div>

</form>



