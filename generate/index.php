<?php

function myErrorHandler()
{
    header("location: ../");
}

set_error_handler("myErrorHandler");


$fName = $_POST['fName'];
$lName = $_POST['lName'];
$status = $_POST['status'];
$summary = nl2br($_POST['summary']);
$skills = [];
$projects = [];
$education = [];
$language = [];
$contact = [];
$interests = [];
$more = [];

$contactsWay = ["mail", "phone", "website", "insta", "github", "linkedin"];

$i = 0;
while (array_key_exists("starSkill" . $i, $_POST)) {
    if ($_POST["starSkill" . $i] != "" and $_POST["starValue" . $i] != "") {
        $skills[$i] = [$_POST["starSkill" . $i], $_POST["starValue" . $i]];
    }
    $i++;
}

$i = 0;
while (array_key_exists("project" . $i, $_POST)) {
    if ($_POST["project" . $i] != "" and $_POST["projectText" . $i] != "") {
        $projects[$i] = [$_POST["project" . $i], nl2br($_POST["projectText" . $i])];
    }
    $i++;
}

$i = 0;
while (array_key_exists("education" . $i, $_POST)) {
    if ($_POST["education" . $i] != "" and $_POST["educationText" . $i] != "") {
        $education[$i] = [$_POST["education" . $i], nl2br($_POST["educationText" . $i])];
    }
    $i++;
}

$i = 0;
while (array_key_exists("language" . $i, $_POST)) {
    if ($_POST["language" . $i] != "" and $_POST["languageText" . $i] != "") {
        $language[$i] = [$_POST["language" . $i], $_POST["languageText" . $i]];
    }
    $i++;
}

$i = 0;
for ($j = 0; $j < sizeof($contactsWay); $j++) {
    if ($_POST[$contactsWay[$j]]) {
        $contact[$i] = [$contactsWay[$j], $_POST[$contactsWay[$j]]];
        $i++;
    }
}

$i = 0;
while (array_key_exists("interestCategory" . $i, $_POST)) {
    if ($_POST["interestCategory" . $i] != "" and $_POST["interestList" . $i] != "") {
        $interests[$i] = [$_POST["interestCategory" . $i], preg_split('/\n/', nl2br($_POST["interestList" . $i]))];
    }
    $i++;
}

$i = 0;
while (array_key_exists("moreTitle" . $i, $_POST)) {
    if ($_POST["moreTitle" . $i] != "" or nl2br($_POST["moreInfo" . $i]) != "") {
        $more[$i] = [$_POST["moreTitle" . $i], $_POST["moreSubtitle" . $i], nl2br($_POST["moreInfo" . $i])];
    }
    $i++;
}

include("template" . $_POST["template"] . ".php");