<!-- formulier om in te loggen-->
<form action="" id="inlog_form" method="post">
    <div class="inlog_form-relative">
        <div class="vakje1">

            <img src="../media/icons/icon_profile_color.png" class="profiel" alt="">

            <h1>Inloggen</h1>

            <p>Vul je gegevens in om in te loggen bij Dresscode</p>

            <h2>Gebruiksnaam</h2>
            <input type="text" class="email" name="gebruiksnaam" autocomplete="username" placeholder="Gebruiksnaam" required>

            <h3>Wachtwoord</h3>

            <input type="password" class="wachtwoord" name="password" autocomplete="current-password" placeholder="Wachtwoord" required
                   id="inlog_password_form">

            <p id="show_password" style="cursor: pointer">show password</p>

            <a href="">Wachtwoord vergeten?</a>

        </div>

        <div class="vakje2">

            <p>HEB JE NOG GEEN ACCOUNT BIJ DRESSCODE?</p>

            <input type="submit" name="submit_login" value="Inloggen" class="button3">

        </div>
    </div>
</form>
