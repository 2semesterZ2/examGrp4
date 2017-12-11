<html lang="en">
<html>

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Antikmuseet</title>
  <link rel="stylesheet" type="text/css" href="./style.css">
</head>
<body>
<h1 class="other"> Thank you for your visit!</h1>

<?php
$value=$_GET["smiley"];


?>

<?php
if (!($handle = fopen ( datatxt, "a" ) ) ) {
  die ("Cannot create the counter file.");
} else{
  fwrite ($handle, $value."\n");
  fclose ($handle);
}



?>
<script>setTimeout(function(){window.location.href='./index.html'},3000);</script>

</body>

</html>
