<!DOCTYPE html>

<html lang="en" dir="ltr">
<head>
    <meta charset="utf-8">
    <title>CV generator</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
    <link rel="stylesheet" href="CSS/template0.css">
</head>
<body>
<main id="resume" class="page">
    <header class="resume-header clearfix">
        <div class="profile-header pull-left">
            <h1><?php echo "$fName $lName" ?></h1>
            <h2><?php echo "$status" ?></h2>
        </div>
        <div class="profile-pic pull-right">
        </div>
    </header>

    <div class="resume-content">
        <div class="left-column container">
            <div class="title" <?php if ($contacts == []) echo "hidden"; ?>>
                <h3>Contact</h3>
                <div class="keyline"></div>
            </div>

            <?php
            foreach ($contacts as $temp_array) {
                echo '<div class="info-tag-container">';
                if ($temp_array[0] == "mail") {
                    echo '<i class="fa fa-envelope-o"></i>';
                    echo '<h6 class="info-text">';
                    echo "<a href=\"mailto:$temp_array[1]\" target=\"_blank\">";
                } else if ($temp_array[0] == "phone") {
                    echo '    <i class="fa fa-mobile"></i>';
                    echo '    <h6 class="info-text">';
                    echo "        <a href=\"tel:$temp_array[1]\">";
                } else if ($temp_array[0] == "website") {
                    echo '    <i class="fa fa-globe"></i>';
                    echo '    <h6 class="info-text">';
                    echo "        <a href=\"//$temp_array[1]\" target=\"_blank\">";
                } else if ($temp_array[0] == "insta") {
                    echo '    <i class="fa fa-instagram"></i>';
                    echo '    <h6 class="info-text">';
                    echo "        <a href=\"https://instagram.com/$temp_array[1]\" target=\"_blank\">";
                } else if ($temp_array[0] == "github") {
                    echo '    <i class="fa fa-github"></i>';
                    echo '    <h6 class="info-text">';
                    echo "        <a href=\"https://github.com/$temp_array[1]\" target=\"_blank\">";
                } else if ($temp_array[0] == "linkedin") {
                    echo '    <i class="fa fa-linkedin-square"></i>';
                    echo '    <h6 class="info-text">';
                    echo "        <a href=\"https://www.linkedin.com/in/$temp_array[1]\" target=\"_blank\">";
                }
                echo "$temp_array[1]";
                echo '</a>';
                echo '</h6>';
                echo '</div>';
            }
            ?>

            <div class="skills-container"<?php if ($skills == []) echo "hidden"; ?> >
                <section class="container">
                    <div class="title">
                        <h3>Skills</h3>
                        <div class="keyline"></div>
                    </div>
                    <?php
                    $skillLevel = ["None", "Beginner", "Novice", "Advanced", "Experienced", "Expert"];
                    foreach ($skills as $temp_array) {
                        $value = $temp_array[1];
                        echo "<h4 class='bold'>$temp_array[0]</h4>";
                        echo "<h5 class=\"bold capitalize\">$skillLevel[$value]</h5>";
                        echo '</section>';
                        echo '<br>';
                    }

                    ?>
            </div>

            <div class="container languages-container" <?php if ($languages == []) echo "hidden"; ?>>
                <div class="title">
                    <h3>Languages</h3>
                    <div class="keyline"></div>
                </div>
                <ul class="minimal">
                    <?php
                    foreach ($languages as $temp_array) {
                        echo '<li>';
                        if ($temp_array[1] != "") {
                            echo "<h6>$temp_array[0] <em>($temp_array[1])</em></h6>";
                        }
                        echo '</li>';
                    }
                    ?>
                </ul>
            </div>

            <br>
            <div class="container interests-container" <?php if ($interests == []) echo "hidden"; ?>>
                <div class="title">
                    <h3>Interests</h3>
                    <div class="keyline"></div>
                </div>

                <?php
                foreach ($interests as $temp_array) {
                    echo '<section class="item">';
                    echo "<h4 class=\"bold\">$temp_array[0]</h4>";
                    echo '<ul class="minimal">';
                    foreach ($temp_array[1] as $value) {
                        echo "<li>$value</li>";
                    }
                    echo '</ul>';
                    echo '</section>';
                }
                ?>
            </div>

        </div>
        <div class="right-column">
            <div class="container summary-container"<?php if ($summary == "") echo "hidden"; ?>>
                <div class="title">
                    <h3>Summary</h3>
                    <div class="keyline"></div>
                </div>
                <p class="summary">
                    <?php
                    echo "$summary";
                    ?>
                </p>
            </div>

            <div class="container project-container" <?php if ($projects == []) echo "hidden"; ?>>
                <div class="title">
                    <h3>Projects</h3>
                    <div class="keyline"></div>
                </div>

                <?php
                foreach ($projects as $temp_array) {
                    echo '<section class="item">';
                    echo '<div class="section-header clearfix">';
                    echo '<h3 class="bold pull-left">';
                    echo "$temp_array[0]";
                    echo '</h3>';
                    echo '</div>';
                    echo "<p class=\"summary\">$temp_array[1]</p>";
                    echo '</section>';
                }
                ?>
            </div>

            <div class="container education-container" <?php if ($educations == []) echo "hidden"; ?>>
                <div class="title">
                    <h3>Education/Diploma</h3>
                    <div class="keyline"></div>
                </div>

                <?php
                foreach ($educations as $temp_array) {
                    echo '<section class="item">';
                    echo '<div class="section-header clearfix">';
                    echo '<h3 class="bold pull-left">';
                    echo "$temp_array[0]";
                    echo '</h3>';
                    echo '</div>';
                    echo "<h4>$temp_array[1]</h4>";
                    echo '</section>';
                }
                ?>
            </div>

            <div class="container awards-container" <?php if ($more == []) echo "hidden"; ?>>
                <div class="title">
                    <h3>More</h3>
                    <div class="keyline"></div>
                </div>

                <?php
                foreach ($more as $temp_array) {
                    echo '<section class="item">';
                    echo '<div class="section-header clearfix">';
                    echo '<h3 class="bold pull-left">';
                    echo "$temp_array[0]";
                    echo '</h3>';
                    echo '<h5 class="italic pull-right"></h5>';
                    echo '</div>';
                    echo "<h5 class=\"awarder\">$temp_array[1]</h5>";
                    echo "<p class=\"summary\">$temp_array[2]</p>";
                    echo '</section>';
                }
                ?>
            </div>
        </div>
    </div>
</main>
</body>
</html>