<!doctype html>

<?php

include 'config.php';

//ketika user berhasil login URL browser mendapat 'code'(cek dari url browser). VARIABEL HARUS $_GET["code"]
if(isset($_GET["code"]))
{
  #var_dump($_GET["code"]); die();
  //
  //variabel $_GET["code"] dijadikan autentifikasi dengan Token
  $token = $google_client->fetchAccessTokenWithAuthCode($_GET["code"]);
  
  //jika muncul token 'error' 
  if(!isset($token['error']))
  {
  //melakukan request kembali dengan token
  $google_client->setAccessToken($token['access_token']);

  //$token dijadikan session
  $_SESSION['access_token'] = $token['access_token'];

  //inisiasi google service auth
  $google_service = new Google_Service_Oauth2($google_client);

  //ambil data dari google
  $data = $google_service->userinfo->get();

  //$data dijadikan session
  if(!empty($data['given_name']))
  {
   $_SESSION['user_first_name'] = $data['given_name'];
  }

  if(!empty($data['family_name']))
  {
   $_SESSION['user_last_name'] = $data['family_name'];
  }

  if(!empty($data['email']))
  {
   $_SESSION['user_email_address'] = $data['email'];
  }

  if(!empty($data['gender']))
  {
   $_SESSION['user_gender'] = $data['gender'];
  }

  if(!empty($data['picture']))
  {
   $_SESSION['user_image'] = $data['picture'];
  }
 }
}else{
  header("location:index.php");
}

if(!isset($_SESSION['access_token']))
{
 header("location:index.php");
}

?>

<head>
  <meta charset="utf-8">
  <title>Book Finder</title>
  <link rel="icon" href="favicon.ico">
  <link rel="stylesheet" type="text/css" href="css/style.css">
 
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link href="https://fonts.googleapis.com/css?family=Roboto:300,400,500" rel="stylesheet">
  <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">

  <!-- Bootstrap CSS -->
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.0/css/bootstrap.min.css" integrity="sha384-9gVQ4dYFwwWSjIDZnLEWnxCjeSWFphJiwGPXr1jddIhOegiu1FwO5qRGvFXOdJZ4" crossorigin="anonymous">
 
  <!-- JS -->
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
  <script src="js/search.js"></script>
</head>

