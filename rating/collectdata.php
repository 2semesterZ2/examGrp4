<!DOCTYPE html>
<html lang="en">
<html>

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Antikmuseet</title>
  <link rel="stylesheet" type="text/css" href="./collection.css">
</head>
<body>
  <h1> Visitors satisfaction statistics </h1>
  <table>
    <tr>
      <th>Satisfaction</th>

      <th> <img src="./images/5.png" alt="happy smiley"  /> </th>
      <th> <img src="./images/4.png" alt="satisfied smiley"  /> </th>
      <th> <img src="./images/3.png" alt="meh smiley"  /> </th>
      <th> <img src="./images/2.png" alt="unhappy smiley"  /> </th>
      <th> <img src="./images/1.png" alt="angry smiley"  /> </th>
    </tr>
    <tr>
      <td>Amount</td>
<?php

$lines = file ("./datatxt");
rsort($lines);

$number = 0 ;
$lastvalue = 5;

foreach ($lines as $line) {
  if ($line!=$lastvalue) {
   echo "<td>".$number."</td>";
    $lastvalue=$line;
    $number=0;
  }
  $number++;
}
echo "<td>".$number."</td>";


 ?>

    </tr>

  </table>

</body>

</html>
