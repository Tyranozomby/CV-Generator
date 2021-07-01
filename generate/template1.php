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
for ($i = 0; $i < sizeof($education); $i++) {
    $temp_array = $education[$i];
    echo "<p>$temp_array[0]: $temp_array[1]</p>";
}

echo "<br>";
for ($i = 0; $i < sizeof($language); $i++) {
    $temp_array = $language[$i];
    echo "<p>$temp_array[0]: $temp_array[1]</p>";
}

echo "<br>";
for ($i = 0; $i < sizeof($contact); $i++) {
    $temp_array = $contact[$i];
    echo "<p>$temp_array[0]: $temp_array[1]</p>";
}

?>
</body>
</html>