<body> 

     <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      <div class="container">    
        <img src="<?= $_SESSION['user_image']; ?>" class="img-circle" alt="User Image" />
        <a class="navbar-brand" href="#">
		      <!-- Ini nampilin data user -->
		      <div>
          <?php
      		 echo 'Welcome, ';
      		 echo $_SESSION ['user_first_name'].' '.$_SESSION['user_last_name'].'<br>';
          ?>
          </div>  
      </a>
		<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link" href="#" onclick="searchFiction()">Fiction</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#" onclick="searchPoetry()">Poetry</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#" onclick="searchFantasy()">Fantasy</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#" onclick="searchRomance()">Romance</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#categoriesModal" data-target="#categoriesModal" data-toggle="modal">More Categories</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="logout.php">Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <!-- Modal -->
    <div class="modal fade" id="categoriesModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Categories</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
                <a class="dropdown-item" data-dismiss="modal" href="#" onclick="searchAdult()">Adult</a>
                <a class="dropdown-item" data-dismiss="modal" href="#" onclick="searchAnthologies()">Anthologies</a>
                <a class="dropdown-item" data-dismiss="modal" href="#" onclick="searchArt()">Art</a>
                <a class="dropdown-item" data-dismiss="modal" href="#" onclick="searchAudiobooks()">Audiobooks</a>
                <a class="dropdown-item" data-dismiss="modal" href="#" onclick="searchBiographies()">Biographies</a>
                <a class="dropdown-item" data-dismiss="modal" href="#" onclick="searchBody()">Body</a>
                <a class="dropdown-item" data-dismiss="modal" href="#" onclick="searchBusiness()">Business</a>
                <a class="dropdown-item" data-dismiss="modal" href="#" onclick="searchChildren()">Children</a>
                <a class="dropdown-item" data-dismiss="modal" href="#" onclick="searchComics()">Comics</a>
                <a class="dropdown-item" data-dismiss="modal" href="#" onclick="searchContemporary()">Contemporary</a>
                <a class="dropdown-item" data-dismiss="modal" href="#" onclick="searchCooking()">Cooking</a>
                <a class="dropdown-item" data-dismiss="modal" href="#" onclick="searchCrime()">Crime</a>
                <a class="dropdown-item" data-dismiss="modal" href="#" onclick="searchEngineering()">Engineering</a>
                <a class="dropdown-item" data-dismiss="modal" href="#" onclick="searchEntertainment()">Entertainment</a>
                <a class="dropdown-item" data-dismiss="modal" href="#" onclick="searchFood()">Food</a>
                <a class="dropdown-item" data-dismiss="modal" href="#" onclick="searchGeneral()">General</a>
                <a class="dropdown-item" data-dismiss="modal" href="#" onclick="searchHealth()">Health</a>
                <a class="dropdown-item" data-dismiss="modal" href="#" onclick="searchHistory()">History</a>
                <a class="dropdown-item" data-dismiss="modal" href="#" onclick="searchHorror()">Horror</a>
                <a class="dropdown-item" data-dismiss="modal" href="#" onclick="searchInvesting()">Investing</a>
                <a class="dropdown-item" data-dismiss="modal" href="#" onclick="searchLiterary()">Literary</a>
                <a class="dropdown-item" data-dismiss="modal" href="#" onclick="searchLiterature()">Literature</a>
                <a class="dropdown-item" data-dismiss="modal" href="#" onclick="searchManga()">Manga</a>
                <a class="dropdown-item" data-dismiss="modal" href="#" onclick="searchMedia_help()">Media-help</a>
                <a class="dropdown-item" data-dismiss="modal" href="#" onclick="searchMemoirs()">Memoirs</a>
                <a class="dropdown-item" data-dismiss="modal" href="#" onclick="searchMind()">Mind</a>
                <a class="dropdown-item" data-dismiss="modal" href="#" onclick="searchMystery()">Mystery</a>
                <a class="dropdown-item" data-dismiss="modal" href="#" onclick="searchNonfiction()">Nonfiction</a>
                <a class="dropdown-item" data-dismiss="modal" href="#" onclick="searchReligion()">Religion</a>
                <a class="dropdown-item" data-dismiss="modal" href="#" onclick="searchScience()">Science</a>
                <a class="dropdown-item" data-dismiss="modal" href="#" onclick="searchSelf()">Self</a>
                <a class="dropdown-item" data-dismiss="modal" href="#" onclick="searchSpirituality()">Spirituality</a>
                <a class="dropdown-item" data-dismiss="modal" href="#" onclick="searchSports()">Sports</a>
                <a class="dropdown-item" data-dismiss="modal" href="#" onclick="searchSuperheroes()">Superheroes</a>
                <a class="dropdown-item" data-dismiss="modal" href="#" onclick="searchTechnology()">Technology</a>
                <a class="dropdown-item" data-dismiss="modal" href="#" onclick="searchThrillers()">Thrillers</a>
                <a class="dropdown-item" data-dismiss="modal" href="#" onclick="searchTravel()">Travel</a>
                <a class="dropdown-item" data-dismiss="modal" href="#" onclick="searchWomen()">Women</a>
                <a class="dropdown-item" data-dismiss="modal" href="#" onclick="searchYoung()">Young</a>
          </div>
        </div>
      </div>
    </div>

 
    <div class="body-container">   
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <div class="col-md-12">
					</div>
					
					<div class="col-md-12 input-group mb-3">
					   <input type="text" id="search" placeholder="title or author" class="form-control" autofocus/> 
                    <div class="input-group-append">
                        <button id="searchBtn" type="button" class="btn btn-dark">Search</button> 
                    </div>
                </div> 
            </div>
        </div>
		<div class="container-fluid">
            <div class="row mb-5" id="results"></div> 
        </div>          
    </div> 

    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.0/js/bootstrap.min.js" integrity="sha384-uefMccjFJAIv6A+rW+L4AHf99KvxDjWSu1z9VI8SKNVmz4sk7buKt/6v9KI65qnm" crossorigin="anonymous"></script>
</body>
</html>
