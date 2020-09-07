<!DOCTYPE html>
<html>
<head>
    <title>Resitation Form</title>
    
    <script>
      function pageRedirect() {
          window.location.href = "form.html";
      }      
      
  </script>
    <style>
      body{
        background: #E74C3C;
      }
      
    </style>
    

</head>
<body action="form.html">
  <h1 ><center>Welcome to my World </center></h1>
  <h2 style="top: 40%;"><center> If we go easy on them they will never learn.</center></h2>
  <br/>
  <button id="back" type="button" onClick="pageRedirect()"
  style="left: 48%;position: absolute;background: #F5B7B1;border-radius: 5px;">Back</button>
  <br/><br/>
<?php
$servername = "localhost";
$username = "root";
$password = "Bsdk@BKp007";
$dbname = "resitation_form";

if($_SERVER['REQUEST_METHOD'] == 'POST'){

$First_Name = $_POST['fname'];
$Last_Name = $_POST['lname'];
$Gender = $_POST['Gender'];
$Address = $_POST['add1'];
$Email = $_POST['email'];
$User_Name = $_POST['username'];
$Password = $_POST['password'];
}


try {
  $conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
  // set the PDO error mode to exception
  $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
  $sql = "INSERT INTO form (First_Name,Last_Name,Gender,Address,Email,User_Name,Password)
  VALUES (:First_Name, :Last_Name, :Gender, :Address, :Email, :User_Name, :Password)";
  // use exec() because no results are returned
  $stmt = $conn->prepare($sql);
  $stmt->execute(['First_Name'=>$First_Name,
  'Last_Name'=>$Last_Name, 'Gender'=>$Gender,'Address'=>$Address,'Email'=>$Email, 
  'User_Name'=>$User_Name,'Password'=>$Password]);
  
  echo "New record created successfully";
} catch(PDOException $e) {
  echo $sql . "<br>" . $e->getMessage();
}

$conn = null;
?>







  



</body>
</html>
