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
            <img id="picture" alt="profile picture" src="">
            <script>
                const dataImage = sessionStorage.getItem('imgData');
                if (dataImage) {
                    const img = document.getElementById("picture");
                    img.src = "data:image/png;base64," + dataImage;
                } else {
                    document.getElementById("picture").parentNode.remove();
                }
            </script>
        </div>
    </header>

    <div class="resume-content">
        <div class="left-column container">
            <div <?php if ($contacts == []) echo "hidden"; ?>>
                <h3>Contact</h3>
                <div class="keyline"></div>
            </div>

            <?php
            if ($address != "") {
                echo '<div class="info-tag-container">';
                echo '    <i class="fa fa-map-marker"></i>';
                echo '    <h6 class="info-text">';
                echo "       $address";
                echo '    </h6>';
                echo '</div>';
            }

            foreach ($contacts as $temp_array) {
                echo '<div class="info-tag-container">';
                if ($temp_array[0] == "mail") {
                    echo '<i class="fa fa-envelope-o"></i>';
                    echo '<h6 class="info-text">';
                    echo "<a href='mailto:$temp_array[1]' target='_blank'>";
                } else if ($temp_array[0] == "phone") {
                    echo '    <i class="fa fa-mobile"></i>';
                    echo '    <h6 class="info-text">';
                    echo "        <a href='tel:$temp_array[1]'>";
                } else if ($temp_array[0] == "website") {
                    echo '    <i class="fa fa-globe"></i>';
                    echo '    <h6 class="info-text">';
                    echo "        <a href='//$temp_array[1]' target='_blank'>";
                } else if ($temp_array[0] == "insta") {
                    echo '    <i class="fa fa-instagram"></i>';
                    echo '    <h6 class="info-text">';
                    echo "        <a href='https://instagram.com/$temp_array[1]' target='_blank'>";
                } else if ($temp_array[0] == "github") {
                    echo '    <i class="fa fa-github"></i>';
                    echo '    <h6 class="info-text">';
                    echo "        <a href='https://github.com/$temp_array[1]' target='_blank'>";
                } else if ($temp_array[0] == "linkedin") {
                    echo '    <i class="fa fa-linkedin-square"></i>';
                    echo '    <h6 class="info-text">';
                    echo "        <a href='https://www.linkedin.com/in/$temp_array[1]' target='_blank'>";
                }
                echo "$temp_array[1]";
                echo '</a>';
                echo '</h6>';
                echo '</div>';
            }
            ?>

            <div <?php if ($skills == []) echo "hidden"; ?> >
                <section class="container">
                    <h3>Skills</h3>
                    <div class="keyline"></div>

                    <?php
                    $skillLevel = ["None", "Beginner", "Novice", "Advanced", "Experienced", "Expert"];
                    foreach ($skills as $temp_array) {
                        $value = $temp_array[1];
                        echo '<div class="item">';
                        echo "    <h4 class='bold'>$temp_array[0]</h4>";
                        echo "    <h5 class='bold'>$skillLevel[$value]</h5>";
                        echo '</div>';
                    }
                    ?>
                </section>
            </div>

            <div class="container" <?php if ($languages == []) echo "hidden"; ?>>
                <h3>Languages</h3>
                <div class="keyline"></div>

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

            <div class="container" <?php if ($interests == []) echo "hidden"; ?>>
                <h3>Interests</h3>
                <div class="keyline"></div>

                <?php
                foreach ($interests as $temp_array) {
                    echo '<section class="item">';
                    echo "<h4 class='bold'>$temp_array[0]</h4>";
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
            <div class="container"<?php if ($summary == "") echo "hidden"; ?>>
                <h3>Summary</h3>
                <div class="keyline"></div>

                <p class="summary">
                    <?php echo "$summary" ?>
                </p>
            </div>

            <div class="container" <?php if ($projects == []) echo "hidden"; ?>>
                <h3>Projects</h3>
                <div class="keyline"></div>

                <?php
                foreach ($projects as $temp_array) {
                    echo '<section class="item">';
                    echo '    <div class="section-header clearfix">';
                    echo '        <h3 class="bold pull-left">';
                    echo "          $temp_array[0]";
                    echo '        </h3>';
                    echo '    </div>';
                    echo "    <p class='summary'>$temp_array[1]</p>";
                    echo '</section>';
                }
                ?>
            </div>

            <div class="container" <?php if ($educations == []) echo "hidden"; ?>>
                <h3>Education</h3>
                <div class="keyline"></div>

                <?php
                foreach ($educations as $temp_array) {
                    echo '<section class="item">';
                    echo '    <div class="section-header clearfix">';
                    echo '        <h3 class="bold pull-left">';
                    echo "          $temp_array[0]";
                    echo '        </h3>';
                    echo '        <h5 class="italic pull-right">';
                    echo date('m/Y', strtotime($temp_array[2])) . " - " . date('m/Y', strtotime($temp_array[3]));
                    echo '        </h5>';
                    echo '    </div>';
                    echo "    <h4>$temp_array[1]</h4>";
                    echo "    <p>$temp_array[4]</p>";
                    echo '</section>';
                }
                ?>
            </div>

            <div class="container" <?php if ($experiences == []) echo "hidden"; ?>>
                <h3>Experience</h3>
                <div class="keyline"></div>

                <?php
                foreach ($experiences as $temp_array) {
                    echo '<section class="item">';
                    echo '    <div class="section-header clearfix">';
                    echo '        <h3 class="bold pull-left">';
                    echo "          $temp_array[0]";
                    echo '        </h3>';
                    echo '        <h5 class="italic pull-right">';
                    echo date('m/Y', strtotime($temp_array[2])) . " - " . date('m/Y', strtotime($temp_array[3]));
                    echo '        </h5>';
                    echo '    </div>';
                    echo "    <h4>$temp_array[1]</h4>";
                    echo "    <p>$temp_array[4]</p>";
                    echo '</section>';
                }
                ?>
            </div>


            <?php
            foreach ($more as $temp_array) {
                echo '<div class="container">';
                echo "        <h3>$temp_array[0]</h3>";
                echo '        <div class="keyline"></div >';

                echo '    <section class="item">';
                echo '        <div class="section-header clearfix">';
                echo '            <h3 class="bold pull-left">';
                echo "              $temp_array[1]";
                echo '            </h3>';
                echo '            <h5 class="italic pull-right">';
                if ($temp_array[3] != "" and $temp_array[4] != "") {
                    echo date('m/Y', strtotime($temp_array[3])) . " - " . date('m/Y', strtotime($temp_array[4]));
                }
                echo '            </h5>';
                echo '        </div>';
                echo "        <h4>$temp_array[2]</h4>";
                echo "        <p>$temp_array[5]</p>";
                echo '    </section>';
                echo '</div>';
            }
            ?>
        </div>
    </div>
</main>
</body>
</html>