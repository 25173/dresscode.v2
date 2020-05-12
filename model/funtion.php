<?php
session_start();

include_once( '../values.php' );

//verbinding maken met de database
function connenct_db() {
	$dbc = new mysqli( HOST, USER, PASS, DB );
	if ( $dbc->connect_errno ) {
		echo ' connect error:' . $dbc->connect_errno;
		echo HOST;
	}

	return $dbc;
}

function close_connection( $connection ) {
	$connection = null;
}

// in en uitloggen
function login() {

	$connection = connenct_db();

	$query = "SELECT id,naam,hash from users WHERE Gname = ? AND Wword = ?";
	$stmt = $connection->prepare( $query ) or die( 'error prepare' );
	$stmt->bind_param( 'ss', $username, $password ) or die( "error binding" );
	$stmt->bind_result( $userid, $naam, $hash ) or die( "error binding result" );

	$username = $_POST['gebruiksnaam'];
	$password = encrypt( $_POST['password'] );
	$result = $stmt->execute() or die( 'error finding user' );
	$numbersOfRow = $stmt->fetch();
	close_connection( $connection );
	if ( ! $numbersOfRow ) {
		echo 'je inlog gegevens kloppen niet <br>';
//		exit();
	} else {
		setcookie( 'userid', $userid, time() + 3600 * 24 );
		$_SESSION['userid'] = $userid;
		setcookie( 'admin', $hash, time() + 3600 * 24 );
		$_SESSION['admin'] = $hash;

		header( 'Location: game.php' );

	}
}

function logout() {
	//delete the sessuibs
	if ( isset( $_COOKIE[ session_name() ] ) ) {
		setcookie( session_name(), '', time() - 3600 );
	}


	if ( isset( $_COOKIE['userid'] ) ) {
		setcookie( 'userid', '', time() - 3600 );
		setcookie( 'hash', '', time() - 3600 );
	}
	header( "Refresh:0" );
}


function savekleding( $place ) {
	$dbc   = connenct_db();
	$query = "INSERT INTO kleding VALUE (0,?,0,'haao')";
	$stmt = $dbc->prepare( $query ) or die( 'error for preparing to insert img in db' );
	$stmt->bind_param( 's', $place ) or die( 'error for binding params' );
	$stmt->execute() or die( '<br> error update' );
	$stmt->close();
	close_connection( $dbc );
}

function getPictures() {

	$connection = connenct_db();

	$query = "SELECT naam,url,userid,id FROM kleding";

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