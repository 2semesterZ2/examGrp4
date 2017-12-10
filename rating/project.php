<!DOCTYPE html>
<html lang="en">
<html>

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Antikmuseet</title>
  <link rel="stylesheet" type="text/css" href="./style.css">
</head>

<body>
<?php
class Database {
    function insert() {
        $dbhost = 'localhost:8888';
        $link = mysql_connect('localhost', 'root', 'root');
        if (! $link) {
            die('Could not connect: ' . mysql_error());
        }
        else {
            echo "connected";
        }
    }
}
?>

<h1 class="other"> Thank you for your visit!</h1>

<?php
$smiley=""; if(isset($_GET["smiley"])) { $comments = $_GET["smiley"]; }
?>

</body>

</html>
