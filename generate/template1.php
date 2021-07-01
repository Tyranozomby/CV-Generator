<?php
?>

<!DOCTYPE html>

<html lang="en" dir="ltr">
<head>
    <meta charset="utf-8">
    <title>CV generator</title>
</head>
<body>
<h1 style="text-align: center">Template 1 !</h1>
<?php

echo "<p> $fName <br> $lName <br> $summary </p>";
echo "<br>";
for ($i = 0; $i < sizeof($skills); $i++) {
    $temp_array = $skills[$i];
    echo "<p>$temp_array[0]: $temp_array[1]</p>";
}

echo "<br>";
for ($i = 0; $i < sizeof($projects); $i++) {
    $temp_array = $projects[$i];
    echo "<p>$temp_array[0]: $temp_array[1]</p>";
}

echo "<br>";
for ($i = 0; $i < sizeof($educations); $i++) {
    $temp_array = $educations[$i];
    echo "<p>$temp_array[0]: $temp_array[1]</p>";
}

echo "<br>";
for ($i = 0; $i < sizeof($languages); $i++) {
    $temp_array = $languages[$i];
    echo "<p>$temp_array[0]: $temp_array[1]</p>";
}

echo "<br>";
for ($i = 0; $i < sizeof($contacts); $i++) {
    $temp_array = $contacts[$i];
    echo "<p>$temp_array[0]: $temp_array[1]</p>";
}

?>
</body>
</html>
