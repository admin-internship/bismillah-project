<?php
include('config.php');

//jika belum login menggunakan google (di sistem), kasih link autentifikasi login dgn google 
if(!isset($_SESSION['access_token']))
{
 $BTN_login = '<a href="'.$google_client->createAuthUrl().'">Sign in with Google Account</a>';
}else{ //ketika user udah login (halaman search) dan tekan tombol back akan diinisiasi lagi access tokennya
  $BTN_login = $_SESSION['access_token'];
}
?>

<html lang="en">
  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.0/css/bootstrap.min.css" integrity="sha384-9gVQ4dYFwwWSjIDZnLEWnxCjeSWFphJiwGPXr1jddIhOegiu1FwO5qRGvFXOdJZ4" crossorigin="anonymous">

    <title>Book Finder</title>
<!--===============================================================================================-->	
	<link rel="icon" type="image/png" href="images/favicon.ico"/>
<!--===============================================================================================-->
	<link rel="stylesheet" type="text/css" href="vendor/bootstrap/css/bootstrap.min.css">
<!--===============================================================================================-->
	<link rel="stylesheet" type="text/css" href="fonts/font-awesome-4.7.0/css/font-awesome.min.css">
<!--===============================================================================================-->
	<link rel="stylesheet" type="text/css" href="fonts/Linearicons-Free-v1.0.0/icon-font.min.css">
<!--===============================================================================================-->
	<link rel="stylesheet" type="text/css" href="vendor/animate/animate.css">
<!--===============================================================================================-->	
	<link rel="stylesheet" type="text/css" href="vendor/css-hamburgers/hamburgers.min.css">
<!--===============================================================================================-->
	<link rel="stylesheet" type="text/css" href="vendor/select2/select2.min.css">
<!--===============================================================================================-->
	<link rel="stylesheet" type="text/css" href="css/util.css">
	<link rel="stylesheet" type="text/css" href="css/main.css">
<!--===============================================================================================-->
  </head>
  <body>
  <div class="limiter">
		<div class="container-login100" style="background-image: url('images/buku.jpg');">
			<div class="wrap-login100 p-t-190 p-b-30">
				<form class="login100-form validate-form">
					<div class="login100-form-avatar">
						<img src="images/orang.jpg" alt="AVATAR">
					</div>

					<span class="login100-form-title p-t-20 p-b-45">
						Welcome to Book Finder!
					</span>
					<form id="Formlogin" method="POST">
          
            <!-- <button type="button" class="btn btn-secondary">Sign in with Google Account</button> -->
			
          </form>
					<div class="container-login100-form-btn p-t-10">
						<button class="login100-form-btn">
							<div class="text-center">
							<b>
							<form id="Formlogin" method="POST">
							<?php
								if ($BTN_login == '') { //misal BTN_login udh ada isinya (link autentifikasi ('code') dr google)
								  session_destroy();
								}else{ //ketika user udah login (halaman search) dan tekan tombol back akan, kasih link autentifikasi login dgn google. pake variabel session access token yg udh diinisiasi diatas
								  $google_client->revokeToken();
								  session_destroy();
								  echo $_SESSION['access_token'] = '<a href="'.$google_client->createAuthUrl().'">Sign in with Google Account</a>';
								}
								?>
            <!-- <button type="button" class="btn btn-secondary">Sign in with Google Account</button> -->
          </form>
		  </b>
        </div>
						</button>
					</div>
				</form>
			</div>
		</div>
	</div>
    

<!--===============================================================================================-->	
	<script src="vendor/jquery/jquery-3.2.1.min.js"></script>
<!--===============================================================================================-->
	<script src="vendor/bootstrap/js/popper.js"></script>
	<script src="vendor/bootstrap/js/bootstrap.min.js"></script>
<!--===============================================================================================-->
	<script src="vendor/select2/select2.min.js"></script>
<!--===============================================================================================-->
	<script src="js/main.js"></script>
   
  </body>
</html>