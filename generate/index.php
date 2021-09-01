<?php

// En cas d'erreur (valeur non reconnue quelque part), renvoie sur la page principale.
function myErrorHandler()
{
    header("location: ../");
}

set_error_handler("myErrorHandler");


$fName = $_POST['fName'];
$lName = $_POST['lName'];
$status = $_POST['status'];
$address = $_POST["address"];

$summary = nl2br($_POST['summary']);

$skills = [];
$projects = [];
$educations = [];
$experiences = [];
$languages = [];
$contacts = [];
$interests = [];
$more = [];


// Recherche toutes les compétences.
// Pour chacun, stocke dans $skills un tableau [nom, niveau]
$i = 0;
while (array_key_exists("skillName" . $i, $_POST)) {
    if ($_POST["skillName" . $i] != "" and !ctype_space($_POST["skillName" . $i])) {
        $skills[$i] = [$_POST["skillName" . $i], $_POST["skillValue" . $i]];
    }
    $i++;
}

// Recherche tous les projets.
// Transforme les sauts de ligne en <br/>
// Pour chacun, stocke dans $projects un tableau [nom, texte]
$i = 0;
while (array_key_exists("projectName" . $i, $_POST)) {
    if ($_POST["projectName" . $i] != "" and !ctype_space($_POST["projectText" . $i])) {
        $projects[$i] = [$_POST["projectName" . $i], nl2br($_POST["projectText" . $i])];
    }
    $i++;
}

// Recherche toutes les études.
// Transforme les sauts de ligne en <br/> pour la description.
// Pour chacun, stocke dans $education un tableau [school, diploma, start, end, texte]
$i = 0;
while (array_key_exists("educationSchool" . $i, $_POST)) {
    if ($_POST["educationSchool" . $i] != "" and !ctype_space($_POST["educationSchool" . $i])) {
        $educations[$i] = [$_POST["educationSchool" . $i], $_POST["educationDiploma" . $i], $_POST["educationStart" . $i], $_POST["educationEnd" . $i], nl2br($_POST["educationText" . $i])];
    }
    $i++;
}

// Recherche toutes les expériences.
// Transforme les sauts de ligne en <br/> pour la description.
// Pour chacun, stocke dans $experience un tableau [company, position, start, end, texte]
$i = 0;
while (array_key_exists("experienceCompany" . $i, $_POST)) {
    if ($_POST["experienceCompany" . $i] != "" and !ctype_space($_POST["experienceCompany" . $i])) {
        $experiences[$i] = [$_POST["experienceCompany" . $i], $_POST["experiencePosition" . $i], $_POST["experienceStart" . $i], $_POST["experienceEnd" . $i], nl2br($_POST["experienceText" . $i])];
    }
    $i++;
}

// Recherche toutes les langues.
// Pour chacun, stocke dans $language un tableau [nom, texte]
$i = 0;
while (array_key_exists("languageName" . $i, $_POST)) {
    if ($_POST["languageName" . $i] != "" and !ctype_space($_POST["languageName" . $i])) {
        $languages[$i] = [$_POST["languageName" . $i], $_POST["languageText" . $i]];
    }
    $i++;
}

// Recherche tous les contacts.
// Pour chacun, stocke dans $contacts un tableau [moyen de contact, valeur associée]
$contactsWay = ["mail", "phone", "website", "insta", "github", "linkedin"];
$i = 0;
for ($j = 0; $j < sizeof($contactsWay); $j++) {
    if ($_POST[$contactsWay[$j]] != "" and !ctype_space($_POST[$contactsWay[$j] . $i])) {
        $contacts[$i] = [$contactsWay[$j], $_POST[$contactsWay[$j]]];
        $i++;
    }
}

// Recherche toutes les zones d'intérêts.
// Pour chacun, stocke dans $interests un tableau [catégorie, [intérêt1, intérêt2]]
$i = 0;
while (array_key_exists("interestCategory" . $i, $_POST)) {
    if ($_POST["interestCategory" . $i] != "" and !ctype_space($_POST["interestCategory" . $i])) {
        $interests[$i] = [$_POST["interestCategory" . $i], preg_split('/\n/', nl2br($_POST["interestList" . $i]))];
    }
    $i++;
}

// Recherche le reste.
// Pour chacun, stocke dans $more un tableau [titre, sous-titre, texte]
$i = 0;
while (array_key_exists("moreCategory" . $i, $_POST)) {
    if ($_POST["moreCategory" . $i] != "" and !ctype_space($_POST["moreCategory" . $i])) {
        $more[$i] = [$_POST["moreCategory" . $i], $_POST["moreTitle" . $i], $_POST["moreSubtitle" . $i], $_POST["moreStart" . $i], $_POST["moreEnd" . $i], nl2br($_POST["moreInfo" . $i])];
    }
    $i++;
}

// Inclus le code du template demandé.
include("template" . $_POST["template"] . ".php");