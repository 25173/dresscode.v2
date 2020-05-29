<?php
/**
 * Created by PhpStorm.
 * User: tim
 * Date: 05/05/2020
 * Time: 12:25
 */

include 'funtion.php';
if (isset($_POST['submit_register'])){

	registreren();

}elseif (isset($_POST['submit_login'])){
	inloggen();
}elseif (isset($_POST['saveKleding'])){
	// requires php5
	define('UPLOAD_DIR', '../media/kleren/');
	$img = $_POST['picture'];
	$img = str_replace('data:image/png;base64,', '', $img);
	$img = str_replace(' ', '+', $img);
	$data = base64_decode($img);
	$name = uniqid() . '.png';
	$file = UPLOAD_DIR . $name;
	$success = file_put_contents($file, $data);

	if ($success) {

		savekleding($name, $_POST['soort']);
		echo '1';
	}else{
		echo '0';
	}

}elseif (isset($_POST['fotos'])){
	echo json_encode(getPictures());
}elseif (isset($_GET['logout'])){
	logout();
}elseif (isset($_POST['changeAvatar'])){
	$avatar = $_POST['avatarNumber'];
	echo changeAvatar($avatar);
}elseif (isset($_POST['saveCode'])){
	saveCode($_POST['soort'],$_POST['code']);

}
checkCookies();