<?php
session_start();

include_once( '../values.php' );

//verbinding maken met de database
function connenct_db() {
	$dbc = new mysqli( HOST, USER, PASS, DB);
	if ( $dbc->connect_errno ) {
		echo ' connect error:' . $dbc->connect_errno;
		echo HOST;
	}

	return $dbc;
}

function close_connection( $connection ) {
	$connection = null;
}


// registreren

function registreren() {

	$connection = connenct_db();
	$name       = $_POST['naam'];
	$email      = $_POST['email'];
	$username   = $_POST['gebruiksnaam'];
	$password   = $_POST['password'];


//	 bestaat er al iemand met deze gebruiksnaam?
	$query = "SELECT id FROM users where gebruiksnaam = ? ";
	$stmt = $connection->prepare( $query ) or die( 'error prepare 1' );
	$stmt->bind_param( 's', $username ) or die( 'error binding 1' );
	if ( ! $stmt->execute() ) {
		echo $stmt->error;
	}
	$row = $stmt->fetch();

	if ( $row ) {
//		 er is al iemand met deze naam
		echo "<h3> er is al iemand met deze gebruiksnaam </h3>";
	} else {

		$query = "INSERT INTO users VALUE (0,?,?,?,?,1)";
		$stmt = $connection->prepare( $query ) or die( 'error prepare' );
		$stmt->bind_param( 'ssss', $name, $username, $password, $email ) or die( 'error binding register' );
		if ( ! $stmt->execute() ) {
			echo $stmt->error;
			exit();
		}
	}
	$stmt->close();
	close_connection( $connection );
}

function checkCookies() {
	$dbc = connenct_db();


	$query = "SELECT naam FROM users WHERE id = ?";
	$stmt = $dbc->prepare( $query ) or die( 'error preparing checking' );
	$stmt->bind_param( 'i', $userid ) or die( 'error binding' );
	$stmt->bind_result( $name ) or die( 'error binding result cookies' );
	$userid = $_COOKIE['userid'];

	$stmt->execute() or die ( 'error executing.' );
	$row = $stmt->fetch();

	close_connection( $dbc );
//	echo $name;
	if ( $row ) {
		$_SESSION['userid'] = $userid;

		return $name;
	}
}

// in en uitloggen
function inloggen() {
	$connection = connenct_db();

	$username = $connection->real_escape_string( $_POST['gebruiksnaam'] );
	$password = $connection->real_escape_string( $_POST['password'] );
	$query    = "SELECT id from users WHERE gebruiksnaam = ? AND wachtwoord = ?";
	$stmt = $connection->prepare( $query ) or die( 'error prepare' );
	$stmt->bind_param( 'ss', $username, $password ) or die( "error binding" );


	$result = $stmt->execute() or die( 'error finding user' );
	$stmt->bind_result( $userid ) or die( "error binding result" );
	close_connection( $connection );

	$stmt->fetch();


	if ( $userid == null ) {
		echo '<p class="wrong"> Gebruiksnaam of wachtwoord is incorrect! <br> </p>';
	} else {

		setcookie( 'userid', $userid, time() + 3600 * 24 );
		$_SESSION['userid'] = $userid;
		header( "Refresh:0" );

	}
}

function logout() {
	//delete the sessuibs
	if ( $_SESSION ) {
		session_unset();
	}
	$actual_link = "http://$_SERVER[HTTP_HOST]$_SERVER[SCRIPT_NAME]";

//	echo  $actual_link;
	if ( isset( $_COOKIE['userid'] ) ) {
		setcookie( 'userid', '', time() - 3600 );
		header( "Refresh:0; url='" . $actual_link . "'" );
	}
}

function saveCode($soort, $code){
	$dbc = connenct_db();
	if ( $_SESSION['userid'] ) {
		$userid = $_SESSION['userid'];
	} else {
		$userid = 0;
	}
	if ( $soort ) {
		$name = $_POST['soort'];
	}

	$query = "INSERT INTO save_codes VALUE (0,?,?,?)";
	$stmt = $dbc->prepare( $query ) or die( 'error for preparing to insert img in db' );
	$stmt->bind_param( 'iss', $userid, $code, $soort ) or die( 'error for binding params' );
	$stmt->execute() or die( '<br> error update' );
	$stmt->close();
	close_connection( $dbc );
}

function savekleding( $place, $soort ) {
	$dbc = connenct_db();
	if ( $_SESSION['userid'] ) {
		$userid = $_SESSION['userid'];
	} else {
		$userid = 0;
	}
	if ( $soort ) {
		$name = $_POST['soort'];
	}

	$query = "INSERT INTO kleding VALUE (0,?,?,?)";
	$stmt = $dbc->prepare( $query ) or die( 'error for preparing to insert img in db' );
	$stmt->bind_param( 'sis', $place, $userid, $name ) or die( 'error for binding params' );

	$stmt->execute() or die( '<br> error update' );
	$stmt->close();
	close_connection( $dbc );
}

function getPictures() {

	$connection = connenct_db();

	$query = "SELECT soort,url,userid,id FROM kleding ORDER BY id DESC ";

	$photo = array();
	$statement = $connection->query( $query ) or die( 'Unable to query the database' );

	// Loop through the database reuslts an add all records to the photo array
	foreach ( $statement as $photoRow ):
		$photo[] = $photoRow;
	endforeach;

	// Close the database connection
	$statement->close();
	close_connection( $connection );

	// Retun tha array
	return $photo;
}

function getAvatar() {
	$dbc = connenct_db();


	$query = "SELECT Avatar FROM users WHERE id = ?";
	$stmt = $dbc->prepare( $query ) or die( 'error preparing checking' );
	$stmt->bind_param( 'i', $userid ) or die( 'error binding' );
	$stmt->bind_result( $avatar ) or die( 'error binding result cookies' );
	$userid = $_COOKIE['userid'];

	$stmt->execute() or die ( 'error executing.' );
	$row = $stmt->fetch();

	close_connection( $dbc );
	if ( $row ) {

		return $avatar;
	}
	return false;
}

function changeAvatar($avater){

	$id = $_COOKIE['userid'];
	$db    = connenct_db();
	$query = "UPDATE users SET Avatar = ? WHERE id = 5";
	$stmt = $db->prepare( $query ) or die( 'error prepare' );
	$stmt->bind_param( 's', $avater ) or die( "error binding" );
	$result = $stmt->execute() or die( 'error update' );
	close_connection( $db );
	return $id;
}

//only your own make clothes
function getYourClothes() {
	$dbc   = connenct_db();
	$id    = $_SESSION['userid'];
	$photo = array();
	$query = "SELECT url,soort FROM kleding WHERE userId = ? AND soort != 'avatar' ORDER BY id";
	$stmt  = $dbc->prepare( $query );
	$stmt->bind_param( 'i', $id );
	$stmt->execute() or die( 'error executing the query' );
	$stmt->bind_result( $url, $soort ) or die( 'error binding result cookies' );
	$i = 0;
	while ( $stmt->fetch() ) {
		$photo[ $i ]['url']   = $url;
		$photo[ $i ]['soort'] = $soort;
		$i ++;
	}
	$stmt->close();
	close_connection( $dbc );

	return $photo;
}